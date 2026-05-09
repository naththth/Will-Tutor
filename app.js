const STORAGE = {
  config: "willTutor.config.v1",
  progress: "willTutor.progress.v1",
  insights: "willTutor.insights.v1",
  situations: "willTutor.situations.v1"
};

const quickSituations = [
  {
    icon: "🔥",
    label: "Incidente urgente",
    area: "Cloud e observabilidade",
    urgency: "Crítica",
    title: "Resposta a incidente técnico em produção",
    context: "Temos um incidente em produção afetando usuários. Precisamos de orientação sobre como estruturar a resposta: contenção imediata, comunicação com stakeholders, diagnóstico e mitigação definitiva.",
    question: "Como organizar o raciocínio e a comunicação durante esse incidente sem perder o controle da situação e garantir um post-mortem útil?"
  },
  {
    icon: "🏗️",
    label: "Decisão de arquitetura",
    area: "Arquitetura",
    urgency: "Alta",
    title: "Decisão de arquitetura que precisa de orientação técnica",
    context: "Estamos diante de uma decisão técnica importante de arquitetura. Há alternativas em jogo e precisamos avaliar trade-offs de forma estruturada antes de decidir e comunicar ao time.",
    question: "Como estruturar essa decisão, documentar o racional e apresentar as alternativas para o time e para produto de forma clara?"
  },
  {
    icon: "👥",
    label: "Orientar o time",
    area: "Pessoas e comunicação",
    urgency: "Média",
    title: "Como orientar o time em uma situação técnica",
    context: "Um desenvolvedor do time trouxe uma questão técnica ou de processo. Quero ajudar a pensar junto sem simplesmente resolver por eles, criando autonomia e aprendizado.",
    question: "Quais perguntas e abordagens usar para ajudar o dev a raciocinar e crescer tecnicamente sem criar dependência do Will?"
  },
  {
    icon: "📋",
    label: "Code review difícil",
    area: "Processo e entrega",
    urgency: "Média",
    title: "Como dar feedback em um code review complexo",
    context: "Estou revisando um PR com problemas de design, qualidade ou decisão técnica. Preciso de ajuda para estruturar o feedback de forma que gere aprendizado e não apenas corrija.",
    question: "Como dar um feedback técnico claro, construtivo e que gere aprendizado sem criar atrito desnecessário no time?"
  },
  {
    icon: "🎯",
    label: "Priorização técnica",
    area: "Processo e entrega",
    urgency: "Alta",
    title: "Como priorizar demandas técnicas concorrentes",
    context: "Temos múltiplas demandas técnicas em paralelo: débitos técnicos, novas funcionalidades, estabilização e evolução do sistema. Precisamos de critérios claros para priorizar.",
    question: "Como criar critérios de priorização técnica e comunicar as escolhas para o time e para produto de forma transparente e justificada?"
  }
];

const tracks = [
  { id: "all", label: "Todas", short: "Tudo" },
  { id: "lead", label: "Liderança técnica", short: "Lead" },
  { id: "backend", label: "Node, TS e NestJS", short: "Backend" },
  { id: "architecture", label: "Arquitetura e strangler", short: "Arquitetura" },
  { id: "frontend", label: "React e produto", short: "Front" },
  { id: "database", label: "PostgreSQL", short: "Dados" },
  { id: "cloud", label: "GCP e observabilidade", short: "Cloud" },
  { id: "quality", label: "Qualidade e entrega", short: "Qualidade" },
  { id: "people", label: "Comunicação e mentoria", short: "Pessoas" }
];

