import { quizState } from './state.js';
import { QUIZ_QUESTIONS } from './quiz-data.js';
import { applyPhoneMask, isValidPhone, isValidName } from './mask.js';
import { sendLeadWebhook } from './webhook.js';
import { redirectToWhatsApp } from './whatsapp.js';
import { CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  // DOM Element references
  const navBar = document.getElementById('quiz-nav-bar');
  const btnBack = document.getElementById('btn-back');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  const inputPhone = document.getElementById('phone-input');
  const inputName = document.getElementById('name-input');
  const formLead = document.getElementById('form-lead');
  const errName = document.getElementById('err-name');
  const errPhone = document.getElementById('err-phone');

  // Initialize view
  renderCurrentStep();

  // Navigation Event Listeners
  if (btnBack) {
    btnBack.addEventListener('click', handleBackStep);
  }

  // Delegate clicks on Start button in Step 0
  document.addEventListener('click', (e) => {
    if (e.target.closest('#btn-start-quiz')) {
      goToStep(1);
    }
  });

  // Handle Form submission in Step 6
  if (formLead) {
    formLead.addEventListener('submit', handleFormSubmit);
  }

  // Handle phone mask formatting
  if (inputPhone) {
    inputPhone.addEventListener('input', (e) => {
      e.target.value = applyPhoneMask(e.target.value);
      if (errPhone.classList.contains('active')) {
        validateFormInputs(false);
      }
    });
  }

  if (inputName) {
    inputName.addEventListener('input', () => {
      if (errName.classList.contains('active')) {
        validateFormInputs(false);
      }
    });
  }

  // Keyboard navigation support (1-6 for options, Enter for next/start)
  document.addEventListener('keydown', (e) => {
    const currentStep = quizState.getStep();
    
    // Pressing Enter on step 0
    if (e.key === 'Enter' && currentStep === 0) {
      goToStep(1);
      return;
    }

    // Number keys 1-6 for option selection on Question steps 1..5
    if (currentStep >= 1 && currentStep <= 5) {
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= 6) {
        const activeStepEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
        if (activeStepEl) {
          const options = activeStepEl.querySelectorAll('.option-card');
          if (options[num - 1]) {
            options[num - 1].click();
          }
        }
      }
    }
  });

  // State & Render Functions
  function goToStep(stepIndex) {
    quizState.setStep(stepIndex);
    renderCurrentStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBackStep() {
    const current = quizState.getStep();
    if (current > 1) {
      goToStep(current - 1);
    } else if (current === 1) {
      goToStep(0);
    }
  }

  function renderCurrentStep() {
    const currentStep = quizState.getStep();

    // 1. Update Progress Header
    if (currentStep === 0 || currentStep === 7) {
      navBar.style.display = 'none';
    } else {
      navBar.style.display = 'flex';
      btnBack.style.display = currentStep > 0 ? 'inline-flex' : 'none';
      
      // Calculate progress percentage: Steps 1..6 map to 20%, 40%, 60%, 80%, 100%
      const percentage = Math.min(100, Math.round((currentStep / 5) * 100));
      progressFill.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}% concluído`;
    }

    // 2. Hide all steps
    const allSteps = document.querySelectorAll('.quiz-step');
    allSteps.forEach(el => el.classList.remove('active', 'animate-fade-in'));

    // 3. Show current step element
    const activeStep = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
    if (activeStep) {
      activeStep.classList.add('active', 'animate-fade-in');
      
      // If entering Step 1..5, bind option selection handlers
      if (currentStep >= 1 && currentStep <= 5) {
        setupQuestionStep(activeStep, currentStep);
      } else if (currentStep === 6) {
        // Step 6: Form fields pre-fill if existing
        const answers = quizState.getAnswers();
        if (inputName && answers.nome) inputName.value = answers.nome;
        if (inputPhone && answers.whatsapp) inputPhone.value = answers.whatsapp;
      } else if (currentStep === 7) {
        // Step 7: Processing & Redirection sequence
        triggerCompletionSequence();
      }
    }
  }

  function setupQuestionStep(stepElement, stepIndex) {
    const questionConfig = QUIZ_QUESTIONS.find(q => q.step === stepIndex);
    if (!questionConfig) return;

    const optionsGrid = stepElement.querySelector('.options-grid');
    if (!optionsGrid) return;

    const currentAnswers = quizState.getAnswers();
    const selectedValue = currentAnswers[questionConfig.field] || '';

    // Highlight pre-selected option if any
    const optionCards = optionsGrid.querySelectorAll('.option-card');
    optionCards.forEach(card => {
      const val = card.getAttribute('data-value');
      if (val === selectedValue) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }

      // Add click listener
      card.onclick = () => {
        // Clear selected class from siblings
        optionCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        const value = card.getAttribute('data-value');
        const hasCustom = card.getAttribute('data-custom') === 'true';
        const customContainer = stepElement.querySelector('.custom-queixa-container');

        if (hasCustom) {
          // Show custom textarea for "Outro objetivo"
          if (customContainer) customContainer.classList.add('active');
          quizState.setAnswer(questionConfig.field, value);
        } else {
          if (customContainer) customContainer.classList.remove('active');
          
          if (stepIndex === 1) {
            // ONLY on Step 1 set both procedimento_interesse and queixa_principal
            quizState.setMultipleAnswers({
              procedimento_interesse: value,
              queixa_principal: value
            });
          } else {
            // On Steps 2..5, ONLY set the specific step field!
            quizState.setAnswer(questionConfig.field, value);
          }

          // Auto-advance after small feedback delay
          setTimeout(() => {
            goToStep(stepIndex + 1);
          }, CONFIG.AUTO_ADVANCE_DELAY_MS);
        }
      };
    });

    // Custom input handler inside Q1
    const customContainer = stepElement.querySelector('.custom-queixa-container');
    const customTextarea = stepElement.querySelector('.custom-queixa-input');
    const btnConfirmCustom = stepElement.querySelector('.btn-confirm-custom');

    if (customTextarea && btnConfirmCustom) {
      if (selectedValue === 'Outro objetivo') {
        if (customContainer) customContainer.classList.add('active');
        customTextarea.value = (currentAnswers.queixa_principal && currentAnswers.queixa_principal !== 'Outro objetivo') ? currentAnswers.queixa_principal : '';
      }

      btnConfirmCustom.onclick = () => {
        const text = customTextarea.value.trim();
        quizState.setMultipleAnswers({
          procedimento_interesse: 'Outro objetivo',
          queixa_principal: text || 'Outro objetivo'
        });
        goToStep(stepIndex + 1);
      };
    }
  }

  // Handle Form Submission (Step 6)
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateFormInputs(true)) {
      return;
    }

    const nameVal = inputName.value.trim();
    const phoneVal = inputPhone.value.trim();

    quizState.setMultipleAnswers({
      nome: nameVal,
      whatsapp: phoneVal
    });

    // Transition to loading step 7
    goToStep(7);
  }

  function validateFormInputs(showErrors = false) {
    let valid = true;

    const nameVal = inputName ? inputName.value.trim() : '';
    const phoneVal = inputPhone ? inputPhone.value.trim() : '';

    if (!isValidName(nameVal)) {
      valid = false;
      if (showErrors && errName) errName.classList.add('active');
      if (inputName) inputName.classList.add('invalid');
    } else {
      if (errName) errName.classList.remove('active');
      if (inputName) inputName.classList.remove('invalid');
    }

    if (!isValidPhone(phoneVal)) {
      valid = false;
      if (showErrors && errPhone) errPhone.classList.add('active');
      if (inputPhone) inputPhone.classList.add('invalid');
    } else {
      if (errPhone) errPhone.classList.remove('active');
      if (inputPhone) inputPhone.classList.remove('invalid');
    }

    return valid;
  }

  // Step 7: Completion Sequence (Webhook + WhatsApp)
  async function triggerCompletionSequence() {
    const payload = quizState.getAnswers();

    // 1. Send webhook concurrently
    const webhookPromise = sendLeadWebhook(payload);

    // 2. Enforce minimum 2-second luxury processing delay
    const delayPromise = new Promise(resolve => setTimeout(resolve, CONFIG.REDIRECT_DELAY_MS));

    await Promise.all([webhookPromise, delayPromise]);

    // 3. Clear local storage cache
    quizState.reset();

    // 4. Redirect lead automatically to WhatsApp
    redirectToWhatsApp(payload);
  }
});
