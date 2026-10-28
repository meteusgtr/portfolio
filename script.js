/* =========================================================================
   MATHEUS FERNANDES - PORTFOLIO LOGIC & I18N
   Clean, Human, Grounded Translations & Data Previews
   ========================================================================= */

const translations = {
  pt: {
    header_role: "Analista de Dados & BI",
    nav_projects: "Projetos",
    nav_experience: "Experiência",
    nav_skills: "Habilidades",
    nav_about: "Sobre",
    nav_contact: "Contato",

    intro_title: "Analista de Dados & Business Intelligence",
    intro_bio: "Trabalho com modelagem de dados, SQL, Power BI e Microsoft Fabric. Tenho mais de 4 anos de experiência construindo relatórios executivos, automações e pipelines analíticos, com passagens por projetos na Vale, Johnson & Johnson, iFood e O Boticário.",

    heading_projects: "Projetos & Casos Práticos",
    projects_disclaimer: "Por questões de privacidade e sigilo corporativo, os dados exibidos nas demonstrações abaixo foram recriados com bases sintéticas, preservando a lógica técnica e o modelo dimensional aplicados em produção.",

    // P1 Vale
    p1_impact: "~R$ 500.000 de economia anual (2025)",
    p1_title: "Otimização de Licenças Power BI via Auditoria de Logs em Capacidades Premium",
    p1_context_h: "Contexto & Problema",
    p1_context_p: "A empresa mantinha 12 capacidades Premium ativas e arcava simultaneamente com mais de 6.000 licenças pagas do Power BI Pro. Isso gerava um custo recorrente muito elevado. Como os relatórios publicados em workspaces alocados em capacidades Premium não exigem licença Pro para visualização (usuários com licença gratuita podem consumir normalmente), surgiu a oportunidade de reduzir licenças sem prejudicar ninguém.",
    p1_solution_h: "O que eu fiz",
    p1_solution_p: "Usando SQL nos logs de auditoria do tenant, filtrei os usuários que possuíam licença Pro e analisei todo o histórico de atividades. A lógica consistia em identificar quem consumia exclusivamente relatórios em capacidades Premium (evento <code>ViewReport</code>). Se o usuário tivesse realizado qualquer ação que dependesse de Pro (editar relatório, publicar, criar conjunto de dados ou acessar workspace não-premium), ele continuava com a licença Pro. Quem só visualizava relatórios em Premium foi marcado para downgrade (Free).",
    p1_sim_title: "Amostra da Base Analisada (Dados Fictícios)",
    p1_sim_sub: "Simulação demonstrando a lógica de classificação aplicada sobre os usuários",

    // P1 Steps
    p1_steps_title: "Linha de Raciocínio & Etapas de Resolução",
    p1_s1_title: "Identificação do Cenário de Custos",
    p1_s1_desc: "A empresa pagava 12 capacidades Premium e mais de 6.000 licenças Pro, acumulando custos de licenciamento redundantes.",
    p1_s2_title: "A Regra de Negócio (O Insight)",
    p1_s2_desc: "Em relatórios alocados em capacidades Premium, usuários com licença Free podem visualizar dashboards normalmente sem exigir Pro.",
    p1_s3_title: "Auditoria SQL no Histórico de Atividades",
    p1_s3_desc: "Cruzamento dos logs de auditoria (Activity Log) para analisar o tipo de atividade e o local de cada workspace nos últimos 90 dias.",
    p1_s4_title: "Filtro Estrito de Exclusão (HAVING)",
    p1_s4_desc: "Se o usuário fez qualquer ação de edição/criação/publicação ou consumiu dados fora de Premium, ele foi mantido como Pro.",
    p1_s5_title: "Migração Segura & Resultado Real",
    p1_s5_desc: "Geração da lista final auditada para downgrade para licença Free com zero interrupção, economizando cerca de R$ 500.000 para 2025.",

    // P2 Fabric
    p2_impact: "Ambiente com +70.000 usuários",
    p2_title: "Sistema de Monitoramento do Tenant Power BI em Microsoft Fabric (Workspace Monitoring)",
    p2_context_h: "Contexto & Objetivo",
    p2_context_p: "Para viabilizar análises como a de otimização de licenças e ter visibilidade geral da saúde do tenant, criei um workspace chamado <code>Monitoring</code> no Microsoft Fabric. O objetivo era centralizar informações sobre atividades de usuários, inventário de workspaces, capacidades, rotinas de atualização de datasets, dataflows e status de gateways. O conceito foi inspirado no FUAM (Fabric Unified Activity Monitor), mas adaptado de forma direta e simplificada para a necessidade da operação.",
    p2_solution_h: "Arquitetura da Solução",
    p2_solution_p: "Construí notebooks em Python/PySpark no Fabric para fazer as requisições na API REST administrativa do Power BI, lidando com autenticação e paginação de dados. O retorno das APIs é salvo em tabelas Delta dentro de um Lakehouse. Toda a execução dos notebooks foi orquestrada por meio de um Data Pipeline agendado no Fabric, e os dados foram estruturados em um modelo dimensional (esquema estrela) para alimentar os relatórios de governança.",
    p2_sim_title: "Monitoramento de Datasets & Gateways (Simulação de Dados)",
    p2_sim_sub: "Exemplo das informações consolidadas no Lakehouse para acompanhamento de falhas e durações",

    // P2 Steps
    p2_steps_title: "Arquitetura de Dados & Etapas de Construção",
    p2_s1_title: "Mapeamento dos Endpoints das APIs REST",
    p2_s1_desc: "Identificação das APIs administrativas do Power BI: Activity Events, inventário de Workspaces, histórico de Refreshes e Clusters de Gateways.",
    p2_s2_title: "Ingestão via Fabric Notebooks (PySpark)",
    p2_s2_desc: "Construção de rotinas com autenticação via Service Principal (Entra ID) e paginação com continuationToken para carregar lotes de telemetria.",
    p2_s3_title: "Armazenamento Estruturado em Lakehouse Delta",
    p2_s3_desc: "Persistência dos dados brutos em tabelas Delta particionadas no Lakehouse, garantindo histórico perene e consultas de alta performance.",
    p2_s4_title: "Orquestração em Data Pipelines",
    p2_s4_desc: "Agendamento de pipelines no Fabric para rodar os notebooks sequencialmente com tratamento de falhas e alertas.",
    p2_s5_title: "Modelagem Dimensional & Observabilidade",
    p2_s5_desc: "Estruturação de um Star Schema para relatórios no Power BI, dando visibilidade da saúde do tenant para mais de 70.000 usuários ativos.",

    // Filters
    filter_all: "Todos",
    filter_eligible: "Elegíveis (Downgrade)",
    filter_keep: "Manter Pro",
    filter_ok: "Concluídos",
    filter_fail: "Falhas",

    // Secondary Cases
    p3_title: "Sustentação de BI Global & Otimização de Queries no Athena",
    p3_desc: "Manutenção e melhorias em relatórios de Power BI e Tableau para apoiar stakeholders nos Estados Unidos. Otimização e correção de consultas SQL executadas no Amazon Athena para garantir dados corretos e boa performance de carregamento.",
    p4_title: "Pipelines e Dashboards de Performance de Marketing",
    p4_desc: "Extração de dados de Google Ads e Facebook Ads via Supermetrics e Tableau Prep. Construção de dashboards no Power BI e Tableau acompanhando KPIs de mídia (ROAS, conversões, cliques e impressões), com prototipação de telas no Figma.",

    // Timeline
    heading_experience: "Experiência Profissional",
    exp1_role: "Analista de Dados",
    exp1_period: "11/2025 - Presente",
    exp1_b1: "Desenvolvimento de soluções de BI com Power BI e Tableau para tomadas de decisão de stakeholders nos EUA.",
    exp1_b2: "Ajuste e correção de consultas SQL no banco de dados Athena para visualização correta de relatórios.",
    exp1_b3: "Melhoria de layout e usabilidade em dashboards corporativos existentes.",
    exp1_b4: "Atuação em time ágil com entregas contínuas em sprints.",

    exp2_role: "Analista de Dados",
    exp2_b1: "Projeto de otimização de licenças do Power BI que gerou cerca de R$ 500.000 de economia para 2025 através da análise de logs de atividades em capacidades Premium.",
    exp2_b2: "Administração e governança do ambiente Microsoft Fabric com múltiplas capacidades e mais de 70 mil usuários ativos.",
    exp2_b3: "Criação de fluxos no Power Automate para eliminação de tarefas manuais repetitivas.",
    exp2_b4: "Modelagem e implantação de soluções em produção com Power BI, SQL e Azure Analysis Services.",

    exp3_role: "Analista de Dados",
    exp3_b1: "Criação de relatórios e painéis no Power BI para suporte a decisões de negócio e melhoria de processos internos.",
    exp3_b2: "Prototipação de dashboards no Figma para validação prévia de layouts junto aos usuários.",
    exp3_b3: "Pipelines de ETL utilizando Power Query e linguagem M.",
    exp3_b4: "Fluxos automatizados no Power Automate para otimização de rotinas manuais.",

    exp4_role: "Analista de Dados",
    exp4_b1: "Extração e estruturação de dados de campanhas (Google Ads, Facebook Ads) via Supermetrics e Tableau Prep.",
    exp4_b2: "Desenvolvimento de dashboards no Power BI e Tableau acompanhando métricas como impressões, cliques, conversões e ROAS.",
    exp4_b3: "Criação de protótipos de relatórios no Figma para alinhamento de visualização com equipes multidisciplinares.",

    // Skills
    heading_skills: "Habilidades & Formação",
    skills_title: "Competências Técnicas",
    skill_cat1: "BI & Visualização:",
    skill_cat2: "Dados & Bancos:",
    skill_cat3: "Automação & Governança:",
    edu_title: "Educação & Certificados",

    // About
    heading_about: "Sobre",
    about_p1: "Sou analista de dados com mais de 4 anos de atuação em projetos de Business Intelligence, engenharia analítica e governança. Meu trabalho é voltado a entender a necessidade prática do negócio e construir soluções que sejam ao mesmo tempo confiáveis tecnicamente e fáceis de usar pelos tomadores de decisão.",
    about_p2: "Ao longo da minha carreira, trabalhei tanto com construção de pipelines de dados (ETL/ELT no Power Query, Tableau Prep e Fabric PySpark) quanto com modelagem dimensional, DAX, consultas SQL complexas e desenho de interfaces claras no Figma antes da implementação. Tenho experiência com atendimento a stakeholders internacionais e trabalho em times ágeis.",

    // Contact
    contact_title: "Contato",
    contact_desc: "Fique à vontade para me mandar uma mensagem se quiser conversar sobre oportunidades ou detalhes técnicos de algum projeto."
  },

  en: {
    header_role: "Data & BI Analyst",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_about: "About",
    nav_contact: "Contact",

    intro_title: "Data & Business Intelligence Analyst",
    intro_bio: "Working with data modeling, SQL, Power BI, and Microsoft Fabric. Over 4 years of experience building executive dashboards, automations, and analytical pipelines, contributing to projects for clients like Vale, Johnson & Johnson, iFood, and O Boticário.",

    heading_projects: "Projects & Practical Cases",
    projects_disclaimer: "Due to privacy and corporate confidentiality, datasets shown in demonstrations below have been recreated with synthetic mock data while strictly preserving the analytical logic and dimensional models used in production.",

    // P1 Vale
    p1_impact: "~$100,000 / year saved (2025)",
    p1_title: "Power BI License Optimization via Audit Log Telemetry on Premium Capacities",
    p1_context_h: "Context & Problem",
    p1_context_p: "The enterprise operated 12 active Premium capacities while simultaneously maintaining more than 6,000 paid Power BI Pro licenses, resulting in a high recurring cost. Since reports hosted in workspaces on Premium capacities do not require viewers to hold a Pro license (free users can consume them seamlessly), there was a clear opportunity to reduce licensing costs without disrupting users.",
    p1_solution_h: "What I did",
    p1_solution_p: "Using SQL on the tenant's audit activity logs, I filtered all Pro-licensed users and examined their activity history over 90 days. The logic identified users whose activities were exclusively <code>ViewReport</code> on Premium-backed workspaces. If a user performed any action requiring a Pro license (editing, authoring, publishing, or accessing shared non-premium workspaces), they retained Pro. Users who strictly viewed reports on Premium were flagged for downgrade to Free.",
    p1_sim_title: "Sample Analyzed Dataset (Mock Data)",
    p1_sim_sub: "Simulation illustrating the classification logic applied across user accounts",

    // P1 Steps
    p1_steps_title: "Problem Solving & Analytical Steps",
    p1_s1_title: "Cost Baseline Identification",
    p1_s1_desc: "The organization funded 12 dedicated Premium capacities and 6,000+ Pro licenses, generating redundant recurring overhead.",
    p1_s2_title: "Architectural Rule (The Core Insight)",
    p1_s2_desc: "In workspaces hosted on Premium capacities, users with a Free license can view and interact with reports without needing Pro.",
    p1_s3_title: "SQL Telemetry Audit Across Tenant Logs",
    p1_s3_desc: "Queried the Unified Activity Logs to inspect 90 days of user actions, workspace placement, and activity types.",
    p1_s4_title: "Strict Exclusion Filter (HAVING Clause)",
    p1_s4_desc: "Any user who authored, published, created datasets, or accessed non-premium workspaces retained Pro status.",
    p1_s5_title: "Safe Downgrade & Verified Impact",
    p1_s5_desc: "Generated the verified list of safe downgrades to Free with zero workflow disruption, yielding ~R$ 500k in annual renewal savings.",

    // P2 Fabric
    p2_impact: "Environment with 70,000+ users",
    p2_title: "Power BI Tenant Monitoring System in Microsoft Fabric (Monitoring Workspace)",
    p2_context_h: "Context & Goal",
    p2_context_p: "To enable analyses like the license audit and maintain broad visibility into tenant health, I set up a dedicated workspace named <code>Monitoring</code> in Microsoft Fabric. The goal was to centralize data regarding user activity, workspace inventory, capacities, dataset refresh schedules, dataflows, and gateway statuses. Inspired by the concept of FUAM (Fabric Unified Activity Monitor), it was adapted in a straightforward and practical manner for day-to-day operations.",
    p2_solution_h: "Solution Architecture",
    p2_solution_p: "I developed Python/PySpark notebooks in Fabric to query the Power BI Admin REST APIs, handling token refresh and pagination. API payloads were stored into Lakehouse Delta tables. Execution was orchestrated on schedule via Fabric Data Pipelines, and data was modeled into a Star Schema to feed internal governance dashboards.",
    p2_sim_title: "Dataset & Gateway Monitoring (Mock Data)",
    p2_sim_sub: "Sample data consolidated in the Lakehouse to track refresh failures and runtimes",

    // P2 Steps
    p2_steps_title: "Data Architecture & Implementation Pipeline",
    p2_s1_title: "Admin REST Endpoints Mapping",
    p2_s1_desc: "Identified relevant Power BI Admin APIs: Activity Events, Workspaces inventory, Refresh history, and Gateway clusters.",
    p2_s2_title: "Ingestion via Fabric Notebooks (PySpark)",
    p2_s2_desc: "Engineered extraction routines with Entra ID Service Principal authentication and continuationToken pagination.",
    p2_s3_title: "Structured Delta Lakehouse Storage",
    p2_s3_desc: "Persisted normalized data into partitioned Delta tables, enabling durable retention and high-speed analytical queries.",
    p2_s4_title: "Orchestration with Data Pipelines",
    p2_s4_desc: "Scheduled sequential notebook execution in Fabric pipelines with automatic exception handling and alerts.",
    p2_s5_title: "Dimensional Modeling & Tenant Observability",
    p2_s5_desc: "Engineered a Star Schema linking activity and refresh facts to dimensions, providing operational governance for 70,000+ users.",

    // Filters
    filter_all: "All",
    filter_eligible: "Eligible (Downgrade)",
    filter_keep: "Keep Pro",
    filter_ok: "Completed",
    filter_fail: "Failures",

    // Secondary Cases
    p3_title: "Global BI Support & Amazon Athena Query Optimization",
    p3_desc: "Maintained and enhanced Power BI and Tableau reports supporting US stakeholders. Debugged and tuned SQL queries in Amazon Athena to ensure correct visualization and low latency across S3 data lakes.",
    p4_title: "Marketing Performance Pipelines & Dashboards",
    p4_desc: "Ingested Google Ads and Facebook Ads data using Supermetrics and Tableau Prep. Built Power BI and Tableau dashboards tracking performance metrics (ROAS, conversions, clicks, and impressions), with wireframes designed in Figma.",

    // Timeline
    heading_experience: "Professional Experience",
    exp1_role: "Data Analyst",
    exp1_period: "11/2025 - Present",
    exp1_b1: "Developed BI solutions with Power BI and Tableau to support data-driven decision making for US stakeholders.",
    exp1_b2: "Refactored SQL queries in Amazon Athena to ensure query accuracy and dashboard performance.",
    exp1_b3: "Enhanced usability and layout standards across existing enterprise reports.",
    exp1_b4: "Collaborated in an agile scrum team delivering iterative sprint commitments.",

    exp2_role: "Data Analyst",
    exp2_b1: "Led the Power BI license optimization initiative that saved ~R$ 500,000 for 2025 through SQL analysis of user activity logs on Premium capacities.",
    exp2_b2: "Governed Microsoft Fabric tenant environment supporting multiple capacities and over 70,000 active users.",
    exp2_b3: "Created automated Power Automate flows to eliminate repetitive manual operational tasks.",
    exp2_b4: "Modeled and deployed scalable production semantic layers using Power BI, SQL, and Azure Analysis Services.",

    exp3_role: "Data Analyst",
    exp3_b1: "Built operational and executive Power BI dashboards to streamline business processes and leadership visibility.",
    exp3_b2: "Prototyped dashboard interfaces in Figma for stakeholder design validation prior to development.",
    exp3_b3: "Engineered scalable ETL pipelines using Power Query and M code.",
    exp3_b4: "Automated manual data handoffs using Power Automate flows.",

    exp4_role: "Data Analyst",
    exp4_b1: "Extracted and structured advertising campaign data (Google Ads, Facebook Ads) via Supermetrics and Tableau Prep.",
    exp4_b2: "Developed Power BI and Tableau dashboards monitoring impressions, clicks, conversions, and ROAS.",
    exp4_b3: "Designed report wireframes in Figma to align visual hierarchy with cross-functional marketing teams.",

    // Skills
    heading_skills: "Skills & Education",
    skills_title: "Technical Skills",
    skill_cat1: "BI & Visualization:",
    skill_cat2: "Data & Databases:",
    skill_cat3: "Automation & Governance:",
    edu_title: "Education & Certifications",

    // About
    heading_about: "About",
    about_p1: "I am a Data Analyst with over 4 years of experience working across Business Intelligence, analytics engineering, and data governance. My approach is grounded in understanding business needs and delivering solutions that are technically robust and easy for decision-makers to use.",
    about_p2: "Throughout my career, I have worked across data pipelines (ETL/ELT in Power Query, Tableau Prep, and Fabric PySpark), dimensional modeling, DAX, advanced SQL, and interface prototyping in Figma. I also have solid experience working with international stakeholders in agile environments.",

    // Contact
    contact_title: "Contact",
    contact_desc: "Feel free to reach out via email or LinkedIn if you want to discuss opportunities or technical details about any project."
  }
};

