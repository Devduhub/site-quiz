/**
 * Quiz Questions Data Schema & Trust Messaging
 */

export const QUIZ_QUESTIONS = [
  {
    step: 1,
    field: "procedimento_interesse",
    title: "Qual a sua principal queixa ou objetivo?",
    subtitle: "Selecione a opção que melhor descreve a sua busca atual.",
    options: [
      { label: "Rosto derretendo depois dos 40 / 50 anos?", value: "Rejuvenescimento Facial (Rosto derretendo)" },
      { label: "Corpo feio depois da gravidez?", value: "Mommy Makeover (Corpo pós-gravidez)" },
      { label: "Gordura localizada na pochete?", value: "Lipoaspiração (Gordura na pochete)" },
      { label: "Um peito maior que o outro?", value: "Assimetria Mamária (Peito assimétrico)" },
      { label: "Peito caído e murcho depois da amamentação?", value: "Mastopexia (Peito caído pós-amamentação)" },
      { label: "Como eliminar a barriga avental?", value: "Abdominoplastia (Barriga avental)" },
      { label: "Outra queixa ou objetivo", value: "Outro objetivo", hasCustomInput: true }
    ],
    trustBanner: {
      icon: "shield-check",
      text: "Formação na prestigiada Escola Ivo Pitanguy com foco total em naturalidade."
    }
  },
  {
    step: 2,
    field: "historico_cirurgico",
    title: "Já realizou alguma cirurgia plástica anteriormente?",
    subtitle: "Isso nos ajuda a entender sua experiência cirúrgica anterior.",
    options: [
      { label: "Nunca fiz cirurgia plástica", value: "Nunca fez cirurgia" },
      { label: "Sim, já fiz cirurgia plástica", value: "Já fez cirurgia plástica" },
      { label: "Já fiz procedimentos estéticos simples", value: "Já fez procedimentos estéticos" }
    ],
    trustBanner: {
      icon: "heart-handshake",
      text: "Segurança total seguindo rigorosos protocolos internacionais de cirurgia plástica."
    }
  },
  {
    step: 3,
    field: "preocupacao_principal",
    title: "Qual a sua maior preocupação ou dúvida sobre a cirurgia?",
    subtitle: "Sua resposta nos permite focar nas suas prioridades de segurança e pós-operatório.",
    options: [
      { label: "Medo de resultado artificial (falta de naturalidade)", value: "Naturalidade do resultado" },
      { label: "Tempo de recuperação e repouso pós-operatório", value: "Tempo de recuperação" },
      { label: "Segurança do procedimento e infraestrutura do hospital", value: "Segurança / Hospital" },
      { label: "Valores e formas de pagamento", value: "Valores / Investimento" }
    ],
    trustBanner: {
      icon: "star",
      text: "Nosso foco é oferecer naturalidade e segurança em todas as etapas do procedimento."
    }
  },
  {
    step: 4,
    field: "paciente_novo_ou_recorrente",
    title: "Você já realizou algum atendimento conosco?",
    subtitle: "Para direcionarmos seu histórico de forma adequada.",
    options: [
      { label: "Primeira vez", value: "Primeira vez" },
      { label: "Já sou paciente", value: "Já sou paciente" }
    ],
    trustBanner: {
      icon: "clock",
      text: "Consultas individuais com duração mínima de 1 hora com o próprio Dr. José Salim Cury."
    }
  },
  {
    step: 5,
    field: "origem_geografica",
    title: "De onde você pretende realizar seu atendimento?",
    subtitle: "Oferecemos logística completa para pacientes de outras regiões e países.",
    options: [
      { label: "São Paulo (Capital / Região Metropolitana)", value: "São Paulo" },
      { label: "Outra cidade (Suporte a deslocamento)", value: "Outra cidade" },
      { label: "Outro país (Atendimento internacional)", value: "Outro país" }
    ],
    trustBanner: {
      icon: "building-hospital",
      text: "Cirurgias realizadas exclusivamente nos melhores hospitais de alto padrão de São Paulo."
    }
  },
  {
    step: 6,
    field: "urgencia",
    title: "Em que momento você está?",
    subtitle: "Assim conseguimos priorizar as opções de datas e agendas.",
    options: [
      { label: "Já decidi fazer (Quero agendar consulta)", value: "Já decidi fazer" },
      { label: "Estou pesquisando (Tirando dúvidas)", value: "Estou pesquisando" },
      { label: "Tenho uma data especial em mente", value: "Tenho uma data especial" }
    ],
    trustBanner: {
      icon: "heart-handshake",
      text: "Acompanhamento pós-operatório dedicado e contínuo com equipe própria especializada."
    }
  },
  {
    step: 7,
    field: "como_conheceu",
    title: "Como conheceu o Dr. José Salim Cury?",
    subtitle: "Saber disso nos ajuda a aprimorar nosso atendimento.",
    options: [
      { label: "Indicação médica", value: "Indicação médica" },
      { label: "Indicação de amigo / paciente", value: "Indicação de amigo" },
      { label: "Redes sociais (Instagram / TikTok)", value: "Redes sociais" },
      { label: "Pesquisa no Google", value: "Pesquisa no Google" },
      { label: "Evento / Imprensa (CARAS)", value: "Evento" },
      { label: "Outro", value: "Outro" }
    ],
    trustBanner: {
      icon: "star",
      text: "Avaliação 5.0 estrelas no Google com mais de 110 depoimentos de pacientes atendidos."
    }
  }
];
