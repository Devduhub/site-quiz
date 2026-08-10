import { CONFIG } from './config.js';

/**
 * Builds dynamic WhatsApp URL with emojis using api.whatsapp.com for reliable multi-platform emoji rendering.
 */
export function buildWhatsAppUrl(payload) {
  const nome = payload.nome || 'Paciente';
  const procedimento = payload.procedimento_interesse || 'Consultoria de Cirurgia Plástica';
  const queixa = payload.queixa_principal || procedimento;
  const impactoAutoestima = payload.impacto_autoestima || 'Não informado';
  const historico = payload.historico_cirurgico || 'Não informado';
  const preocupacao = payload.preocupacao_principal || 'Não informado';
  const pacienteStatus = payload.paciente_novo_ou_recorrente || 'Primeira vez';
  const origemGeo = payload.origem_geografica || 'São Paulo';
  const momentoUrgencia = payload.urgencia || 'Estou pesquisando';
  const comoConheceu = payload.como_conheceu || 'Site';

  const messageText = `✨ *Novo Pré-Atendimento Realizado* ✨

Olá! Acabei de concluir o formulário de pré-atendimento no site do Dr. José Salim Cury.

👤 *Nome:* ${nome}
🩺 *Queixa / Objetivo:* ${queixa}
❤️ *Impacto na Autoestima:* ${impactoAutoestima}
🔍 *Histórico de Cirurgias:* ${historico}
🛡️ *Maior Preocupação:* ${preocupacao}
📋 *Perfil:* ${pacienteStatus}
📍 *Origem:* ${origemGeo}
⏳ *Momento:* ${momentoUrgencia}
📲 *Como conheceu:* ${comoConheceu}

Gostaria de dar continuidade ao atendimento.`;

  const encodedMessage = encodeURIComponent(messageText);
  // Using api.whatsapp.com/send guarantees clean emoji encoding across all devices and WhatsApp Web
  return `https://api.whatsapp.com/send?phone=${CONFIG.WHATSAPP_NUMBER}&text=${encodedMessage}`;
}

export function redirectToWhatsApp(payload) {
  const url = buildWhatsAppUrl(payload);
  window.location.href = url;
}