// --- DATASETS ---

const p1Users = [
  {
    email: "operacao.porto.01@vale-simulated.com",
    dept: "Logística Portuária",
    dept_en: "Port Logistics",
    license: "Power BI Pro",
    views: 142,
    proActions: 0,
    status: "eligible",
    note_pt: "100% de acessos como ViewReport em Premium",
    note_en: "100% ViewReport on Premium"
  },
  {
    email: "eng.ferrovia.abc@vale-simulated.com",
    dept: "Engenharia Ferroviária",
    dept_en: "Railway Engineering",
    license: "Power BI Pro",
    views: 89,
    proActions: 0,
    status: "eligible",
    note_pt: "Consumo exclusivo de relatórios em Premium",
    note_en: "Read-only access in Premium"
  },
  {
    email: "analista.bi.senior@vale-simulated.com",
    dept: "Centro de Excelência BI",
    dept_en: "BI Center of Excellence",
    license: "Power BI Pro",
    views: 310,
    proActions: 45,
    status: "keep",
    note_pt: "Publicou relatórios e editou modelos (Requer Pro)",
    note_en: "Published reports & edited datasets (Requires Pro)"
  },
  {
    email: "coordenador.minas@vale-simulated.com",
    dept: "Operações de Mina",
    dept_en: "Mining Operations",
    license: "Power BI Pro",
    views: 64,
    proActions: 0,
    status: "eligible",
    note_pt: "Apenas visualiza painéis operacionais",
    note_en: "Only views operational dashboards"
  },
  {
    email: "supervisor.rh@vale-simulated.com",
    dept: "Recursos Humanos",
    dept_en: "Human Resources",
    license: "Power BI Pro",
    views: 18,
    proActions: 6,
    status: "keep",
    note_pt: "Acessou workspace pessoal não-premium",
    note_en: "Accessed non-premium personal workspace"
  },
  {
    email: "diretoria.executiva@vale-simulated.com",
    dept: "Diretoria",
    dept_en: "Executive Board",
    license: "Power BI Pro",
    views: 52,
    proActions: 0,
    status: "eligible",
    note_pt: "Apenas consumo de relatórios da diretoria",
    note_en: "Executive report viewer only"
  },
  {
    email: "seguranca.trabalho@vale-simulated.com",
    dept: "SSMA (Segurança)",
    dept_en: "Safety (HSE)",
    license: "Power BI Pro",
    views: 115,
    proActions: 0,
    status: "eligible",
    note_pt: "Visualizador de indicadores em capacidade P-SKU",
    note_en: "Safety KPI viewer on P-SKU"
  },
  {
    email: "suprimentos.compras@vale-simulated.com",
    dept: "Suprimentos",
    dept_en: "Procurement",
    license: "Power BI Pro",
    views: 73,
    proActions: 0,
    status: "eligible",
    note_pt: "Visualização diária de relatórios de compras",
    note_en: "Daily spend dashboard viewer"
  }
];