const plan = [
  {
    week: 1,
    title: "Diagnóstico do novo papel",
    focus: "Entender o que muda quando o Will vira referência técnica, sem transformar o cargo em gestão de pessoas.",
    modules: [
      {
        id: "w1-lead-role",
        track: "lead",
        title: "Mapa de responsabilidade do Lead Engineer",
        why: "A transição de sênior para lead é uma das mais mal calibradas da carreira técnica. A maioria assume o papel sem saber o que mudou de fato — e oscila entre fazer tudo pelos outros ou se afastar demais da técnica. Clareza de papéis é o que separa um lead eficaz de um gargalo glorificado.",
        outcome: "Separar o que é decisão técnica, influência, mentoria, alinhamento e execução hands-on.",
        practice: "Escrever um mapa com decisões que só o Will deve tomar, decisões que o time pode tomar e decisões que precisam de alinhamento com produto.",
        resources: [
          ["StaffEng — Staff archetypes: como leads operam na prática", "https://staffeng.com/guides/staff-archetypes/"],
          ["LeadDev — biblioteca de liderança técnica com artigos curados", "https://leaddev.com/technical-leadership"],
          ["Lara Hogan — What does a tech lead do? (blog técnico de referência)", "https://larahogan.me/blog/what-does-a-tech-lead-do/"],
          ["▶ YouTube: Tech lead responsibilities in software engineering", "https://www.youtube.com/results?search_query=tech+lead+responsibilities+software+engineering+staff+engineer"]
        ]
      },
      {
        id: "w1-system-map",
        track: "architecture",
        title: "Mapa do sistema que será estrangulado",
        why: "Não dá para liderar a evolução de um sistema que não está mapeado. Sem fronteiras claras, qualquer decisão arquitetural vira aposta. O mapa de sistema é o primeiro artefato de uma liderança técnica responsável — e o pré-requisito para qualquer conversa sobre strangler fig.",
        outcome: "Desenhar fronteiras, fluxos críticos, integrações e pontos de risco antes de propor evolução.",
        practice: "Criar um desenho simples com sistema atual, novo sistema, módulos, dependências, donos e fluxos mais sensíveis.",
        resources: [
          ["C4 Model — visualização de arquitetura em 4 níveis de abstração", "https://c4model.com/"],
          ["Martin Fowler — Strangler Fig Application (artigo original)", "https://martinfowler.com/bliki/StranglerFigApplication.html"],
          ["AWS Prescriptive Guidance — Strangler Fig pattern com exemplos", "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html"],
          ["▶ YouTube: C4 Model software architecture diagrams explained", "https://www.youtube.com/results?search_query=C4+model+software+architecture+diagrams+explained"]
        ]
      },
      {
        id: "w1-questions",
        track: "people",
        title: "Perguntas melhores antes de orientar o time",
        why: "O reflexo de responder tudo imediatamente é o sinal mais claro de que alguém ainda não internalizou o papel de lead. Perguntas certas desenvolvem raciocínio e autonomia. Respostas automáticas criam dependência e posicionam o lead como suporte técnico — não como referência.",
        outcome: "Criar repertório para não responder tudo no impulso e ajudar devs a raciocinar melhor.",
        practice: "Montar uma lista de 10 perguntas para usar quando alguém trouxer uma urgência técnica.",
        resources: [
          ["Google re:Work — Pesquisa sobre efetividade de times (Project Aristotle)", "https://rework.withgoogle.com/guides/understanding-team-effectiveness/"],
          ["Atlassian Team Playbook — práticas estruturadas de time", "https://www.atlassian.com/team-playbook"],
          ["Lara Hogan — First one-on-ones questions (referência de perguntas)", "https://larahogan.me/blog/first-one-on-ones/"],
          ["▶ YouTube: Coaching questions for tech leads and engineering managers", "https://www.youtube.com/results?search_query=coaching+questions+engineering+manager+tech+lead+mentoring"]
        ]
      },
      {
        id: "w1-adr",
        track: "architecture",
        title: "ADR para decisões técnicas",
        why: "Decisões técnicas sem registro viram lenda urbana. Com o tempo ninguém sabe por que algo foi feito assim, e o custo de desfazer cresce. ADRs são a memória institucional da arquitetura — e o que permite ao Will mostrar raciocínio, não apenas resultado.",
        outcome: "Registrar decisões com contexto, alternativas, consequências e critérios de revisão.",
        practice: "Criar o primeiro ADR do projeto, mesmo que seja rascunho, sobre uma decisão real da evolução do sistema.",
        resources: [
          ["MADR — template minimalista de Architecture Decision Record (recomendado)", "https://adr.github.io/madr/"],
          ["Thoughtworks Technology Radar — ADRs como técnica consolidada", "https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records"],
          ["GitHub — joel parker henderson/architecture-decision-record com exemplos reais", "https://github.com/joelparkerhenderson/architecture-decision-record"],
          ["▶ YouTube: Architecture Decision Records ADR explained with examples", "https://www.youtube.com/results?search_query=architecture+decision+records+ADR+explained+examples+software"]
        ]
      }
    ]
  },
  {
    week: 2,
    title: "TypeScript e Node com profundidade",
    focus: "Consolidar fundamentos avançados para orientar decisões de implementação, revisão e desenho de APIs.",
    modules: [
      {
        id: "w2-ts-types",
        track: "backend",
        title: "TypeScript além do básico",
        why: "TypeScript mal usado cria falsa sensação de segurança. Tipos genéricos, union types e narrowing não são recursos avançados opcionais — são as ferramentas que tornam contratos de código confiáveis, refatorações seguras e revisões de PR com critério real.",
        outcome: "Usar tipos para reduzir ambiguidade em contratos, casos de uso e integrações.",
        practice: "Revisar um trecho de código e listar onde generics, union types ou narrowing poderiam evitar bugs.",
        resources: [
          ["TypeScript Handbook — documentação oficial completa e atualizada", "https://www.typescriptlang.org/docs/handbook/intro.html"],
          ["Type Challenges — exercícios práticos de tipagem por nível de dificuldade", "https://github.com/type-challenges/type-challenges"],
          ["Total TypeScript (Matt Pocock) — tutoriais aprofundados e gratuitos", "https://www.totaltypescript.com/tutorials"],
          ["▶ YouTube: TypeScript advanced types generics utility types deep dive", "https://www.youtube.com/results?search_query=typescript+advanced+types+generics+utility+types+deep+dive"]
        ]
      },
      {
        id: "w2-node-runtime",
        track: "backend",
        title: "Node.js, event loop e performance",
        why: "Sem entender o event loop, é impossível diagnosticar gargalos de I/O, problemas de latência ou bloquear a thread principal sem querer. É o fundamento que separa quem usa Node de quem entende Node — e que permite ao lead orientar o time com precisão em momentos de degradação.",
        outcome: "Explicar gargalos de I/O, concorrência e processamento assíncrono com clareza para o time.",
        practice: "Preparar uma explicação curta sobre event loop usando um problema real do sistema.",
        resources: [
          ["Node.js — guia oficial sobre event loop, timers e nextTick", "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"],
          ["Node.js — documentação oficial completa de APIs", "https://nodejs.org/docs/latest/api/"],
          ["Node.js Best Practices — repositório com padrões consolidados de produção", "https://github.com/goldbergyoni/nodebestpractices"],
          ["▶ YouTube: Node.js event loop explained in depth with visualization", "https://www.youtube.com/results?search_query=nodejs+event+loop+explained+in+depth+visualization+libuv"]
        ]
      },
      {
        id: "w2-error-handling",
        track: "backend",
        title: "Erros, exceções e contratos de falha",
        why: "A forma como um sistema falha é tão importante quanto a forma como funciona. Sistemas sem contratos de falha claros acumulam erros silenciosos, logs inúteis e incidentes sem diagnóstico. Em produção, o que não está tratado explicitamente vira surpresa para o usuário.",
        outcome: "Definir como o sistema falha, loga, responde e se recupera sem virar caos operacional.",
        practice: "Escolher um fluxo crítico e mapear erros esperados, erros inesperados, retry, fallback e mensagem para cliente interno.",
        resources: [
          ["NestJS — Exception Filters: tratamento centralizado de erros", "https://docs.nestjs.com/exception-filters"],
          ["Google Cloud — Retry strategy e error handling em sistemas distribuídos", "https://cloud.google.com/storage/docs/retry-strategy"],
          ["Node.js Best Practices — seção de error handling com padrões consolidados", "https://github.com/goldbergyoni/nodebestpractices#2-error-handling-practices"],
          ["▶ YouTube: Error handling patterns Node.js TypeScript production", "https://www.youtube.com/results?search_query=error+handling+patterns+nodejs+typescript+production+best+practices"]
        ]
      },
      {
        id: "w2-code-reading",
        track: "quality",
        title: "Leitura crítica de código legado",
        why: "Todo sistema evoluído tem código legado. A habilidade de ler, classificar e priorizar débito técnico sem entrar em pânico ou refatorar tudo é uma das competências mais escassas em times de produto — e uma das mais valiosas para um lead que precisa tomar decisões de custo e risco.",
        outcome: "Identificar cheiro de código, risco e dívida técnica sem transformar tudo em refatoração infinita.",
        practice: "Escolher um módulo antigo e criar uma análise com risco, impacto, custo de mexer e proposta de isolamento.",
        resources: [
          ["Refactoring Guru — catálogo de code smells com exemplos e soluções", "https://refactoring.guru/refactoring/smells"],
          ["Martin Fowler — Technical Debt Quadrant: como classificar dívida técnica", "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"],
          ["Martin Fowler — Refactoring: catálogo de padrões de melhoria de código", "https://refactoring.com/catalog/"],
          ["▶ YouTube: How to deal with legacy code refactoring strategy", "https://www.youtube.com/results?search_query=how+to+deal+with+legacy+code+refactoring+strategy+software+engineering"]
        ]
      }
    ]
  },
  {
    week: 3,
    title: "NestJS, modularidade e limites",
    focus: "Aprofundar arquitetura de aplicação para criar funcionalidades novas com baixo acoplamento.",
    modules: [
      {
        id: "w3-nest-modules",
        track: "backend",
        title: "Módulos em NestJS com fronteiras claras",
        why: "NestJS encoraja modularidade, mas sem critério, módulos viram coletores de tudo que parece relacionado. Fronteiras mal definidas geram dependências circulares, dificuldade de teste e código impossível de extrair — o oposto do que o strangler fig precisa.",
        outcome: "Evitar módulos genéricos demais e dependências circulares que tornam o sistema difícil de evoluir.",
        practice: "Desenhar módulos por capacidade de negócio e apontar quais dependências devem ser invertidas.",
        resources: [
          ["NestJS — Modules: documentação oficial sobre modularidade", "https://docs.nestjs.com/modules"],
          ["NestJS — Providers e Dependency Injection em profundidade", "https://docs.nestjs.com/providers"],
          ["NestJS — Injection scopes e ciclo de vida dos providers", "https://docs.nestjs.com/fundamentals/injection-scopes"],
          ["▶ YouTube: NestJS modules architecture best practices domain-driven", "https://www.youtube.com/results?search_query=nestjs+modules+architecture+best+practices+domain+driven+design"]
        ]
      },
      {
        id: "w3-clean-architecture",
        track: "architecture",
        title: "Arquitetura limpa sem dogmatismo",
        why: "Clean Architecture não é dogma — é um vocabulário para conversar sobre fronteiras e dependências. Saber quando aplicar e quando simplificar é o que diferencia um arquiteto pragmático de um que cria complexidade desnecessária sob o pretexto de boas práticas.",
        outcome: "Separar domínio, aplicação, infraestrutura e interfaces quando isso gerar clareza real.",
        practice: "Reescrever mentalmente um caso de uso com entrada, regra, saída, gateway e efeito colateral.",
        resources: [
          ["The Clean Architecture — artigo original de Robert C. Martin (Uncle Bob)", "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"],
          ["NestJS — Custom providers para inversão de dependência", "https://docs.nestjs.com/fundamentals/custom-providers"],
          ["Khalil Stemmler — Clean Node.js architecture com TypeScript e exemplos práticos", "https://khalilstemmler.com/articles/enterprise-typescript-nodejs/clean-nodejs-architecture/"],
          ["▶ YouTube: Clean architecture Node.js TypeScript explained practical", "https://www.youtube.com/results?search_query=clean+architecture+nodejs+typescript+explained+practical+example"]
        ]
      },
      {
        id: "w3-contracts",
        track: "backend",
        title: "Contratos internos e externos",
        why: "Contratos imprecisos entre módulos e APIs são a principal causa de retrabalho em sistemas em crescimento. Quando o consumidor precisa adivinhar o que a API retorna, o custo de manutenção cresce exponencialmente — e cada mudança interna vira breaking change em potencial.",
        outcome: "Criar contratos claros entre módulos, APIs e integrações para reduzir retrabalho.",
        practice: "Definir DTOs, validações e respostas de erro de um endpoint real antes de codar.",
        resources: [
          ["NestJS — Validation com class-validator e DTOs", "https://docs.nestjs.com/techniques/validation"],
          ["NestJS — Serialization e transformação de resposta com class-transformer", "https://docs.nestjs.com/techniques/serialization"],
          ["OpenAPI Specification — padrão de documentação de APIs REST", "https://spec.openapis.org/oas/latest.html"],
          ["▶ YouTube: API contract DTO validation NestJS TypeScript design", "https://www.youtube.com/results?search_query=api+contract+dto+validation+nestjs+typescript+design+patterns"]
        ]
      },
      {
        id: "w3-testing-nest",
        track: "quality",
        title: "Testes em NestJS que protegem decisões",
        why: "Testes que testam implementação e não comportamento viram obstáculo na hora de refatorar. A estratégia certa em NestJS protege decisões de negócio sem engessar o código — e é o que permite ao time refatorar com confiança durante a migração strangler fig.",
        outcome: "Diferenciar teste de unidade, integração e contrato sem testar detalhes irrelevantes.",
        practice: "Selecionar um caso de uso e escrever quais testes dariam confiança para evoluir sem quebrar.",
        resources: [
          ["NestJS — Testing: documentação oficial com exemplos de unit e e2e", "https://docs.nestjs.com/fundamentals/testing"],
          ["Testing Library — Guiding principles: teste comportamento, não implementação", "https://testing-library.com/docs/guiding-principles"],
          ["Martin Fowler — Test Pyramid: estratégia de testes por custo e confiança", "https://martinfowler.com/articles/practical-test-pyramid.html"],
          ["▶ YouTube: NestJS testing unit integration e2e complete guide", "https://www.youtube.com/results?search_query=nestjs+testing+unit+integration+e2e+complete+guide+jest"]
        ]
      }
    ]
  },
  {
    week: 4,
    title: "Strangler Fig na prática",
    focus: "Estrangular a versão anterior sem cair em Big Bang, com métricas, reversibilidade e risco controlado.",
    modules: [
      {
        id: "w4-strangler-plan",
        track: "architecture",
        title: "Plano de estrangulamento por fatias",
        why: "O padrão strangler fig parece simples até o momento em que o time precisa decidir onde começa e onde termina cada fatia. Sem um plano estruturado por valor de negócio, a migração vira um eterno work-in-progress sem entrega visível — e a liderança perde paciência antes do sistema ficar pronto.",
        outcome: "Dividir a migração por fluxos de negócio, não por camadas técnicas isoladas.",
        practice: "Criar uma matriz de fatias com valor, risco, dependências, reversibilidade e dono técnico.",
        resources: [
          ["Martin Fowler — Strangler Fig Application: artigo original com padrão completo", "https://martinfowler.com/bliki/StranglerFigApplication.html"],
          ["AWS Prescriptive Guidance — Strangler Fig pattern com estratégias de migração", "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html"],
          ["Sam Newman — Monolith to Microservices: livro de referência para migrações", "https://samnewman.io/books/monolith-to-microservices/"],
          ["▶ YouTube: Strangler fig pattern migration monolith microservices explained", "https://www.youtube.com/results?search_query=strangler+fig+pattern+migration+monolith+microservices+explained+step+by+step"]
        ]
      },
      {
        id: "w4-routing",
        track: "architecture",
        title: "Roteamento, feature flags e coexistência",
        why: "Feature flags são o mecanismo que transforma deploys arriscados em decisões reversíveis. Sem eles, qualquer mudança de roteamento entre versões vira aposta de tudo-ou-nada. Com eles, o Will pode migrar gradualmente com fallback real e dados de uso para embasar cada próximo passo.",
        outcome: "Planejar como tráfego, usuários ou fluxos migram gradualmente para o novo sistema.",
        practice: "Definir uma estratégia de feature flag ou roteamento para uma funcionalidade nova.",
        resources: [
          ["Martin Fowler — Feature Toggles: tipos, padrões e quando usar cada um", "https://martinfowler.com/articles/feature-toggles.html"],
          ["LaunchDarkly — What are feature flags: guia introdutório e conceitual", "https://launchdarkly.com/blog/what-are-feature-flags/"],
          ["Google Cloud Architecture Framework — decisões de infraestrutura e tráfego", "https://cloud.google.com/architecture/framework"],
          ["▶ YouTube: Feature flags best practices software engineering deployment", "https://www.youtube.com/results?search_query=feature+flags+best+practices+software+engineering+safe+deployment"]
        ]
      },
      {
        id: "w4-risk-register",
        track: "lead",
        title: "Registro de riscos técnicos",
        why: "Risco não gerenciado é dívida oculta. Sem registro formal, cada risco existe apenas na cabeça de alguém — e quando essa pessoa sai de férias ou da empresa, o risco vira surpresa em produção. Visibilidade de risco é liderança técnica em ação.",
        outcome: "Tirar riscos da conversa solta e transformar em acompanhamento visível.",
        practice: "Criar uma tabela com risco, impacto, probabilidade, mitigação, dono e data de revisão.",
        resources: [
          ["Atlassian — Risk assessment matrix: como avaliar e priorizar riscos", "https://www.atlassian.com/work-management/project-management/risk-assessment"],
          ["Google SRE Book — Embracing risk: como o Google pensa sobre risco de sistema", "https://sre.google/sre-book/embracing-risk/"],
          ["PMI — Risk management guide: framework estruturado de gestão de riscos", "https://www.pmi.org/learning/library/risk-analysis-project-management-7070"],
          ["▶ YouTube: Technical risk management software projects register", "https://www.youtube.com/results?search_query=technical+risk+management+software+projects+risk+register+engineering"]
        ]
      },
      {
        id: "w4-explain-plan",
        track: "people",
        title: "Como explicar a estratégia ao time",
        why: "A melhor decisão técnica que não consegue ser explicada para o time e para produto equivale a uma decisão ruim. Narrativa técnica não é dom — é habilidade que se desenvolve. O Will precisa transformar complexidade arquitetural em clareza comunicável.",
        outcome: "Transformar uma decisão arquitetural em uma narrativa compreensível para devs, produto e liderança.",
        practice: "Gravar ou escrever uma explicação de 3 minutos sobre por que não será uma refatoração tradicional.",
        resources: [
          ["Google Technical Writing Courses — cursos gratuitos de escrita técnica clara", "https://developers.google.com/tech-writing"],
          ["Atlassian — DACI: framework para decisões com papéis claros e rastreabilidade", "https://www.atlassian.com/team-playbook/plays/daci"],
          ["Lara Hogan — Communicating about technical debt com stakeholders", "https://larahogan.me/blog/communicating-about-technical-debt/"],
          ["▶ YouTube: How to explain technical decisions non-technical stakeholders", "https://www.youtube.com/results?search_query=how+to+explain+technical+decisions+non+technical+stakeholders+product"]
        ]
      }
    ]
  },
  {
    week: 5,
    title: "APIs, integração e evolução segura",
    focus: "Construir novas funcionalidades com contratos estáveis e integração previsível entre sistemas.",
    modules: [
      {
        id: "w5-api-design",
        track: "backend",
        title: "Design de API orientado a produto",
        why: "APIs mal projetadas geram acoplamento, versioning caótico e consumidores que precisam adivinhar comportamento. Uma API bem desenhada é um produto — ela tem contrato, evolui sem quebrar e comunica intenção antes mesmo de ter documentação formal.",
        outcome: "Criar endpoints pensando em consumidor, contrato, versionamento e evolução.",
        practice: "Escolher uma API e escrever contrato, casos de erro, exemplos de payload e critérios de aceite.",
        resources: [
          ["Google Cloud API Design Guide — guia completo de design RESTful com padrões do Google", "https://cloud.google.com/apis/design"],
          ["Microsoft REST API Guidelines — convenções de API em sistemas de escala real", "https://github.com/microsoft/api-guidelines"],
          ["OpenAPI Specification — padrão de contrato e documentação de APIs", "https://spec.openapis.org/oas/latest.html"],
          ["▶ YouTube: REST API design best practices versioning contract 2024", "https://www.youtube.com/results?search_query=REST+API+design+best+practices+versioning+contract+backend+2024"]
        ]
      },
      {
        id: "w5-idempotency",
        track: "architecture",
        title: "Idempotência e consistência em fluxos críticos",
        why: "Sem idempotência, operações duplicadas por retry, falha de rede ou bug de cliente geram efeitos colaterais invisíveis. Em sistemas financeiros ou críticos isso vira incidente com impacto real. É o tipo de problema que não aparece no dev e explode em produção.",
        outcome: "Reduzir efeitos duplicados e falhas em integrações importantes.",
        practice: "Mapear onde idempotency key, lock, fila ou retry controlado fariam sentido.",
        resources: [
          ["Stripe — Idempotent requests: implementação real de idempotência em API de pagamentos", "https://docs.stripe.com/api/idempotent_requests"],
          ["Google Cloud — Retry strategy: padrões de retry com backoff exponencial", "https://cloud.google.com/storage/docs/retry-strategy"],
          ["AWS — Implementing idempotent APIs: guia detalhado com exemplos", "https://docs.aws.amazon.com/whitepapers/latest/transactions-on-dynamodb/implementing-idempotent-apis.html"],
          ["▶ YouTube: Idempotency distributed systems API design explained", "https://www.youtube.com/results?search_query=idempotency+distributed+systems+api+design+explained+production"]
        ]
      },
      {
        id: "w5-events",
        track: "architecture",
        title: "Eventos, comandos e acoplamento",
        why: "Acoplamento síncrono é a forma mais cara de integração em sistemas em crescimento. Saber distinguir o que precisa ser síncrono, assíncrono ou eventualmente consistente é uma das decisões mais impactantes na evolução do sistema — e uma das mais difíceis de reverter depois.",
        outcome: "Decidir quando um fluxo precisa ser síncrono, assíncrono ou eventualmente consistente.",
        practice: "Pegar um fluxo do sistema e classificar pontos que podem virar eventos sem perder rastreabilidade.",
        resources: [
          ["Martin Fowler — Event-Driven Architecture: padrões, trade-offs e quando usar", "https://martinfowler.com/articles/201701-event-driven.html"],
          ["Google Cloud Pub/Sub — documentação completa de mensageria assíncrona no GCP", "https://cloud.google.com/pubsub/docs/overview"],
          ["Confluent — Event-Driven Architecture guide: conceitos e padrões avançados", "https://www.confluent.io/learn/event-driven-architecture/"],
          ["▶ YouTube: Event driven architecture explained microservices async messaging", "https://www.youtube.com/results?search_query=event+driven+architecture+explained+microservices+async+messaging+patterns"]
        ]
      },
      {
        id: "w5-contract-tests",
        track: "quality",
        title: "Testes de contrato",
        why: "Testes de unidade não detectam quebras de contrato entre serviços. Consumer-driven contract testing garante que mudanças em um serviço não quebrem silenciosamente os consumidores — exatamente o tipo de falha invisível que aparece em sistemas distribuídos em evolução.",
        outcome: "Evitar que mudanças entre serviços quebrem consumidores silenciosamente.",
        practice: "Definir um contrato que deveria ser testado entre dois módulos ou sistemas.",
        resources: [
          ["Pact — documentação completa de consumer-driven contract testing", "https://docs.pact.io/"],
          ["Martin Fowler — Consumer-Driven Contracts: artigo original sobre o padrão", "https://martinfowler.com/articles/consumerDrivenContracts.html"],
          ["OpenAPI Specification — base para contratos de API documentados e testáveis", "https://spec.openapis.org/oas/latest.html"],
          ["▶ YouTube: Contract testing Pact microservices consumer driven explained", "https://www.youtube.com/results?search_query=contract+testing+pact+microservices+consumer+driven+contracts+explained"]
        ]
      }
    ]
  },
  {
    week: 6,
    title: "PostgreSQL, modelagem e performance",
    focus: "Ajudar o time a tomar decisões melhores sobre dados, queries, índices e evolução de schema.",
    modules: [
      {
        id: "w6-modeling",
        track: "database",
        title: "Modelagem orientada a domínio",
        why: "Modelos de banco mal pensados vazam regras de negócio para a aplicação, dificultam evolução e criam inconsistências difíceis de rastrear. Modelagem orientada a domínio alinha a estrutura de dados com o vocabulário real do negócio — e é o que torna o banco um aliado, não um obstáculo.",
        outcome: "Criar tabelas e relações que expressem regras do negócio sem acoplar demais a aplicação.",
        practice: "Revisar um modelo e identificar entidades, agregados, campos derivados e constraints necessárias.",
        resources: [
          ["PostgreSQL — documentação oficial completa: referência técnica de primeira linha", "https://www.postgresql.org/docs/"],
          ["PostgreSQL — Constraints: NOT NULL, UNIQUE, CHECK, FOREIGN KEY com exemplos", "https://www.postgresql.org/docs/current/ddl-constraints.html"],
          ["Use The Index, Luke — guia gratuito e profundo sobre SQL indexing e modelagem", "https://use-the-index-luke.com/"],
          ["▶ YouTube: PostgreSQL database modeling domain driven normalization", "https://www.youtube.com/results?search_query=postgresql+database+modeling+domain+driven+normalization+design"]
        ]
      },
      {
        id: "w6-indexes",
        track: "database",
        title: "Índices e leitura de plano de execução",
        why: "Índice errado no lugar certo pode degradar writes; sem índice no lugar certo, uma query pode escanear milhões de linhas. Ler um plano de execução é a diferença entre diagnosticar com precisão e adivinhar — e é a habilidade que separa quem resolve lentidão de banco de quem fica no feeling.",
        outcome: "Entender quando índice ajuda, quando atrapalha e como explicar isso para o time.",
        practice: "Rodar EXPLAIN ANALYZE em uma query relevante e escrever o que faria para melhorar.",
        resources: [
          ["PostgreSQL — EXPLAIN e EXPLAIN ANALYZE: documentação completa com exemplos", "https://www.postgresql.org/docs/current/using-explain.html"],
          ["PostgreSQL — Indexes: tipos de índice, quando usar B-tree, GIN, BRIN", "https://www.postgresql.org/docs/current/indexes.html"],
          ["Use The Index, Luke — SQL indexing guide: recurso gratuito de referência", "https://use-the-index-luke.com/sql/explain-plan"],
          ["▶ YouTube: PostgreSQL query optimization indexes EXPLAIN ANALYZE tutorial", "https://www.youtube.com/results?search_query=postgresql+query+optimization+indexes+explain+analyze+performance+tuning"]
        ]
      },
      {
        id: "w6-migrations",
        track: "database",
        title: "Migrations seguras",
        why: "Migrations mal executadas podem travar tabelas de produção por minutos em sistemas de alta carga. O padrão expand and contract permite evoluir o schema sem downtime, sem risco de rollback forçado e sem quebrar compatibilidade com o código em produção durante a transição.",
        outcome: "Evoluir schema sem bloquear release, derrubar performance ou quebrar compatibilidade.",
        practice: "Escrever um plano expand and contract para uma mudança de schema real.",
        resources: [
          ["Prisma — Expand and contract pattern: guia completo sobre migrações sem downtime", "https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern"],
          ["PostgreSQL — ALTER TABLE: documentação de alterações de schema com locking", "https://www.postgresql.org/docs/current/sql-altertable.html"],
          ["strong migrations (gem/lib) — referência de migrações seguras por tipo de operação", "https://github.com/ankane/strong_migrations"],
          ["▶ YouTube: Zero downtime database migrations PostgreSQL expand contract", "https://www.youtube.com/results?search_query=zero+downtime+database+migrations+postgresql+expand+contract+schema+change"]
        ]
      },
      {
        id: "w6-data-quality",
        track: "quality",
        title: "Qualidade de dados como requisito técnico",
        why: "Dados inválidos, duplicados ou incompletos que chegam ao banco nunca somem sozinhos — eles crescem, corrompem relatórios e criam bugs intermitentes impossíveis de reproduzir. Qualidade de dados é requisito técnico, não responsabilidade só do negócio nem correção posterior.",
        outcome: "Tratar dados inválidos, duplicados ou incompletos como risco do produto.",
        practice: "Listar validações que devem estar na API, no banco e no processo operacional.",
        resources: [
          ["PostgreSQL — CHECK constraints: validações no nível do banco com exemplos", "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS"],
          ["Google Cloud — Data quality overview: dimensões, métricas e práticas", "https://cloud.google.com/dataplex/docs/data-quality-overview"],
          ["dbt — Data tests: validações automatizadas de qualidade sobre dados em produção", "https://docs.getdbt.com/docs/build/data-tests"],
          ["▶ YouTube: Data quality engineering practices validation constraints production", "https://www.youtube.com/results?search_query=data+quality+engineering+practices+validation+constraints+database+production"]
        ]
      }
    ]
  },
  {
    week: 7,
    title: "React e visão de produto",
    focus: "Conectar decisões de front-end, usabilidade, estado e API com valor real para o usuário.",
    modules: [
      {
        id: "w7-react-modern",
        track: "frontend",
        title: "React moderno e mental model",
        why: "React evoluiu radicalmente com hooks, Suspense e server components. Leads que não acompanham o mental model atual orientam o time para padrões obsoletos e arquiteturas de estado desnecessariamente complexas — gerando retrabalho e dificuldade de manutenção progressiva.",
        outcome: "Orientar decisões de componentes, estado e renderização sem cair em solução automática.",
        practice: "Escolher uma tela e separar estado local, estado remoto, derivado e cacheável.",
        resources: [
          ["React Docs — Thinking in React: mental model oficial para projetar componentes", "https://react.dev/learn/thinking-in-react"],
          ["React Docs — Managing state: quando e como estruturar estado de forma escalável", "https://react.dev/learn/managing-state"],
          ["TanStack Query — gerenciamento de estado remoto e cache em React", "https://tanstack.com/query/latest/docs/framework/react/overview"],
          ["▶ YouTube: React modern patterns hooks state management 2024 deep dive", "https://www.youtube.com/results?search_query=react+modern+patterns+hooks+state+management+2024+deep+dive"]
        ]
      },
      {
        id: "w7-api-frontend",
        track: "frontend",
        title: "Contrato entre front e backend",
        why: "A experiência de loading, erro e estado vazio de uma tela é tão produto quanto o happy path. Quando o front depende de APIs mal desenhadas, os workarounds se acumulam na interface — e o usuário sente nos momentos de maior carga ou falha do sistema.",
        outcome: "Evitar que a experiência do usuário fique refém de APIs mal desenhadas.",
        practice: "Descrever estados de loading, empty, error, partial success e retry para uma jornada crítica.",
        resources: [
          ["web.dev — Resilient web design: padrões de UX resiliente a falhas", "https://web.dev/learn/design/"],
          ["React Docs — Escape hatches: como lidar com efeitos colaterais e integrações", "https://react.dev/learn/escape-hatches"],
          ["Zod — schema validation TypeScript para contratos seguros entre front e back", "https://zod.dev/"],
          ["▶ YouTube: Frontend backend contract API design React TypeScript error states", "https://www.youtube.com/results?search_query=frontend+backend+contract+API+design+react+typescript+error+states+ux"]
        ]
      },
      {
        id: "w7-accessibility",
        track: "frontend",
        title: "Acessibilidade como qualidade de engenharia",
        why: "Acessibilidade como acabamento é cara e fraca. Quando entra nos critérios técnicos de review desde o início, o custo é marginal e o impacto é real — para usuários com deficiência, para SEO e para a qualidade de interação de todos os usuários com o sistema.",
        outcome: "Incluir acessibilidade em review e critérios técnicos, não como acabamento final.",
        practice: "Revisar uma tela com teclado, contraste, labels e estados de erro.",
        resources: [
          ["WCAG Quick Reference — guia prático dos critérios de acessibilidade web (W3C)", "https://www.w3.org/WAI/WCAG22/quickref/"],
          ["MDN — Accessibility: referência técnica completa com exemplos práticos", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility"],
          ["web.dev — Learn Accessibility: curso gratuito e prático do Google", "https://web.dev/learn/accessibility/"],
          ["▶ YouTube: Web accessibility for developers WCAG practical guide 2024", "https://www.youtube.com/results?search_query=web+accessibility+for+developers+WCAG+practical+guide+screen+reader+keyboard"]
        ]
      },
      {
        id: "w7-product-thinking",
        track: "lead",
        title: "Decisão técnica com impacto de produto",
        why: "Decisões técnicas que ignoram impacto de produto viram atritos desnecessários. O lead que conecta trade-offs técnicos com prazo, valor e aprendizado consegue influenciar roadmap e priorização — e ganha autonomia técnica proporcional à confiança que constrói com produto.",
        outcome: "Conectar trade-offs técnicos com prazo, risco, aprendizado e valor para usuário.",
        practice: "Para uma decisão real, escrever impacto técnico, impacto no usuário e impacto no time.",
        resources: [
          ["Mind the Product — biblioteca de product thinking com artigos de referência", "https://www.mindtheproduct.com/"],
          ["Atlassian — Project poster: template para alinhar intenção técnica com produto", "https://www.atlassian.com/team-playbook/plays/project-poster"],
          ["Google re:Work — OKRs guide: como definir objetivos com impacto mensurável", "https://rework.withgoogle.com/guides/set-goals-with-okrs/"],
          ["▶ YouTube: Product thinking for engineers technical product decisions impact", "https://www.youtube.com/results?search_query=product+thinking+for+engineers+technical+product+decisions+tradeoffs"]
        ]
      }
    ]
  },
  {
    week: 8,
    title: "GCP, observabilidade e operação",
    focus: "Pensar em produção desde o desenho, com métricas, logs, rastreabilidade e custo.",
    modules: [
      {
        id: "w8-gcp-architecture",
        track: "cloud",
        title: "Google Cloud Architecture Framework",
        why: "Escolher serviços de nuvem sem framework de avaliação leva a soluções que funcionam no piloto e custam caro ou falham em produção. O Google Cloud Architecture Framework é a estrutura mais completa para avaliar decisões cloud com critério — cobrindo confiabilidade, segurança, custo e operação juntos.",
        outcome: "Avaliar confiabilidade, segurança, custo, performance e operação na arquitetura.",
        practice: "Escolher uma funcionalidade nova e avaliar com os pilares do framework.",
        resources: [
          ["Google Cloud Architecture Framework — guia completo dos cinco pilares", "https://cloud.google.com/architecture/framework"],
          ["Google Cloud — Well-architected guidance: recomendações por pilar técnico", "https://cloud.google.com/architecture/framework/well-architected"],
          ["Google Cloud — Solutions e arquiteturas de referência com diagramas", "https://cloud.google.com/docs/tutorials"],
          ["▶ YouTube: Google Cloud architecture patterns best practices GCP design", "https://www.youtube.com/results?search_query=google+cloud+architecture+patterns+best+practices+GCP+design+decisions"]
        ]
      },
      {
        id: "w8-observability",
        track: "cloud",
        title: "Logs, métricas e tracing",
        why: "Sem observabilidade, um sistema em produção é uma caixa preta. Logs estruturados, métricas e tracing distribuído não são extras de operação — são o que permite diagnosticar com precisão, melhorar com dados e dar SLA com confiança em vez de sensação.",
        outcome: "Definir o que precisa ser observado antes que a falha aconteça.",
        practice: "Criar uma lista de eventos, métricas e logs obrigatórios para uma jornada crítica.",
        resources: [
          ["Google Cloud Observability — Cloud Logging, Monitoring e Trace integrados", "https://cloud.google.com/products/operations"],
          ["OpenTelemetry Docs — padrão aberto de instrumentação para logs, métricas e tracing", "https://opentelemetry.io/docs/"],
          ["Google SRE Book — Monitoring distributed systems: o que medir e por quê", "https://sre.google/sre-book/monitoring-distributed-systems/"],
          ["▶ YouTube: Observability logs metrics tracing distributed systems OpenTelemetry", "https://www.youtube.com/results?search_query=observability+logs+metrics+tracing+distributed+systems+opentelemetry+tutorial"]
        ]
      },
      {
        id: "w8-slo",
        track: "cloud",
        title: "SLO, erro orçamentado e confiabilidade",
        why: "'O sistema está lento' não é critério de confiabilidade — é percepção. SLOs transformam confiabilidade em número, erro orçamentado em conversa de trade-off e incidente em aprendizado mensurável. É o que permite ao Will ter uma conversa técnica precisa com produto sobre qualidade versus velocidade.",
        outcome: "Conversar sobre confiabilidade com critério, não só com sensação de urgência.",
        practice: "Definir um SLI e um SLO simples para um fluxo do sistema.",
        resources: [
          ["Google SRE Book — Service Level Objectives: conceito, criação e uso de SLOs", "https://sre.google/sre-book/service-level-objectives/"],
          ["Google SRE Workbook — Implementing SLOs: guia prático passo a passo", "https://sre.google/workbook/implementing-slos/"],
          ["Google SRE Resources — materiais completos de Site Reliability Engineering", "https://sre.google/resources/"],
          ["▶ YouTube: SLO SLI error budget site reliability engineering explained", "https://www.youtube.com/results?search_query=SLO+SLI+error+budget+site+reliability+engineering+explained+practical"]
        ]
      },
      {
        id: "w8-cost",
        track: "cloud",
        title: "Custo como variável de arquitetura",
        why: "Arquitetura sem custo como variável gera surpresas na fatura de cloud. Em sistemas distribuídos, data transfer, storage e compute se somam de formas não óbvias. O lead que entende custo antes de aprovar um padrão evita dívidas financeiras difíceis de reverter depois que o padrão virou cultura.",
        outcome: "Avaliar custo de cloud antes da solução virar padrão permanente.",
        practice: "Criar uma hipótese de custo para uma nova funcionalidade e listar o que mais pesa na conta.",
        resources: [
          ["Google Cloud Pricing Calculator — estimativa de custo por serviço antes de implementar", "https://cloud.google.com/products/calculator"],
          ["Google Cloud FinOps hub — práticas de otimização de custo em cloud", "https://cloud.google.com/finops"],
          ["FinOps Foundation — Framework: metodologia de governança de custo em cloud", "https://www.finops.org/framework/"],
          ["▶ YouTube: Cloud cost optimization Google Cloud GCP FinOps engineering", "https://www.youtube.com/results?search_query=cloud+cost+optimization+google+cloud+GCP+finops+engineering+best+practices"]
        ]
      }
    ]
  },
  {
    week: 9,
    title: "Qualidade, CI/CD e engenharia de entrega",
    focus: "Aumentar confiança de entrega sem travar o time com processo pesado.",
    modules: [
      {
        id: "w9-testing-strategy",
        track: "quality",
        title: "Estratégia de testes por risco",
        why: "Cobertura de testes sem estratégia cria falsa confiança. Testes nos lugares errados encarecem refatorações e não protegem o que importa. A pirâmide orientada a risco é a resposta para times que precisam de velocidade sem abrir mão de segurança — especialmente durante a migração strangler fig.",
        outcome: "Testar mais onde o risco é alto e menos onde o teste vira burocracia.",
        practice: "Criar pirâmide de testes para um módulo com exemplos reais de unitário, integração, contrato e e2e.",
        resources: [
          ["Martin Fowler — Practical Test Pyramid: estratégia completa com exemplos e custos", "https://martinfowler.com/articles/practical-test-pyramid.html"],
          ["Google Testing Blog — artigos técnicos sobre estratégia de testes em escala", "https://testing.googleblog.com/"],
          ["DORA — DevOps capabilities: continuous testing como capacidade de entrega", "https://dora.dev/devops-capabilities/"],
          ["▶ YouTube: Software testing strategy pyramid risk based testing explained", "https://www.youtube.com/results?search_query=software+testing+strategy+pyramid+risk+based+testing+explained+engineering"]
        ]
      },
      {
        id: "w9-ci-cd",
        track: "quality",
        title: "Pipeline como produto do time",
        why: "Um pipeline de CI/CD ruim é um freio disfarçado de processo. Falsos positivos, etapas lentas e falta de feedback transformam a pipeline em algo que o time ignora ou contorna — e quando isso acontece, a qualidade vai junto, silenciosamente.",
        outcome: "Tratar CI/CD como parte da qualidade, não como detalhe operacional.",
        practice: "Mapear o pipeline atual e listar gargalos, falsos positivos, etapas lentas e pontos sem feedback.",
        resources: [
          ["GitHub Actions Docs — documentação completa de workflows e automações", "https://docs.github.com/en/actions"],
          ["Google Cloud Build — CI/CD integrado com GCP e práticas de automação", "https://cloud.google.com/build/docs"],
          ["DORA — DevOps capabilities: continuous delivery com métricas e práticas", "https://dora.dev/devops-capabilities/"],
          ["▶ YouTube: CI CD pipeline best practices GitHub Actions production 2024", "https://www.youtube.com/results?search_query=CI+CD+pipeline+best+practices+github+actions+production+engineering+2024"]
        ]
      },
      {
        id: "w9-dora",
        track: "lead",
        title: "Métricas DORA sem teatro",
        why: "Métricas de engenharia sem contexto viram pressão disfarçada de dado. As métricas DORA — deployment frequency, lead time, change failure rate, time to restore — foram validadas em pesquisa com milhares de times e são o padrão mais rigoroso para medir saúde real de entrega.",
        outcome: "Usar métricas para entender fluxo e qualidade, não para pressionar pessoas.",
        practice: "Escolher uma métrica DORA e escrever como ela ajudaria a melhorar o sistema ou o processo.",
        resources: [
          ["DORA — Four key metrics: deployment frequency, lead time, failure rate, MTTR", "https://dora.dev/guides/dora-metrics-four-keys/"],
          ["DORA — State of DevOps research: pesquisa anual com benchmarks por nível", "https://dora.dev/research/"],
          ["Google Cloud — DevOps research e insights aplicados ao GCP", "https://cloud.google.com/devops"],
          ["▶ YouTube: DORA metrics explained deployment frequency lead time engineering", "https://www.youtube.com/results?search_query=DORA+metrics+explained+deployment+frequency+lead+time+change+failure+rate"]
        ]
      },
      {
        id: "w9-release",
        track: "architecture",
        title: "Release seguro e reversível",
        why: "Release sem estratégia de rollback não é release — é aposta. Canary, blue-green, feature flags e monitoramento imediato pós-deploy são o que separa times que entregam rápido com segurança de times que entregam e rezam para não explodir no primeiro minuto.",
        outcome: "Pensar em rollback, feature flags, migração de dados e monitoramento desde o plano.",
        practice: "Criar checklist de release para uma funcionalidade nova do sistema.",
        resources: [
          ["Google SRE Workbook — Canarying releases: guia completo de canary deployment", "https://sre.google/workbook/canarying-releases/"],
          ["Martin Fowler — Blue Green Deployment: padrão de deploy sem downtime", "https://martinfowler.com/bliki/BlueGreenDeployment.html"],
          ["Martin Fowler — Feature Toggles: tipos e estratégias de release controlado", "https://martinfowler.com/articles/feature-toggles.html"],
          ["▶ YouTube: Safe deployment strategies canary blue green feature flags rollback", "https://www.youtube.com/results?search_query=safe+deployment+strategies+canary+blue+green+feature+flags+rollback+engineering"]
        ]
      }
    ]
  },
  {
    week: 10,
    title: "Code review, mentoria e crescimento do time",
    focus: "Ser referência técnica sem virar gargalo nem responder tudo pelos outros.",
    modules: [
      {
        id: "w10-code-review",
        track: "people",
        title: "Code review que ensina",
        why: "Code review feito só para aprovar ou reprovar PR não desenvolve o time. Review com critério, contexto e ensino é uma das ferramentas mais eficazes para elevar o nível técnico coletivo — sem precisar de mais reunião, mais processo ou mais tempo do Will.",
        outcome: "Fazer review com critério, contexto e aprendizado, não só correção pontual.",
        practice: "Criar um guia pessoal de review com prioridades, exemplos de comentários bons e comentários ruins.",
        resources: [
          ["Google Engineering Practices — Code Review: guia completo de reviewer e author", "https://google.github.io/eng-practices/review/"],
          ["Conventional Comments — padrão de comentários de PR com intenção explícita", "https://conventionalcomments.org/"],
          ["Lara Hogan — Code reviews: como dar feedback técnico que ensina sem magoar", "https://larahogan.me/blog/code-reviews/"],
          ["▶ YouTube: Code review best practices software engineering how to effective", "https://www.youtube.com/results?search_query=code+review+best+practices+software+engineering+how+to+effective+feedback"]
        ]
      },
      {
        id: "w10-mentoring",
        track: "people",
        title: "Mentoria técnica no dia a dia",
        why: "Mentoria que cria dependência não é mentoria — é gestão disfarçada. O objetivo de um lead técnico é elevar a capacidade do time até que ele precise cada vez menos de resposta direta do Will. Autonomia crescente é o critério de sucesso de qualquer relação de mentoria técnica.",
        outcome: "Ajudar devs a crescerem criando autonomia, não dependência do Will.",
        practice: "Para um dev do time, escrever uma hipótese de crescimento técnico e uma ação prática de mentoria.",
        resources: [
          ["LeadDev — Mentorship: artigos sobre mentoria técnica com casos reais", "https://leaddev.com/mentoring"],
          ["Atlassian — 1-on-1 meeting guide: estrutura e perguntas para encontros individuais", "https://www.atlassian.com/team-playbook/plays/one-on-one"],
          ["StaffEng — Guides: como engenheiros seniors desenvolvem outros profissionais", "https://staffeng.com/guides/"],
          ["▶ YouTube: Technical mentoring software engineers staff engineering growth", "https://www.youtube.com/results?search_query=technical+mentoring+software+engineers+staff+engineering+growth+autonomy"]
        ]
      },
      {
        id: "w10-delegation",
        track: "lead",
        title: "Delegar decisões técnicas com segurança",
        why: "Lead que decide tudo é gargalo. Lead que delega tudo sem guardrails é ausente. A arte está em saber quando decidir, quando orientar e quando deixar alguém errar e aprender com suporte visível — sem que o Will precise estar presente em cada ponto de decisão.",
        outcome: "Saber quando decidir, quando orientar e quando deixar alguém decidir com apoio.",
        practice: "Listar três decisões que o Will poderia delegar e qual guardrail precisa existir.",
        resources: [
          ["Atlassian — DACI decision framework: quem decide, aprova, consulta e é informado", "https://www.atlassian.com/team-playbook/plays/daci"],
          ["StaffEng — Guides: como engenheiros staff delegam sem perder visibilidade", "https://staffeng.com/guides/"],
          ["Lara Hogan — Delegating to engineers: framework e exemplos práticos", "https://larahogan.me/blog/delegating-to-engineers/"],
          ["▶ YouTube: How to delegate technical decisions engineering management", "https://www.youtube.com/results?search_query=how+to+delegate+technical+decisions+engineering+management+guardrails"]
        ]
      },
      {
        id: "w10-feedback",
        track: "people",
        title: "Feedback técnico direto e humano",
        why: "Feedback vago ou indireto não muda comportamento. Feedback técnico com fato, impacto e expectativa clara é o que separa líderes que desenvolvem times de líderes que acumulam ressentimento silencioso — e que depois se surpreendem com problemas de performance que nunca foram nomeados.",
        outcome: "Falar de qualidade, comportamento e entrega com clareza sem gerar defensividade desnecessária.",
        practice: "Escrever um feedback sobre um problema técnico usando fato, impacto, expectativa e próximo passo.",
        resources: [
          ["Radical Candor — framework de feedback direto e humano de Kim Scott", "https://www.radicalcandor.com/"],
          ["Google re:Work — Manager feedback: como e quando dar feedback eficaz", "https://rework.withgoogle.com/guides/managers-give-feedback/"],
          ["Lara Hogan — Feedback equation: estrutura de fato, impacto e pedido", "https://larahogan.me/blog/feedback-equation/"],
          ["▶ YouTube: How to give technical feedback engineers direct human effective", "https://www.youtube.com/results?search_query=how+to+give+technical+feedback+engineers+direct+human+effective+radical+candor"]
        ]
      }
    ]
  },
  {
    week: 11,
    title: "Urgências, alinhamento e influência",
    focus: "Melhorar clareza em momentos de pressão e transformar urgência em decisão técnica organizada.",
    modules: [
      {
        id: "w11-incident-thinking",
        track: "cloud",
        title: "Raciocínio em incidentes e urgências",
        why: "Incidentes mal gerenciados geram dois problemas: o técnico e o organizacional. Sem estrutura de resposta, o time entra em pânico coletivo, a comunicação falha e o diagnóstico se perde no meio do caos. Com estrutura, um incidente vira aprendizado — e a resposta do lead define a cultura do time.",
        outcome: "Separar contenção, diagnóstico, correção definitiva e aprendizado pós-incidente.",
        practice: "Criar um template de resposta para urgências com status, hipótese, impacto, ação e próximo update.",
        resources: [
          ["Google SRE Book — Managing incidents: papéis, comunicação e processo em incidentes", "https://sre.google/sre-book/managing-incidents/"],
          ["PagerDuty — Incident Response Guide: guia completo e gratuito de resposta a incidentes", "https://response.pagerduty.com/"],
          ["Atlassian — Incident management: processo e melhores práticas com exemplos", "https://www.atlassian.com/incident-management"],
          ["▶ YouTube: Incident management post mortem site reliability engineering SRE", "https://www.youtube.com/results?search_query=incident+management+post+mortem+site+reliability+engineering+SRE+blameless"]
        ]
      },
      {
        id: "w11-prioritization",
        track: "lead",
        title: "Priorização técnica sob pressão",
        why: "Priorizar sob pressão sem critério leva a fazer o que grita mais alto, não o que importa mais. Frameworks de priorização não são burocracia — são a maneira de manter clareza e coerência quando o ambiente é caótico e todos esperam que o lead decida com segurança.",
        outcome: "Definir o que fazer agora, depois e nunca, com critérios claros.",
        practice: "Avaliar uma fila de problemas usando impacto, urgência, risco, esforço e dependência.",
        resources: [
          ["Intercom — RICE prioritization: score de Reach, Impact, Confidence e Effort", "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"],
          ["Atlassian — Prioritization matrix: template visual de esforço vs impacto", "https://www.atlassian.com/team-playbook/plays/prioritization-matrix"],
          ["Google re:Work — OKRs: como definir objetivos que guiam priorização técnica", "https://rework.withgoogle.com/guides/set-goals-with-okrs/"],
          ["▶ YouTube: Technical debt prioritization frameworks software engineering", "https://www.youtube.com/results?search_query=technical+debt+prioritization+frameworks+software+engineering+backlog+management"]
        ]
      },
      {
        id: "w11-stakeholders",
        track: "people",
        title: "Comunicação com produto e liderança",
        why: "Engenheiros que não conseguem traduzir impacto técnico em linguagem de negócio ficam fora das decisões importantes. Quem consegue essa tradução passa a influenciar roadmap, priorizações e cultura de engenharia — sem perder autonomia técnica nem precisar virar gerente.",
        outcome: "Traduzir impacto técnico em risco de negócio, prazo, qualidade e aprendizado.",
        practice: "Escrever uma mensagem explicando um trade-off técnico para alguém não técnico.",
        resources: [
          ["Google Technical Writing — One: curso gratuito de escrita técnica clara e direta", "https://developers.google.com/tech-writing/one"],
          ["Atlassian — Stakeholder communications: como comunicar com diferentes audiências", "https://www.atlassian.com/work-management/project-management/stakeholder-communication"],
          ["Lara Hogan — Communicating about technical debt: como falar de dívida com liderança", "https://larahogan.me/blog/communicating-about-technical-debt/"],
          ["▶ YouTube: How engineers communicate executives stakeholders technical decisions", "https://www.youtube.com/results?search_query=how+engineers+communicate+executives+stakeholders+technical+decisions+upward+communication"]
        ]
      },
      {
        id: "w11-no-gargalo",
        track: "people",
        title: "Não virar gargalo do time",
        why: "O sinal mais claro de que um lead virou gargalo é quando nada sai sem que o Will saiba. É uma posição confortável de poder, mas destrutiva para o time — e insustentável para o próprio Will, que fica preso em aprovações e perde tempo de pensamento estratégico.",
        outcome: "Criar mecanismos para o time resolver mais coisas sem depender sempre do Will.",
        practice: "Listar perguntas recorrentes do time e transformar três delas em guias, checklist ou decisão documentada.",
        resources: [
          ["Google Engineering Practices — práticas de engenharia que reduzem dependência de pessoa", "https://google.github.io/eng-practices/"],
          ["Atlassian Team Playbook — práticas estruturadas que criam autonomia de time", "https://www.atlassian.com/team-playbook"],
          ["StaffEng — Staying hands-on: como leads mantêm contribuição técnica sem virar gargalo", "https://staffeng.com/guides/staying-hands-on"],
          ["▶ YouTube: Engineering bottleneck anti patterns tech lead autonomy team", "https://www.youtube.com/results?search_query=engineering+bottleneck+anti+patterns+tech+lead+autonomy+team+dependencies"]
        ]
      }
    ]
  },
  {
    week: 12,
    title: "Playbook pessoal do Will como Lead Engineer",
    focus: "Consolidar práticas, critérios e rituais que sustentam a evolução profissional depois das 12 semanas.",
    modules: [
      {
        id: "w12-playbook",
        track: "lead",
        title: "Playbook de liderança técnica",
        why: "Práticas sem documentação voltam a ser intuição — e intuição varia conforme o contexto e o humor do dia. Um playbook pessoal é o que garante consistência técnica independente da pressão do momento, e o que transforma o aprendizado das últimas 12 semanas em ativo permanente.",
        outcome: "Transformar aprendizados em um guia pessoal de atuação como Lead Engineer.",
        practice: "Montar um documento com princípios, checklists, templates de ADR, review, incidentes e decisões.",
        resources: [
          ["StaffEng — Guides: referências de como engenheiros staff operam e documentam práticas", "https://staffeng.com/guides/"],
          ["Google Engineering Practices — guias de engenharia do Google como referência", "https://google.github.io/eng-practices/"],
          ["LeadDev — Technical leadership library: artigos e talks de referência", "https://leaddev.com/technical-leadership"],
          ["▶ YouTube: Staff engineer playbook technical leadership practices documentation", "https://www.youtube.com/results?search_query=staff+engineer+playbook+technical+leadership+practices+documentation+personal"]
        ]
      },
      {
        id: "w12-portfolio-decisions",
        track: "architecture",
        title: "Portfólio de decisões técnicas",
        why: "Portfólio de decisões técnicas é diferente de portfólio de código. Ele mostra raciocínio, contexto e trade-offs — o que conta na avaliação de maturidade técnica muito mais do que o número de features entregues. É o que prova que o Will pensa como arquiteto, não como executor.",
        outcome: "Criar histórico de decisões para mostrar evolução, raciocínio e impacto.",
        practice: "Escolher três decisões das últimas semanas e registrar contexto, decisão, trade-off e resultado esperado.",
        resources: [
          ["MADR — template de ADR minimalista e estruturado para documentar decisões", "https://adr.github.io/madr/"],
          ["C4 Model — visualizações de arquitetura como parte do portfólio técnico", "https://c4model.com/"],
          ["GitHub — architecture-decision-record: exemplos reais de ADRs de projetos abertos", "https://github.com/joelparkerhenderson/architecture-decision-record"],
          ["▶ YouTube: Architecture decision records ADR portfolio technical documentation", "https://www.youtube.com/results?search_query=architecture+decision+records+ADR+portfolio+technical+documentation+engineer"]
        ]
      },
      {
        id: "w12-growth-plan",
        track: "people",
        title: "Plano de crescimento técnico do time",
        why: "Time que cresce só quando o lead tem tempo é time estagnado. Um plano de crescimento estruturado com ownership, pareamento e mentoria é o que permite ao Will crescer junto com o time — não apesar dele, mas através do crescimento de cada pessoa.",
        outcome: "Definir como o Will apoiará devs sem centralizar tudo nele.",
        practice: "Criar uma matriz simples de habilidades do time com oportunidades de mentoria, pareamento e ownership.",
        resources: [
          ["LeadDev — Growing teams: artigos sobre desenvolvimento de times técnicos", "https://leaddev.com/growing-teams"],
          ["Atlassian — Roles and responsibilities: como definir ownership e expectativas claras", "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities"],
          ["StaffEng — Guides: como leads desenvolvem o time sem centralizar decisões", "https://staffeng.com/guides/"],
          ["▶ YouTube: Engineering team growth plan technical mentoring ownership matrix", "https://www.youtube.com/results?search_query=engineering+team+growth+plan+technical+mentoring+ownership+skills+matrix"]
        ]
      },
      {
        id: "w12-retro",
        track: "quality",
        title: "Retrospectiva da jornada",
        why: "Retrospectiva sem estrutura vira catarse coletiva. Com estrutura, ela é o momento mais valioso de aprendizado — onde padrões ficam visíveis, mudanças concretas podem ser definidas e o time consegue evoluir de forma intencional em vez de reagir continuamente ao que aparece.",
        outcome: "Entender o que mudou na forma de pensar, orientar e decidir tecnicamente.",
        practice: "Responder: o que eu fazia reativo demais, o que agora faço com mais método e qual será meu próximo foco técnico.",
        resources: [
          ["Atlassian — Retrospectives: formatos e facilitação de retros eficazes", "https://www.atlassian.com/team-playbook/plays/retrospective"],
          ["DORA — State of DevOps Research: benchmarks de times de alto desempenho", "https://dora.dev/research/"],
          ["Google SRE Book — Postmortem culture: como criar cultura de aprendizado pós-incidente", "https://sre.google/sre-book/postmortem-culture/"],
          ["▶ YouTube: Engineering retrospective techniques blameless postmortem agile", "https://www.youtube.com/results?search_query=engineering+retrospective+techniques+blameless+postmortem+agile+learning"]
        ]
      }
    ]
  }
];

const state = {
  activeTrack: "all",
  search: "",
  config: loadJSON(STORAGE.config, { functionUrl: "", accessToken: "" }),
  progress: loadJSON(STORAGE.progress, {}),
  insights: loadJSON(STORAGE.insights, []),
  situations: loadJSON(STORAGE.situations, []),
  deferredPrompt: null,
  cloudReady: false,
  currentInsightItemId: null
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  mapElements();
  bindEvents();
  renderAll();
  renderQuickSituations();
  registerServiceWorker();
  bootstrapCloud(false);
}

function mapElements() {
  const ids = [
    "trackList", "weeksContainer", "searchInput", "progressHeadline", "progressSubline", "progressBar",
    "trackCount", "insightCount", "completedCount", "completedLabel", "situationCount", "currentWeekLabel",
    "currentWeekTitle", "cloudStatus", "cloudStatusDetail", "settingsButton", "settingsDialog", "settingsForm",
    "closeSettingsButton", "clearConfigButton", "syncButton", "installButton", "situationForm", "aiResponse",
    "insightsList", "situationsList", "clearDraftButton", "toast", "insightDialog", "insightForm",
    "insightDialogTitle", "insightDialogMeta", "closeInsightButton"
  ];
  ids.forEach((id) => { els[id] = document.getElementById(id); });
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderWeeks();
  });

  els.settingsButton.addEventListener("click", openSettings);
  els.closeSettingsButton.addEventListener("click", () => els.settingsDialog.close());
  els.clearConfigButton.addEventListener("click", clearConfig);
  els.syncButton.addEventListener("click", () => bootstrapCloud(true));
  els.settingsForm.addEventListener("submit", saveSettings);
  els.situationForm.addEventListener("submit", handleSituationSubmit);
  els.clearDraftButton.addEventListener("click", () => {
    els.situationForm.reset();
    els.aiResponse.className = "ai-response empty-state";
    els.aiResponse.textContent = "Rascunho limpo. Registre uma nova situação para o tutor analisar.";
  });
  els.insightForm.addEventListener("submit", saveInsightFromDialog);
  els.closeInsightButton.addEventListener("click", () => els.insightDialog.close());

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredPrompt = event;
    els.installButton.hidden = false;
  });

  els.installButton.addEventListener("click", async () => {
    if (!state.deferredPrompt) return;
    state.deferredPrompt.prompt();
    await state.deferredPrompt.userChoice;
    state.deferredPrompt = null;
    els.installButton.hidden = true;
  });
}

