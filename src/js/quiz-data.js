/**
 * Quiz Questions Data Schema & Trust Messaging
 */

export const QUIZ_QUESTIONS = [
  {
    step: 1,
    field: "procedimento_interesse",
    title: "Qual resultado você deseja alcançar?",
    subtitle: "Selecione a opção que melhor descreve seu objetivo principal.",
    options: [
      { label: "Quero rejuvenescer meu rosto", value: "Quero rejuvenescer meu rosto" },
      { label: "Melhorar meu contorno corporal", value: "Melhorar meu contorno corporal" },
      { label: "Corrigir alterações após gravidez", value: "Corrigir alterações após gravidez" },
      { label: "Melhorar a aparência das mamas", value: "Melhorar a aparência das mamas" },
      { label: "Outro objetivo", value: "Outro objetivo", hasCustomInput: true }
    ],
    trustBanner: {
      icon: "shield-check",
      text: "Formação na prestigiada Escola Ivo Pitanguy com foco total em naturalidade."
    }
  },
  {
    step: 2,
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
    step: 3,
    field: "origem_geografica",
    title: "De onde você pretende realizar seu atendimento?",
    subtitle: "Oferecemos logística completa para pacientes de outras regiões e países.",
    options: [
      { label: "São Paulo", value: "São Paulo" },
      { label: "Outra cidade", value: "Outra cidade" },
      { label: "Outro país", value: "Outro país" }
    ],
    trustBanner: {
      icon: "building-hospital",
      text: "Cirurgias realizadas exclusivamente nos melhores hospitais de alto padrão de São Paulo."
    }
  },
  {
    step: 4,
    field: "urgencia",
    title: "Em que momento você está?",
    subtitle: "Assim conseguimos priorizar as opções de datas e agendas.",
    options: [
      { label: "Já decidi fazer", value: "Já decidi fazer" },
      { label: "Estou pesquisando", value: "Estou pesquisando" },
      { label: "Tenho uma data especial", value: "Tenho uma data especial" }
    ],
    trustBanner: {
      icon: "heart-handshake",
      text: "Acompanhamento pós-operatório dedicado e contínuo com equipe própria especializada."
    }
  },
  {
    step: 5,
    field: "como_conheceu",
    title: "Como conheceu o Dr. José Salim Cury?",
    subtitle: "Saber disso nos ajuda a aprimorar nosso atendimento.",
    options: [
      { label: "Indicação médica", value: "Indicação médica" },
      { label: "Indicação de amigo", value: "Indicação de amigo" },
      { label: "Redes sociais", value: "Redes sociais" },
      { label: "Pesquisa no Google", value: "Pesquisa no Google" },
      { label: "Evento", value: "Evento" },
      { label: "Outro", value: "Outro" }
    ],
    trustBanner: {
      icon: "star",
      text: "Avaliação 5.0 estrelas no Google com mais de 110 depoimentos de pacientes atendidos."
    }
  }
];
