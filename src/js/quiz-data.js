/**
 * Quiz Questions Data Schema & Trust Messaging
 */

export const QUIZ_QUESTIONS = [
  {
    step: 1,
    field: "procedimento_interesse",
    title: "Qual a sua principal queixa ou objetivo?",
    options: [
      { label: "Sinto meu rosto perdendo a firmeza e o contorno jovial", value: "Rejuvenescimento Facial (Rosto derretendo)" },
      { label: "Desejo recuperar a firmeza e contorno do corpo após a gestação", value: "Mommy Makeover (Corpo pós-gravidez)" },
      { label: "Gordura localizada resistente que não sai com exercícios (pochete)", value: "Lipoaspiração (Gordura na pochete)" },
      { label: "Incomodo com mamas assimétricas (tamanhos/formatos diferentes)", value: "Assimetria Mamária (Peito assimétrico)" },
      { label: "Seios caídos, murchos ou sem sustentação (pós-amamentação)", value: "Mastopexia (Peito caído pós-amamentação)" },
      { label: "Excesso de pele ou flacidez na barriga (efeito avental)", value: "Abdominoplastia (Barriga avental)" },
      { label: "Outra queixa ou objetivo", value: "Outro objetivo", hasCustomInput: true }
    ],
    trustBanner: {
      icon: "shield-check",
      text: "Formação na prestigiada Escola Ivo Pitanguy com foco total em naturalidade."
    }
  },
  {
    step: 2,
    field: "impacto_autoestima",
    title: "Como essa queixa afeta a sua autoestima no dia a dia?",
    options: [
      { label: "Evito usar certas roupas (como biquíni, regatas ou roupas justas)", value: "Evita usar certas roupas" },
      { label: "Sinto desconforto ou vergonha ao me olhar no espelho", value: "Desconforto ao olhar no espelho" },
      { label: "Afeta minha autoconfiança nos relacionamentos e vida íntima", value: "Afeta relacionamentos e vida íntima" },
      { label: "Quero apenas me sentir mais segura e recuperar minha melhor versão", value: "Recuperar autoconfiança geral" }
    ],
    trustBanner: {
      icon: "heart",
      text: "Entendemos o impacto emocional e buscamos resultados harmônicos para sua autoconfiança."
    }
  },
  {
    step: 3,
    field: "historico_cirurgico",
    title: "Já realizou alguma cirurgia plástica anteriormente?",
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
    step: 4,
    field: "preocupacao_principal",
    title: "Qual a sua maior preocupação ou dúvida sobre a cirurgia?",
    options: [
      { label: "Medo de um resultado artificial ou sem naturalidade", value: "Naturalidade do resultado" },
      { label: "Tempo de recuperação ou medo de sentir dor no pós-operatório", value: "Tempo de recuperação" },
      { label: "Segurança da cirurgia (riscos, anestesia, UTI e hospital)", value: "Segurança / Hospital" },
      { label: "Valores, formas de parcelamento e investimento financeiro", value: "Valores / Investimento" }
    ],
    trustBanner: {
      icon: "star",
      text: "Nosso foco é oferecer naturalidade e segurança em todas as etapas do procedimento."
    }
  },
  {
    step: 5,
    field: "paciente_novo_ou_recorrente",
    title: "Você já realizou algum atendimento conosco?",
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
    step: 6,
    field: "origem_geografica",
    title: "De onde você pretende realizar seu atendimento?",
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
    step: 7,
    field: "urgencia",
    title: "Em que momento você está?",
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
    step: 8,
    field: "como_conheceu",
    title: "Como conheceu o Dr. José Salim Cury?",
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