function renderAll() {
  renderTracks();
  renderWeeks();
  renderMetrics();
  renderLists();
}

function renderTracks() {
  els.trackList.innerHTML = "";
  tracks.forEach((track) => {
    const count = track.id === "all" ? getAllModules().length : getAllModules().filter((item) => item.track === track.id).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `track-button ${state.activeTrack === track.id ? "is-active" : ""}`;
    button.innerHTML = `<span>${escapeHTML(track.label)}</span><small>${count}</small>`;
    button.addEventListener("click", () => {
      state.activeTrack = track.id;
      renderTracks();
      renderWeeks();
    });
    els.trackList.appendChild(button);
  });
  els.trackCount.textContent = String(tracks.length - 1);
}

function renderWeeks() {
  const filteredPlan = getFilteredPlan();
  els.weeksContainer.innerHTML = "";

  if (!filteredPlan.length) {
    els.weeksContainer.innerHTML = `<div class="card empty-state">Nenhum conteúdo encontrado para esse filtro.</div>`;
    return;
  }

  filteredPlan.forEach((week) => {
    const done = week.modules.filter((module) => isDone(module.id)).length;
    const total = week.modules.length;
    const article = document.createElement("article");
    article.className = "week-card";
    article.innerHTML = `
      <div class="week-header">
        <div>
          <span class="eyebrow">Semana ${week.week}</span>
          <h3>${escapeHTML(week.title)}</h3>
          <p>${escapeHTML(week.focus)}</p>
        </div>
        <span class="week-progress-pill">${done}/${total}</span>
      </div>
      <div class="module-grid">
        ${week.modules.map(renderModuleCard).join("")}
      </div>
    `;
    article.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", handleModuleAction);
    });
    els.weeksContainer.appendChild(article);
  });
}

