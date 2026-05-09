const STORAGE = {
  config: "willTutor.config.v1",
  progress: "willTutor.progress.v1",
  insights: "willTutor.insights.v1",
  situations: "willTutor.situations.v1"
};

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
        outcome: "Separar o que é decisão técnica, influência, mentoria, alinhamento e execução hands-on.",
        practice: "Escrever um mapa com decisões que só o Will deve tomar, decisões que o time pode tomar e decisões que precisam de alinhamento com produto.",
        resources: [
          ["StaffEng, overview de responsabilidades", "https://staffeng.com/guides/staff-archetypes/"],
          ["LeadDev, biblioteca sobre liderança técnica", "https://leaddev.com/technical-leadership"]
        ]
      },
      {
        id: "w1-system-map",
        track: "architecture",
        title: "Mapa do sistema que será estrangulado",
        outcome: "Desenhar fronteiras, fluxos críticos, integrações e pontos de risco antes de propor evolução.",
        practice: "Criar um desenho simples com sistema atual, novo sistema, módulos, dependências, donos e fluxos mais sensíveis.",
        resources: [
          ["C4 Model para visualizar arquitetura", "https://c4model.com/"],
          ["Martin Fowler, Strangler Fig Application", "https://martinfowler.com/bliki/StranglerFigApplication.html"]
        ]
      },
      {
        id: "w1-questions",
        track: "people",
        title: "Perguntas melhores antes de orientar o time",
        outcome: "Criar repertório para não responder tudo no impulso e ajudar devs a raciocinar melhor.",
        practice: "Montar uma lista de 10 perguntas para usar quando alguém trouxer uma urgência técnica.",
        resources: [
          ["Google re:Work, práticas de times efetivos", "https://rework.withgoogle.com/"],
          ["Atlassian Team Playbook", "https://www.atlassian.com/team-playbook"]
        ]
      },
      {
        id: "w1-adr",
        track: "architecture",
        title: "ADR para decisões técnicas",
        outcome: "Registrar decisões com contexto, alternativas, consequências e critérios de revisão.",
        practice: "Criar o primeiro ADR do projeto, mesmo que seja rascunho, sobre uma decisão real da evolução do sistema.",
        resources: [
          ["MADR, template de Architecture Decision Record", "https://adr.github.io/madr/"],
          ["Thoughtworks, Architecture Decision Records", "https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records"]
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
        outcome: "Usar tipos para reduzir ambiguidade em contratos, casos de uso e integrações.",
        practice: "Revisar um trecho de código e listar onde generics, union types ou narrowing poderiam evitar bugs.",
        resources: [
          ["TypeScript Handbook", "https://www.typescriptlang.org/docs/handbook/intro.html"],
          ["TypeScript Everyday Types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"]
        ]
      },
      {
        id: "w2-node-runtime",
        track: "backend",
        title: "Node.js, event loop e performance",
        outcome: "Explicar gargalos de I/O, concorrência e processamento assíncrono com clareza para o time.",
        practice: "Preparar uma explicação curta sobre event loop usando um problema real do sistema.",
        resources: [
          ["Node.js, guia oficial sobre event loop", "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"],
          ["Node.js, documentação oficial", "https://nodejs.org/docs/latest/api/"]
        ]
      },
      {
        id: "w2-error-handling",
        track: "backend",
        title: "Erros, exceções e contratos de falha",
        outcome: "Definir como o sistema falha, loga, responde e se recupera sem virar caos operacional.",
        practice: "Escolher um fluxo crítico e mapear erros esperados, erros inesperados, retry, fallback e mensagem para cliente interno.",
        resources: [
          ["NestJS Exception Filters", "https://docs.nestjs.com/exception-filters"],
          ["Google Cloud, retry strategy", "https://cloud.google.com/storage/docs/retry-strategy"]
        ]
      },
      {
        id: "w2-code-reading",
        track: "quality",
        title: "Leitura crítica de código legado",
        outcome: "Identificar cheiro de código, risco e dívida técnica sem transformar tudo em refatoração infinita.",
        practice: "Escolher um módulo antigo e criar uma análise com risco, impacto, custo de mexer e proposta de isolamento.",
        resources: [
          ["Refactoring Guru, code smells", "https://refactoring.guru/refactoring/smells"],
          ["Martin Fowler, Technical Debt Quadrant", "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"]
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
        outcome: "Evitar módulos genéricos demais e dependências circulares que tornam o sistema difícil de evoluir.",
        practice: "Desenhar módulos por capacidade de negócio e apontar quais dependências devem ser invertidas.",
        resources: [
          ["NestJS Modules", "https://docs.nestjs.com/modules"],
          ["NestJS Providers", "https://docs.nestjs.com/providers"]
        ]
      },
      {
        id: "w3-clean-architecture",
        track: "architecture",
        title: "Arquitetura limpa sem dogmatismo",
        outcome: "Separar domínio, aplicação, infraestrutura e interfaces quando isso gerar clareza real.",
        practice: "Reescrever mentalmente um caso de uso com entrada, regra, saída, gateway e efeito colateral.",
        resources: [
          ["The Clean Architecture, artigo original", "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"],
          ["NestJS, custom providers", "https://docs.nestjs.com/fundamentals/custom-providers"]
        ]
      },
      {
        id: "w3-contracts",
        track: "backend",
        title: "Contratos internos e externos",
        outcome: "Criar contratos claros entre módulos, APIs e integrações para reduzir retrabalho.",
        practice: "Definir DTOs, validações e respostas de erro de um endpoint real antes de codar.",
        resources: [
          ["NestJS Validation", "https://docs.nestjs.com/techniques/validation"],
          ["OpenAPI Specification", "https://spec.openapis.org/oas/latest.html"]
        ]
      },
      {
        id: "w3-testing-nest",
        track: "quality",
        title: "Testes em NestJS que protegem decisões",
        outcome: "Diferenciar teste de unidade, integração e contrato sem testar detalhes irrelevantes.",
        practice: "Selecionar um caso de uso e escrever quais testes dariam confiança para evoluir sem quebrar.",
        resources: [
          ["NestJS Testing", "https://docs.nestjs.com/fundamentals/testing"],
          ["Testing Library, princípios", "https://testing-library.com/docs/guiding-principles"]
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
        outcome: "Dividir a migração por fluxos de negócio, não por camadas técnicas isoladas.",
        practice: "Criar uma matriz de fatias com valor, risco, dependências, reversibilidade e dono técnico.",
        resources: [
          ["Martin Fowler, Strangler Fig Application", "https://martinfowler.com/bliki/StranglerFigApplication.html"],
          ["AWS Prescriptive Guidance, strangler fig pattern", "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html"]
        ]
      },
      {
        id: "w4-routing",
        track: "architecture",
        title: "Roteamento, feature flags e coexistência",
        outcome: "Planejar como tráfego, usuários ou fluxos migram gradualmente para o novo sistema.",
        practice: "Definir uma estratégia de feature flag ou roteamento para uma funcionalidade nova.",
        resources: [
          ["LaunchDarkly, feature flags guide", "https://launchdarkly.com/blog/what-are-feature-flags/"],
          ["Google Cloud Architecture Framework", "https://cloud.google.com/architecture/framework"]
        ]
      },
      {
        id: "w4-risk-register",
        track: "lead",
        title: "Registro de riscos técnicos",
        outcome: "Tirar riscos da conversa solta e transformar em acompanhamento visível.",
        practice: "Criar uma tabela com risco, impacto, probabilidade, mitigação, dono e data de revisão.",
        resources: [
          ["Atlassian, risk assessment matrix", "https://www.atlassian.com/work-management/project-management/risk-assessment"],
          ["Google SRE Book, risk", "https://sre.google/sre-book/risk-engineering/"]
        ]
      },
      {
        id: "w4-explain-plan",
        track: "people",
        title: "Como explicar a estratégia ao time",
        outcome: "Transformar uma decisão arquitetural em uma narrativa compreensível para devs, produto e liderança.",
        practice: "Gravar ou escrever uma explicação de 3 minutos sobre por que não será uma refatoração tradicional.",
        resources: [
          ["Google Technical Writing Courses", "https://developers.google.com/tech-writing"],
          ["Atlassian DACI decision framework", "https://www.atlassian.com/team-playbook/plays/daci"]
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
        outcome: "Criar endpoints pensando em consumidor, contrato, versionamento e evolução.",
        practice: "Escolher uma API e escrever contrato, casos de erro, exemplos de payload e critérios de aceite.",
        resources: [
          ["Google Cloud API Design Guide", "https://cloud.google.com/apis/design"],
          ["Microsoft REST API Guidelines", "https://github.com/microsoft/api-guidelines"]
        ]
      },
      {
        id: "w5-idempotency",
        track: "architecture",
        title: "Idempotência e consistência em fluxos críticos",
        outcome: "Reduzir efeitos duplicados e falhas em integrações importantes.",
        practice: "Mapear onde idempotency key, lock, fila ou retry controlado fariam sentido.",
        resources: [
          ["Stripe, idempotent requests", "https://docs.stripe.com/api/idempotent_requests"],
          ["Google Cloud, retry strategy", "https://cloud.google.com/storage/docs/retry-strategy"]
        ]
      },
      {
        id: "w5-events",
        track: "architecture",
        title: "Eventos, comandos e acoplamento",
        outcome: "Decidir quando um fluxo precisa ser síncrono, assíncrono ou eventualmente consistente.",
        practice: "Pegar um fluxo do sistema e classificar pontos que podem virar eventos sem perder rastreabilidade.",
        resources: [
          ["Google Cloud Pub/Sub overview", "https://cloud.google.com/pubsub/docs/overview"],
          ["Martin Fowler, Event-Driven Architecture", "https://martinfowler.com/articles/201701-event-driven.html"]
        ]
      },
      {
        id: "w5-contract-tests",
        track: "quality",
        title: "Testes de contrato",
        outcome: "Evitar que mudanças entre serviços quebrem consumidores silenciosamente.",
        practice: "Definir um contrato que deveria ser testado entre dois módulos ou sistemas.",
        resources: [
          ["Pact, contract testing", "https://docs.pact.io/"],
          ["OpenAPI Specification", "https://spec.openapis.org/oas/latest.html"]
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
        outcome: "Criar tabelas e relações que expressem regras do negócio sem acoplar demais a aplicação.",
        practice: "Revisar um modelo e identificar entidades, agregados, campos derivados e constraints necessárias.",
        resources: [
          ["PostgreSQL Documentation", "https://www.postgresql.org/docs/"],
          ["PostgreSQL Constraints", "https://www.postgresql.org/docs/current/ddl-constraints.html"]
        ]
      },
      {
        id: "w6-indexes",
        track: "database",
        title: "Índices e leitura de plano de execução",
        outcome: "Entender quando índice ajuda, quando atrapalha e como explicar isso para o time.",
        practice: "Rodar EXPLAIN em uma query relevante e escrever o que faria para melhorar.",
        resources: [
          ["PostgreSQL EXPLAIN", "https://www.postgresql.org/docs/current/using-explain.html"],
          ["PostgreSQL Indexes", "https://www.postgresql.org/docs/current/indexes.html"]
        ]
      },
      {
        id: "w6-migrations",
        track: "database",
        title: "Migrations seguras",
        outcome: "Evoluir schema sem bloquear release, derrubar performance ou quebrar compatibilidade.",
        practice: "Escrever um plano expand and contract para uma mudança de schema real.",
        resources: [
          ["Prisma, expand and contract pattern", "https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern"],
          ["PostgreSQL ALTER TABLE", "https://www.postgresql.org/docs/current/sql-altertable.html"]
        ]
      },
      {
        id: "w6-data-quality",
        track: "quality",
        title: "Qualidade de dados como requisito técnico",
        outcome: "Tratar dados inválidos, duplicados ou incompletos como risco do produto.",
        practice: "Listar validações que devem estar na API, no banco e no processo operacional.",
        resources: [
          ["PostgreSQL CHECK constraints", "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS"],
          ["Google Cloud, data quality overview", "https://cloud.google.com/dataplex/docs/data-quality-overview"]
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
        outcome: "Orientar decisões de componentes, estado e renderização sem cair em solução automática.",
        practice: "Escolher uma tela e separar estado local, estado remoto, derivado e cacheável.",
        resources: [
          ["React Docs, Thinking in React", "https://react.dev/learn/thinking-in-react"],
          ["React Docs, managing state", "https://react.dev/learn/managing-state"]
        ]
      },
      {
        id: "w7-api-frontend",
        track: "frontend",
        title: "Contrato entre front e backend",
        outcome: "Evitar que a experiência do usuário fique refém de APIs mal desenhadas.",
        practice: "Descrever estados de loading, empty, error, partial success e retry para uma jornada crítica.",
        resources: [
          ["web.dev, resilient UX", "https://web.dev/learn/design/"],
          ["React Docs, escape hatches", "https://react.dev/learn/escape-hatches"]
        ]
      },
      {
        id: "w7-accessibility",
        track: "frontend",
        title: "Acessibilidade como qualidade de engenharia",
        outcome: "Incluir acessibilidade em review e critérios técnicos, não como acabamento final.",
        practice: "Revisar uma tela com teclado, contraste, labels e estados de erro.",
        resources: [
          ["WCAG Quick Reference", "https://www.w3.org/WAI/WCAG22/quickref/"],
          ["MDN Accessibility", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility"]
        ]
      },
      {
        id: "w7-product-thinking",
        track: "lead",
        title: "Decisão técnica com impacto de produto",
        outcome: "Conectar trade-offs técnicos com prazo, risco, aprendizado e valor para usuário.",
        practice: "Para uma decisão real, escrever impacto técnico, impacto no usuário e impacto no time.",
        resources: [
          ["Mind the Product, product thinking", "https://www.mindtheproduct.com/"],
          ["Atlassian, project poster", "https://www.atlassian.com/team-playbook/plays/project-poster"]
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
        outcome: "Avaliar confiabilidade, segurança, custo, performance e operação na arquitetura.",
        practice: "Escolher uma funcionalidade nova e avaliar com os pilares do framework.",
        resources: [
          ["Google Cloud Architecture Framework", "https://cloud.google.com/architecture/framework"],
          ["Google Cloud, well-architected guidance", "https://cloud.google.com/architecture/framework/well-architected"]
        ]
      },
      {
        id: "w8-observability",
        track: "cloud",
        title: "Logs, métricas e tracing",
        outcome: "Definir o que precisa ser observado antes que a falha aconteça.",
        practice: "Criar uma lista de eventos, métricas e logs obrigatórios para uma jornada crítica.",
        resources: [
          ["Google Cloud Observability", "https://cloud.google.com/products/operations"],
          ["OpenTelemetry Docs", "https://opentelemetry.io/docs/"]
        ]
      },
      {
        id: "w8-slo",
        track: "cloud",
        title: "SLO, erro orçamentado e confiabilidade",
        outcome: "Conversar sobre confiabilidade com critério, não só com sensação de urgência.",
        practice: "Definir um SLI e um SLO simples para um fluxo do sistema.",
        resources: [
          ["Google SRE Book, Service Level Objectives", "https://sre.google/sre-book/service-level-objectives/"],
          ["Google Cloud SRE resources", "https://sre.google/resources/"]
        ]
      },
      {
        id: "w8-cost",
        track: "cloud",
        title: "Custo como variável de arquitetura",
        outcome: "Avaliar custo de cloud antes da solução virar padrão permanente.",
        practice: "Criar uma hipótese de custo para uma nova funcionalidade e listar o que mais pesa na conta.",
        resources: [
          ["Google Cloud Pricing Calculator", "https://cloud.google.com/products/calculator"],
          ["Google Cloud FinOps hub", "https://cloud.google.com/finops"]
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
        outcome: "Testar mais onde o risco é alto e menos onde o teste vira burocracia.",
        practice: "Criar pirâmide de testes para um módulo com exemplos reais de unitário, integração, contrato e e2e.",
        resources: [
          ["Martin Fowler, Test Pyramid", "https://martinfowler.com/articles/practical-test-pyramid.html"],
          ["Google Testing Blog", "https://testing.googleblog.com/"]
        ]
      },
      {
        id: "w9-ci-cd",
        track: "quality",
        title: "Pipeline como produto do time",
        outcome: "Tratar CI/CD como parte da qualidade, não como detalhe operacional.",
        practice: "Mapear o pipeline atual e listar gargalos, falsos positivos, etapas lentas e pontos sem feedback.",
        resources: [
          ["GitHub Actions Docs", "https://docs.github.com/actions"],
          ["DORA, capabilities for software delivery", "https://dora.dev/devops-capabilities/"]
        ]
      },
      {
        id: "w9-dora",
        track: "lead",
        title: "Métricas DORA sem teatro",
        outcome: "Usar métricas para entender fluxo e qualidade, não para pressionar pessoas.",
        practice: "Escolher uma métrica DORA e escrever como ela ajudaria a melhorar o sistema ou o processo.",
        resources: [
          ["DORA Metrics", "https://dora.dev/guides/dora-metrics-four-keys/"],
          ["Accelerate State of DevOps", "https://dora.dev/research/"]
        ]
      },
      {
        id: "w9-release",
        track: "architecture",
        title: "Release seguro e reversível",
        outcome: "Pensar em rollback, feature flags, migração de dados e monitoramento desde o plano.",
        practice: "Criar checklist de release para uma funcionalidade nova do sistema.",
        resources: [
          ["Google SRE Workbook, canarying releases", "https://sre.google/workbook/canarying-releases/"],
          ["Martin Fowler, Blue Green Deployment", "https://martinfowler.com/bliki/BlueGreenDeployment.html"]
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
        outcome: "Fazer review com critério, contexto e aprendizado, não só correção pontual.",
        practice: "Criar um guia pessoal de review com prioridades, exemplos de comentários bons e comentários ruins.",
        resources: [
          ["Google Engineering Practices, Code Review", "https://google.github.io/eng-practices/review/"],
          ["Conventional Comments", "https://conventionalcomments.org/"]
        ]
      },
      {
        id: "w10-mentoring",
        track: "people",
        title: "Mentoria técnica no dia a dia",
        outcome: "Ajudar devs a crescerem criando autonomia, não dependência do Will.",
        practice: "Para um dev do time, escrever uma hipótese de crescimento técnico e uma ação prática de mentoria.",
        resources: [
          ["LeadDev, mentorship", "https://leaddev.com/mentoring"],
          ["Atlassian, 1-on-1 meeting", "https://www.atlassian.com/team-playbook/plays/one-on-one"]
        ]
      },
      {
        id: "w10-delegation",
        track: "lead",
        title: "Delegar decisões técnicas com segurança",
        outcome: "Saber quando decidir, quando orientar e quando deixar alguém decidir com apoio.",
        practice: "Listar três decisões que o Will poderia delegar e qual guardrail precisa existir.",
        resources: [
          ["Atlassian DACI decision framework", "https://www.atlassian.com/team-playbook/plays/daci"],
          ["StaffEng, guides", "https://staffeng.com/guides/"]
        ]
      },
      {
        id: "w10-feedback",
        track: "people",
        title: "Feedback técnico direto e humano",
        outcome: "Falar de qualidade, comportamento e entrega com clareza sem gerar defensividade desnecessária.",
        practice: "Escrever um feedback sobre um problema técnico usando fato, impacto, expectativa e próximo passo.",
        resources: [
          ["Radical Candor, feedback framework", "https://www.radicalcandor.com/"],
          ["Google re:Work, manager feedback", "https://rework.withgoogle.com/guides/managers-give-feedback/"]
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
        outcome: "Separar contenção, diagnóstico, correção definitiva e aprendizado pós-incidente.",
        practice: "Criar um template de resposta para urgências com status, hipótese, impacto, ação e próximo update.",
        resources: [
          ["Google SRE Book, handling overload", "https://sre.google/sre-book/handling-overload/"],
          ["Atlassian, incident management", "https://www.atlassian.com/incident-management"]
        ]
      },
      {
        id: "w11-prioritization",
        track: "lead",
        title: "Priorização técnica sob pressão",
        outcome: "Definir o que fazer agora, depois e nunca, com critérios claros.",
        practice: "Avaliar uma fila de problemas usando impacto, urgência, risco, esforço e dependência.",
        resources: [
          ["RICE prioritization, Intercom", "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"],
          ["Atlassian, prioritization matrix", "https://www.atlassian.com/team-playbook/plays/prioritization-matrix"]
        ]
      },
      {
        id: "w11-stakeholders",
        track: "people",
        title: "Comunicação com produto e liderança",
        outcome: "Traduzir impacto técnico em risco de negócio, prazo, qualidade e aprendizado.",
        practice: "Escrever uma mensagem explicando um trade-off técnico para alguém não técnico.",
        resources: [
          ["Google Technical Writing, one course", "https://developers.google.com/tech-writing/one"],
          ["Atlassian, stakeholder communications", "https://www.atlassian.com/work-management/project-management/stakeholder-communication"]
        ]
      },
      {
        id: "w11-no-gargalo",
        track: "people",
        title: "Não virar gargalo do time",
        outcome: "Criar mecanismos para o time resolver mais coisas sem depender sempre do Will.",
        practice: "Listar perguntas recorrentes do time e transformar três delas em guias, checklist ou decisão documentada.",
        resources: [
          ["Google Engineering Practices", "https://google.github.io/eng-practices/"],
          ["Atlassian Team Playbook", "https://www.atlassian.com/team-playbook"]
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
        outcome: "Transformar aprendizados em um guia pessoal de atuação como Lead Engineer.",
        practice: "Montar um documento com princípios, checklists, templates de ADR, review, incidentes e decisões.",
        resources: [
          ["StaffEng, guides", "https://staffeng.com/guides/"],
          ["Google Engineering Practices", "https://google.github.io/eng-practices/"]
        ]
      },
      {
        id: "w12-portfolio-decisions",
        track: "architecture",
        title: "Portfólio de decisões técnicas",
        outcome: "Criar histórico de decisões para mostrar evolução, raciocínio e impacto.",
        practice: "Escolher três decisões das últimas semanas e registrar contexto, decisão, trade-off e resultado esperado.",
        resources: [
          ["MADR, ADR template", "https://adr.github.io/madr/"],
          ["C4 Model", "https://c4model.com/"]
        ]
      },
      {
        id: "w12-growth-plan",
        track: "people",
        title: "Plano de crescimento técnico do time",
        outcome: "Definir como o Will apoiará devs sem centralizar tudo nele.",
        practice: "Criar uma matriz simples de habilidades do time com oportunidades de mentoria, pareamento e ownership.",
        resources: [
          ["LeadDev, technical leadership", "https://leaddev.com/technical-leadership"],
          ["Atlassian, roles and responsibilities", "https://www.atlassian.com/team-playbook/plays/roles-and-responsibilities"]
        ]
      },
      {
        id: "w12-retro",
        track: "quality",
        title: "Retrospectiva da jornada",
        outcome: "Entender o que mudou na forma de pensar, orientar e decidir tecnicamente.",
        practice: "Responder: o que eu fazia reativo demais, o que agora faço com mais método e qual será meu próximo foco técnico.",
        resources: [
          ["Atlassian, retrospectives", "https://www.atlassian.com/team-playbook/plays/retrospective"],
          ["DORA Research", "https://dora.dev/research/"]
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
  return `
    <article class="module-card ${done ? "is-done" : ""}" data-item-id="${module.id}">
      <div class="module-topline">
        <span class="badge">${escapeHTML(track.short)}</span>
        <button class="check-button ${done ? "is-done" : ""}" type="button" title="Marcar estudo" data-action="toggle" data-id="${module.id}">${done ? "✓" : ""}</button>
      </div>
      <h4>${escapeHTML(module.title)}</h4>
      <p>${escapeHTML(module.outcome)}</p>
      <p><strong>Prática:</strong> ${escapeHTML(module.practice)}</p>
      <ul class="resource-list">
        ${module.resources.map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noreferrer noopener">↗ ${escapeHTML(label)}</a></li>`).join("")}
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
    showToast(`Salvo localmente. Nuvem não sincronizou: ${error.message}`);
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
    showToast(`Insight salvo localmente. Nuvem não sincronizou: ${error.message}`);
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
  const text = `Will Tutor\n\n${item.title}\n\nObjetivo: ${item.outcome}\n\nPrática: ${item.practice}\n\nMateriais:\n${item.resources.map(([label, href]) => `- ${label}: ${href}`).join("\n")}`;
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
      els.aiResponse.textContent = `Não consegui chamar o tutor agora. A situação foi salva localmente. Detalhe: ${error.message}`;
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