const p2Refreshes = [
  {
    name: "Dataset_Vendas_Corporativo",
    workspace: "Comercial Executivo (P-SKU)",
    start: "06:00",
    duration: "14 min",
    gateway: "GW-Enterprise-BR01",
    status: "Completed",
    action_pt: "Atualizado normalmente",
    action_en: "Completed successfully"
  },
  {
    name: "Dataset_Operacoes_Ferrovia",
    workspace: "Logística (Fabric F64)",
    start: "06:15",
    duration: "28 min",
    gateway: "GW-Enterprise-BR02",
    status: "Completed",
    action_pt: "Carga incremental concluída",
    action_en: "Incremental refresh completed"
  },
  {
    name: "Dataset_Manutencao_Mina",
    workspace: "Ativos & Mina (P-SKU)",
    start: "06:30",
    duration: "45 min",
    gateway: "GW-Enterprise-BR01",
    status: "Failed",
    action_pt: "Timeout SQL — alerta enviado ao time",
    action_en: "SQL Timeout — alert sent to team"
  },
  {
    name: "Dataset_Financeiro_Controladoria",
    workspace: "Controladoria (Fabric F64)",
    start: "07:00",
    duration: "08 min",
    gateway: "GW-Enterprise-BR03",
    status: "Completed",
    action_pt: "Atualizado normalmente",
    action_en: "Completed successfully"
  },
  {
    name: "Dataset_Suprimentos_Compras",
    workspace: "Suprimentos (P-SKU)",
    start: "07:30",
    duration: "19 min",
    gateway: "GW-Enterprise-BR01",
    status: "Failed",
    action_pt: "Credencial expirada — notificado owner",
    action_en: "Expired credential — owner notified"
  },
  {
    name: "Dataset_Auditoria_Licencas",
    workspace: "Monitoring (Fabric P-SKU)",
    start: "04:00",
    duration: "22 min",
    gateway: "API Rest Fabric Link",
    status: "Completed",
    action_pt: "Origem dos dados do case de licenças",
    action_en: "Source data for licensing case"
  }
];