function renderModuleCard(module) {
  const done = isDone(module.id);
  const track = tracks.find((item) => item.id === module.track) || tracks[0];
  const whyHtml = module.why
    ? `<p class="module-why">${escapeHTML(module.why)}</p>`
    : "";
  return `
    <article class="module-card ${done ? "is-done" : ""}" data-item-id="${module.id}">
      <div class="module-topline">
        <span class="badge">${escapeHTML(track.short)}</span>
        <button class="check-button ${done ? "is-done" : ""}" type="button" title="Marcar estudo" data-action="toggle" data-id="${module.id}">${done ? "✓" : ""}</button>
      </div>
      <h4>${escapeHTML(module.title)}</h4>
      ${whyHtml}
      <p><strong>Objetivo:</strong> ${escapeHTML(module.outcome)}</p>
      <p><strong>Prática:</strong> ${escapeHTML(module.practice)}</p>
      <ul class="resource-list">
        ${module.resources.map(([label, href]) => `<li><a href="${escapeHTML(href)}" target="_blank" rel="noreferrer noopener">↗ ${escapeHTML(label)}</a></li>`).join("")}
      </ul>
      <div class="module-actions">
        <button class="secondary-button" type="button" data-action="insight" data-id="${module.id}">Salvar insight</button>
        <button class="ghost-button" type="button" data-action="ask" data-id="${module.id}">Perguntar ao tutor</button>
        <button class="ghost-button" type="button" data-action="copy" data-id="${module.id}">Copiar tarefa</button>
      </div>
    </article>
  `;
}

