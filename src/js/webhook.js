import { CONFIG } from './config.js';

/**
 * Formats Brazilian phone numbers into E.164 format (e.g., 5511999999999)
 * Removes spaces, hyphens, parentheses, and prepends DDI (55) if missing.
 */
export function formatE164Phone(phoneString) {
  if (!phoneString) return '';
  let digits = phoneString.replace(/\D/g, '');
  if (!digits) return '';
  
  // If 10 or 11 digits (e.g., 11999999999), prepend Brazil DDI (55)
  if (digits.length === 10 || digits.length === 11) {
    digits = '55' + digits;
  }
  return digits;
}

/**
 * Sends lead data payload to configured WEBHOOK_URL via fetch POST.
 * Non-blocking error handling guarantees WhatsApp redirection works seamlessly.
 */
export async function sendLeadWebhook(payload) {
  const url = CONFIG.WEBHOOK_URL ? CONFIG.WEBHOOK_URL.trim() : '';

  if (!url) {
    console.info("Webhook URL is empty. Skipping webhook POST and proceeding directly to WhatsApp.");
    return { success: true, skipped: true };
  }

  const exactPayload = {
    nome: payload.nome || '',
    whatsapp: formatE164Phone(payload.whatsapp),
    procedimento_interesse: payload.procedimento_interesse || '',
    queixa_principal: payload.queixa_principal || payload.procedimento_interesse || '',
    paciente_novo_ou_recorrente: payload.paciente_novo_ou_recorrente || '',
    origem_geografica: payload.origem_geografica || '',
    urgencia: payload.urgencia || '',
    como_conheceu: payload.como_conheceu || '',
    origem_lead: "quiz-site"
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4-second timeout limit

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exactPayload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      console.log("Webhook payload delivered successfully to CRM!");
      return { success: true };
    } else {
      console.warn(`Webhook responded with status ${response.status}. Continuing to WhatsApp.`);
      return { success: false, status: response.status };
    }
  } catch (error) {
    console.error("Webhook POST failed or timed out:", error);
    // Never block user! Return gracefully so WhatsApp flow proceeds
    return { success: false, error: error.message };
  }
}