// --- APP STATE ---
let currentLang = 'pt';
let p1Filter = 'all';
let p2Filter = 'all';

function initLanguage() {
  const stored = localStorage.getItem('mf_lang_pref');
  if (stored && (stored === 'pt' || stored === 'en')) {
    currentLang = stored;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
    currentLang = browserLang.startsWith('pt') ? 'pt' : 'en';
  }
  applyTranslations();
  updateLangButton();
}

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('mf_lang_pref', currentLang);
  applyTranslations();
  updateLangButton();
  renderP1Table();
  renderP2Table();
}

function updateLangButton() {
  const flagEl = document.getElementById('langFlag');
  const labelEl = document.getElementById('langLabel');
  if (currentLang === 'pt') {
    flagEl.textContent = '🇧🇷';
    labelEl.textContent = 'PT';
  } else {
    flagEl.textContent = '🇺🇸';
    labelEl.textContent = 'EN';
  }
}

function applyTranslations() {
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en-US';
  const dict = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

// Render P1 table
function renderP1Table() {
  const tbody = document.getElementById('p1Tbody');
  if (!tbody) return;

  const filtered = p1Users.filter(u => {
    if (p1Filter === 'all') return true;
    return u.status === p1Filter;
  });

  tbody.innerHTML = filtered.map(u => {
    const isEligible = u.status === 'eligible';
    const dept = currentLang === 'pt' ? u.dept : u.dept_en;
    const note = currentLang === 'pt' ? u.note_pt : u.note_en;

    const tag = isEligible
      ? `<span class="status-tag tag-ok">${currentLang === 'pt' ? 'Elegível para Free' : 'Eligible for Free'}</span>`
      : `<span class="status-tag tag-keep">${currentLang === 'pt' ? 'Manter Pro' : 'Keep Pro'}</span>`;

    return `
      <tr>
        <td>
          <div class="user-email-col">${u.email}</div>
          <div class="user-reason">${note}</div>
        </td>
        <td>${dept}</td>
        <td><span style="font-family: var(--font-mono); font-size: 0.78rem;">${u.license}</span></td>
        <td class="text-right" style="font-family: var(--font-mono); font-weight: 600;">${u.views}</td>
        <td class="text-right" style="font-family: var(--font-mono); color: ${u.proActions > 0 ? '#d29922' : 'inherit'};">${u.proActions}</td>
        <td>${tag}</td>
      </tr>
    `;
  }).join('');
}

// Render P2 table
function renderP2Table() {
  const tbody = document.getElementById('p2Tbody');
  if (!tbody) return;

  const filtered = p2Refreshes.filter(r => {
    if (p2Filter === 'all') return true;
    return r.status === p2Filter;
  });

  tbody.innerHTML = filtered.map(r => {
    const isOk = r.status === 'Completed';
    const action = currentLang === 'pt' ? r.action_pt : r.action_en;

    const tag = isOk
      ? `<span class="status-tag tag-ok">${currentLang === 'pt' ? 'Concluído' : 'Completed'}</span>`
      : `<span class="status-tag tag-fail">${currentLang === 'pt' ? 'Falha' : 'Failed'}</span>`;

    return `
      <tr>
        <td><code style="font-size: 0.8rem;">${r.name}</code></td>
        <td style="font-size: 0.8rem; color: var(--text-muted);">${r.workspace}</td>
        <td style="font-family: var(--font-mono); font-size: 0.8rem;">${r.start}</td>
        <td style="font-family: var(--font-mono); font-size: 0.8rem;">${r.duration}</td>
        <td><span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted);">${r.gateway}</span></td>
        <td>${tag}</td>
        <td style="font-size: 0.8rem;">${action}</td>
      </tr>
    `;
  }).join('');
}

// Setup Filters
function setupFilters() {
  document.querySelectorAll('[data-p1-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-p1-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      p1Filter = btn.getAttribute('data-p1-filter');
      renderP1Table();
    });
  });

  document.querySelectorAll('[data-p2-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-p2-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      p2Filter = btn.getAttribute('data-p2-filter');
      renderP2Table();
    });
  });
}

// Setup Copy Buttons
function setupCopyButtons() {
  const sqlBtn = document.getElementById('copySqlBtn');
  if (sqlBtn) {
    sqlBtn.addEventListener('click', () => {
      const code = sqlBtn.closest('.code-box').querySelector('pre code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        sqlBtn.innerText = currentLang === 'pt' ? 'Copiado!' : 'Copied!';
        setTimeout(() => { sqlBtn.innerText = currentLang === 'pt' ? 'Copiar' : 'Copy'; }, 2000);
      });
    });
  }

  const pyBtn = document.getElementById('copyPyBtn');
  if (pyBtn) {
    pyBtn.addEventListener('click', () => {
      const code = pyBtn.closest('.code-box').querySelector('pre code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        pyBtn.innerText = currentLang === 'pt' ? 'Copiado!' : 'Copied!';
        setTimeout(() => { pyBtn.innerText = currentLang === 'pt' ? 'Copiar' : 'Copy'; }, 2000);
      });
    });
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initLanguage();
  setupFilters();
  setupCopyButtons();
  renderP1Table();
  renderP2Table();

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
});