function renderMetrics() {
  const modules = getAllModules();
  const completed = modules.filter((item) => isDone(item.id)).length;
  const total = modules.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const currentWeek = getCurrentWeekSuggestion();

  els.progressHeadline.textContent = `${percent}% concluído`;
  els.progressSubline.textContent = completed ? `${completed} estudos concluídos. Próximo passo: registrar insights e aplicar em situações reais.` : "Comece marcando os primeiros estudos concluídos.";
  els.progressBar.style.width = `${percent}%`;
  els.completedCount.textContent = String(completed);
  els.completedLabel.textContent = `de ${total} atividades`;
  els.insightCount.textContent = String(state.insights.length);
  els.situationCount.textContent = String(state.situations.length);
  els.currentWeekLabel.textContent = `Semana ${currentWeek.week}`;
  els.currentWeekTitle.textContent = currentWeek.title;

  if (state.cloudReady) {
    els.cloudStatus.textContent = "Nuvem";
    els.cloudStatusDetail.textContent = "Supabase conectado.";
  } else if (hasCloudConfig()) {
    els.cloudStatus.textContent = "Pendente";
    els.cloudStatusDetail.textContent = "Configuração salva, mas a sincronização falhou ou ainda não foi testada.";
  } else {
    els.cloudStatus.textContent = "Local";
    els.cloudStatusDetail.textContent = "Configure o Supabase para sincronizar.";
  }
}

