import { CONFIG } from './config.js';

const initialState = {
  currentStep: 0, // 0 = Intro, 1..7 = Q1..Q7, 8 = Form, 9 = Loading
  answers: {
    procedimento_interesse: '',
    queixa_principal: '',
    historico_cirurgico: '',
    preocupacao_principal: '',
    paciente_novo_ou_recorrente: '',
    origem_geografica: '',
    urgencia: '',
    como_conheceu: '',
    nome: '',
    whatsapp: '',
    origem_lead: 'quiz-site'
  }
};

class QuizState {
  constructor() {
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Don't restore if already completed (step 9)
        if (parsed.currentStep >= 9) {
          return { ...initialState };
        }
        return { ...initialState, ...parsed };
      }
    } catch (e) {
      console.warn("Failed to load local storage quiz state", e);
    }
    return { ...initialState };
  }

  saveState() {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Failed to save quiz state to local storage", e);
    }
  }

  getStep() {
    return this.state.currentStep;
  }

  setStep(stepIndex) {
    this.state.currentStep = stepIndex;
    this.saveState();
  }

  getAnswers() {
    return { ...this.state.answers };
  }

  setAnswer(key, value) {
    this.state.answers[key] = value;
    this.saveState();
  }

  setMultipleAnswers(answersObj) {
    this.state.answers = { ...this.state.answers, ...answersObj };
    this.saveState();
  }

  reset() {
    this.state = { ...initialState };
    try {
      localStorage.removeItem(CONFIG.STORAGE_KEY);
    } catch (e) {}
  }
}

export const quizState = new QuizState();