function renderQuickSituations() {
  const list = document.getElementById("quickSituationsList");
  if (!list) return;
  list.innerHTML = "";
  quickSituations.forEach((qs) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-situation-btn";
    button.innerHTML = `<span>${qs.icon}</span><span>${escapeHTML(qs.label)}</span>`;
    button.addEventListener("click", () => {
      document.getElementById("situacoes").scrollIntoView({ behavior: "smooth" });
      els.situationForm.elements.title.value = qs.title;
      els.situationForm.elements.area.value = qs.area;
      els.situationForm.elements.urgency.value = qs.urgency;
      els.situationForm.elements.context.value = qs.context;
      els.situationForm.elements.question.value = qs.question;
      showToast(`"${qs.label}" carregada. Complete com o seu contexto real e pergunte ao tutor.`);
    });
    list.appendChild(button);
  });
}

function renderLists() {
  els.insightsList.className = state.insights.length ? "list-stack" : "list-stack empty-state";
  els.insightsList.innerHTML = state.insights.length
    ? state.insights.slice(0, 8).map((insight) => `
      <article class="list-item">
        <strong>${escapeHTML(insight.item_title || "Insight")}</strong>
        <p>${escapeHTML(insight.content)}</p>
        <small>${formatDate(insight.created_at)} · ${escapeHTML(getTrackLabel(insight.track_id))}</small>
      </article>
    `).join("")
    : "Nenhum insight salvo ainda.";

  els.situationsList.className = state.situations.length ? "list-stack" : "list-stack empty-state";
  els.situationsList.innerHTML = state.situations.length
    ? state.situations.slice(0, 8).map((situation) => `
      <article class="list-item">
        <strong>${escapeHTML(situation.title || "Situação")}</strong>
        <p>${escapeHTML(situation.question || situation.context || "")}</p>
        <small>${formatDate(situation.created_at)} · ${escapeHTML(situation.area || "Geral")} · urgência ${escapeHTML(situation.urgency || "Média")}</small>
        ${situation.ai_response ? `<button class="ghost-button" type="button" data-response-id="${situation.id}">Ver resposta</button>` : ""}
      </article>
    `).join("")
    : "Nenhuma situação registrada ainda.";

  els.situationsList.querySelectorAll("[data-response-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const situation = state.situations.find((item) => String(item.id) === String(button.dataset.responseId));
      if (situation?.ai_response) {
        els.aiResponse.className = "ai-response";
        els.aiResponse.innerHTML = markdownToHTML(situation.ai_response);
        document.getElementById("situacoes").scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function handleModuleAction(event) {
  const action = event.currentTarget.dataset.action;
  const id = event.currentTarget.dataset.id;
  const item = findModule(id);
  if (!item) return;

  if (action === "toggle") toggleProgress(item);
  if (action === "insight") openInsight(item);
  if (action === "ask") prepareTutorQuestion(item);
  if (action === "copy") copyModule(item);
}

async function toggleProgress(item) {
  const nextDone = !isDone(item.id);
  const payload = {
    item_id: item.id,
    item_title: item.title,
    track_id: item.track,
    week: findWeekNumber(item.id),
    status: nextDone ? "done" : "todo",
    completed_at: nextDone ? new Date().toISOString() : null
  };

  state.progress[item.id] = payload;
  persistLocal();
  renderAll();
  showToast(nextDone ? "Estudo marcado como concluído." : "Estudo voltou para pendente.");

  try {
    await api("setProgress", payload);
    state.cloudReady = true;
    renderMetrics();
  } catch (error) {
    state.cloudReady = false;
    renderMetrics();
    showToast(`Salvo localmente. Supabase não configurado.`);
  }
}

function openInsight(item) {
  state.currentInsightItemId = item.id;
  els.insightDialogTitle.textContent = item.title;
  els.insightDialogMeta.textContent = `Semana ${findWeekNumber(item.id)} · ${getTrackLabel(item.track)}`;
  els.insightForm.elements.itemId.value = item.id;
  els.insightForm.elements.content.value = "";
  els.insightDialog.showModal();
}

async function saveInsightFromDialog(event) {
  event.preventDefault();
  const item = findModule(els.insightForm.elements.itemId.value);
  const content = els.insightForm.elements.content.value.trim();
  if (!item || !content) return;

  const insight = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
    item_id: item.id,
    item_title: item.title,
    track_id: item.track,
    week: findWeekNumber(item.id),
    content,
    created_at: new Date().toISOString()
  };

  state.insights = [insight, ...state.insights];
  persistLocal();
  renderAll();
  els.insightDialog.close();
  showToast("Insight salvo no caderno técnico.");

  try {
    const saved = await api("saveInsight", insight);
    if (saved?.insight) {
      state.insights = replaceTempItem(state.insights, insight.id, saved.insight);
      persistLocal();
      renderAll();
    }
    state.cloudReady = true;
  } catch (error) {
    state.cloudReady = false;
    showToast(`Insight salvo localmente. Nuvem não sincronizou.`);
  }
  renderMetrics();
}

function prepareTutorQuestion(item) {
  document.getElementById("situacoes").scrollIntoView({ behavior: "smooth" });
  els.situationForm.elements.title.value = `Dúvida sobre ${item.title}`;
  els.situationForm.elements.area.value = inferArea(item.track);
  els.situationForm.elements.urgency.value = "Média";
  els.situationForm.elements.context.value = `Estou estudando a semana ${findWeekNumber(item.id)} do Will Tutor. O tema é "${item.title}".\n\nObjetivo do estudo: ${item.outcome}\n\nPrática proposta: ${item.practice}`;
  els.situationForm.elements.question.value = "Como eu aplico isso no meu contexto de Lead Engineer, considerando evolução de sistema existente, orientação do time e tomada de decisão técnica?";
  showToast("Rascunho criado. Complete com o contexto real e pergunte ao tutor.");
}

async function copyModule(item) {
  const text = `Will Tutor\n\n${item.title}\n\nPor que importa: ${item.why || ""}\n\nObjetivo: ${item.outcome}\n\nPrática: ${item.practice}\n\nMateriais:\n${item.resources.map(([label, href]) => `- ${label}: ${href}`).join("\n")}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Tarefa copiada.");
  } catch {
    showToast("Não consegui copiar automaticamente. Selecione o texto do card manualmente.");
  }
}

async function handleSituationSubmit(event) {
  event.preventDefault();
  const submitter = event.submitter;
  const shouldAsk = submitter?.dataset.mode === "ask";
  const form = new FormData(els.situationForm);
  const situation = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
    title: String(form.get("title") || "").trim(),
    area: String(form.get("area") || "Arquitetura"),
    urgency: String(form.get("urgency") || "Média"),
    context: String(form.get("context") || "").trim(),
    question: String(form.get("question") || "").trim(),
    ai_response: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  if (!situation.title || !situation.context || !situation.question) {
    showToast("Preencha título, contexto e pergunta.");
    return;
  }

  setFormLoading(true, shouldAsk ? "Perguntando ao tutor..." : "Salvando situação...");

  try {
    const result = await api(shouldAsk ? "createSituationAndAsk" : "createSituation", situation);
    const saved = result?.situation || situation;
    state.situations = [saved, ...state.situations.filter((item) => item.id !== situation.id)];
    persistLocal();
    renderAll();

    if (shouldAsk && saved.ai_response) {
      els.aiResponse.className = "ai-response";
      els.aiResponse.innerHTML = markdownToHTML(saved.ai_response);
    } else {
      els.aiResponse.className = "ai-response empty-state";
      els.aiResponse.textContent = "Situação salva. Você pode voltar nela depois para pedir ajuda ao tutor.";
    }
    els.situationForm.reset();
    state.cloudReady = true;
    showToast(shouldAsk ? "Situação salva e respondida pelo tutor." : "Situação salva na nuvem.");
  } catch (error) {
    state.cloudReady = false;
    state.situations = [situation, ...state.situations];
    persistLocal();
    renderAll();
    if (shouldAsk) {
      els.aiResponse.className = "ai-response empty-state";
      els.aiResponse.textContent = `Não consegui chamar o tutor agora. A situação foi salva localmente.`;
    }
    showToast(`Falha na nuvem: ${error.message}`);
  } finally {
    setFormLoading(false);
    renderMetrics();
  }
}

function setFormLoading(isLoading, message = "") {
  els.situationForm.querySelectorAll("button, input, textarea, select").forEach((item) => {
    item.disabled = isLoading;
  });
  if (isLoading) {
    els.aiResponse.className = "ai-response empty-state";
    els.aiResponse.textContent = message;
  }
}

function openSettings() {
  els.settingsForm.elements.functionUrl.value = state.config.functionUrl || "";
  els.settingsForm.elements.accessToken.value = state.config.accessToken || "";
  els.settingsDialog.showModal();
}

function saveSettings(event) {
  event.preventDefault();
  const functionUrl = els.settingsForm.elements.functionUrl.value.trim().replace(/\/+$/, "");
  const accessToken = els.settingsForm.elements.accessToken.value.trim();
  state.config = { functionUrl, accessToken };
  localStorage.setItem(STORAGE.config, JSON.stringify(state.config));
  els.settingsDialog.close();
  showToast("Configuração salva neste navegador.");
  bootstrapCloud(true);
}

function clearConfig() {
  state.config = { functionUrl: "", accessToken: "" };
  localStorage.removeItem(STORAGE.config);
  state.cloudReady = false;
  renderMetrics();
  els.settingsDialog.close();
  showToast("Configuração apagada deste navegador.");
}

async function bootstrapCloud(showFeedback) {
  if (!hasCloudConfig()) {
    state.cloudReady = false;
    renderMetrics();
    if (showFeedback) showToast("Configure a URL da Edge Function e o código do tutor primeiro.");
    return;
  }

  try {
    const data = await api("bootstrap", {});
    if (data?.progress) {
      state.progress = Object.fromEntries(data.progress.map((item) => [item.item_id, item]));
    }
    if (Array.isArray(data?.insights)) state.insights = data.insights;
    if (Array.isArray(data?.situations)) state.situations = data.situations;
    state.cloudReady = true;
    persistLocal();
    renderAll();
    if (showFeedback) showToast("Sincronização com Supabase concluída.");
  } catch (error) {
    state.cloudReady = false;
    renderMetrics();
    if (showFeedback) showToast(`Não consegui sincronizar: ${error.message}`);
  }
}

async function api(action, payload) {
  if (!hasCloudConfig()) throw new Error("Supabase ainda não configurado");
  const response = await fetch(state.config.functionUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-will-tutor-token": state.config.accessToken
    },
    body: JSON.stringify({ action, payload })
  });

  const text = await response.text();
  let data = {};
  try { data = text ? JSON.parse(text) : {}; } catch { data = { error: text }; }

  if (!response.ok) {
    throw new Error(data.error || `Erro HTTP ${response.status}`);
  }
  return data;
}

function getFilteredPlan() {
  return plan
    .map((week) => ({
      ...week,
      modules: week.modules.filter((module) => {
        const trackMatch = state.activeTrack === "all" || module.track === state.activeTrack;
        const searchText = `${week.title} ${week.focus} ${module.title} ${module.outcome} ${module.practice} ${getTrackLabel(module.track)}`.toLowerCase();
        const searchMatch = !state.search || searchText.includes(state.search);
        return trackMatch && searchMatch;
      })
    }))
    .filter((week) => week.modules.length > 0);
}

function getAllModules() {
  return plan.flatMap((week) => week.modules);
}

function findModule(id) {
  return getAllModules().find((item) => item.id === id);
}

function findWeekNumber(itemId) {
  const week = plan.find((entry) => entry.modules.some((module) => module.id === itemId));
  return week?.week || null;
}

function getCurrentWeekSuggestion() {
  const firstIncomplete = plan.find((week) => week.modules.some((module) => !isDone(module.id)));
  return firstIncomplete || plan[plan.length - 1];
}

function getTrackLabel(trackId) {
  return tracks.find((track) => track.id === trackId)?.label || "Geral";
}

function inferArea(trackId) {
  const map = {
    lead: "Processo e entrega",
    backend: "Backend",
    architecture: "Arquitetura",
    frontend: "Frontend",
    database: "Banco de dados",
    cloud: "Cloud e observabilidade",
    quality: "Processo e entrega",
    people: "Pessoas e comunicação"
  };
  return map[trackId] || "Arquitetura";
}

function isDone(itemId) {
  return state.progress[itemId]?.status === "done";
}

function persistLocal() {
  localStorage.setItem(STORAGE.progress, JSON.stringify(state.progress));
  localStorage.setItem(STORAGE.insights, JSON.stringify(state.insights));
  localStorage.setItem(STORAGE.situations, JSON.stringify(state.situations));
}

function hasCloudConfig() {
  return Boolean(state.config.functionUrl && state.config.accessToken);
}

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function replaceTempItem(list, tempId, savedItem) {
  return list.map((item) => String(item.id) === String(tempId) ? savedItem : item);
}

function formatDate(value) {
  if (!value) return "sem data";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function markdownToHTML(markdown) {
  const escaped = escapeHTML(markdown);
  const lines = escaped.split("\n");
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) { html += "</ul>"; inList = false; }
      return;
    }
    if (trimmed.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h4>${inlineMarkdown(trimmed.slice(4))}</h4>`;
    } else if (trimmed.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h4>${inlineMarkdown(trimmed.slice(3))}</h4>`;
    } else if (trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${inlineMarkdown(trimmed.replace(/^(-|\d+\.)\s/, ""))}</li>`;
    } else {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<p>${inlineMarkdown(trimmed)}</p>`;
    }
  });

  if (inList) html += "</ul>";
  return html;
}

function inlineMarkdown(value) {
  return value
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.*?)`/g, "<code>$1</code>");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 3600);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => undefined);
  });
}
