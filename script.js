/* =========================================================================
   MATHEUS FERNANDES - DATA & BI PORTFOLIO
   Interactive Engine, i18n Translation & Synthetic Data Simulator
   ========================================================================= */

// --- 1. TRANSLATION DICTIONARY (PT-BR / EN-US) ---
const translations = {
  pt: {
    // Nav
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_projects: "Projetos & Cases",
    nav_experience: "Experiência",
    nav_contact: "Contato",
    cta_contact: "Falar Comigo",

    // Hero
    hero_pill: "Disponível para novos desafios em Dados & BI",
    hero_greeting: "Olá, eu sou",
    hero_role: "Analista de Dados & Business Intelligence | Especialista em Governança, Power BI, SQL & Microsoft Fabric",
    hero_bio: "Transformo dados complexos em eficiência financeira e decisões de alto impacto. +4 anos de experiência atendendo grandes contas corporativas como <strong>VALE</strong>, <strong>Johnson & Johnson</strong>, <strong>iFood</strong> e <strong>O Boticário</strong>. Economia comprovada de mais de <strong>R$ 500 mil/ano</strong> em infraestrutura de dados e governança de capacidades com +70 mil usuários.",
    stat_savings: "Economia Anual em Otimização de Custos",
    stat_users: "Usuários Ativos em Ambientes Gerenciados",
    stat_exp: "Experiência com BI, ETL & Data Pipelines",
    stat_capacities: "Capacidades Premium Monitoradas",
    hero_btn_cases: "Explorar Cases & Simulações",

    // About
    about_badge: "Sobre Mim",
    about_title: "Engenharia de Análise com Foco no Negócio",
    about_subtitle: "Unindo modelagem dimensional, governança e mentalidade analítica para gerar ROI real em dados corporativos.",
    about_col1_title: "Governança & FinOps de BI",
    about_col1_desc: "Auditoria profunda de logs de atividade (Activity Log / Unified Audit Log), mapeamento de consumo de licenças e alocação estratégica de recursos em Microsoft Fabric e Power BI Premium para cortar custos sem degradar a experiência.",
    about_col2_title: "SQL Avançado & Pipelines ETL",
    about_col2_desc: "Consultas otimizadas, agregação analítica com HAVING/Window Functions, modelagem Star Schema em SQL Server, Azure Analysis Services, Athena e Databricks para ingestão e transformação de alta performance.",
    about_col3_title: "Dashboards no Figma & Power BI",
    about_col3_desc: "Criação de interfaces orientadas ao usuário (UX/UI para Analytics) prototipadas no Figma e implementadas no Power BI com DAX robusto, garantindo que stakeholders tomem decisões claras em segundos.",

    // Skills
    skills_badge: "Stack Técnica",
    skills_title: "Tecnologias & Ferramentas",
    skill_group_bi: "Business Intelligence & Visualização",
    skill_group_data: "Bancos de Dados & Engenharia",
    skill_group_auto: "Automação & Governança",

    // Projects Header
    projects_badge: "Portfólio de Cases",
    projects_title: "Projetos em Destaque & Simulações Interativas",
    projects_subtitle: "Por motivos de conformidade e sigilo corporativo (LGPD/NDAs), os dados reais foram anonimizados e recriados em uma simulação interativa que preserva fielmente a lógica analítica e arquitetural aplicada.",

    // Case 1: VALE
    case1_tag_impact: "Economia: R$ 500.000 / ano",
    case1_title: "Otimização Inteligente de Licenças Power BI via Auditoria de Logs em Capacidades Premium",
    case1_summary: "Auditoria avançada de telemetria sobre mais de 6.000 licenças pagas e 12 capacidades Premium, identificando padrões estritos de consumo para realizar downgrades seguros (Pro para Free) com zero interrupção operacional.",
    case1_p1_title: "1. O Desafio de Custos",
    case1_p1_desc: "A organização mantinha 12 capacidades Premium dedicadas e arcava simultaneamente com <strong>+6.000 licenças Pro ativas</strong>. Isso gerava um custo de licenciamento anual exorbitante e redundante.",
    case1_p2_title: "2. A Regra Arquitetural",
    case1_p2_desc: "Em workspaces hospedados em <strong>Capacidades Premium</strong>, consumidores de relatórios <strong>não precisam de licença Pro</strong>; uma licença Free (gratuita) é suficiente para visualizar e interagir com relatórios.",
    case1_p3_title: "3. O Critério Estrito (SQL)",
    case1_p3_desc: "Um usuário só era elegível se <strong>100%</strong> das suas atividades fossem <code>ViewReport</code> dentro de capacidades Premium. Qualquer atividade de edição, criação ou acesso a workspace compartilhado mantinha o usuário como Pro.",
    tab_sql: "Lógica da Consulta SQL",
    tab_arch: "Fluxo de Tomada de Decisão",
    badge_validated: "Lógica Validada em Produção",

    // Case 2: Microsoft Fabric Monitoring & Governance
    case2_tag_impact: "Governança Centralizada (+70k Usuários)",
    case2_title: "Sistema de Telemetria e Governança do Tenant Power BI em Microsoft Fabric",
    case2_summary: "Desenvolvimento de uma solução completa de auditoria e observabilidade empresarial no Microsoft Fabric (workspace 'Monitoring'), inspirada conceitualmente em ferramentas como o <strong>FUAM (Fabric Unified Activity Monitor)</strong>, porém simplificada e sob medida. Extração automatizada via REST APIs com Fabric Notebooks (PySpark), armazenamento em Lakehouse Delta, orquestração com Data Pipelines e modelagem dimensional.",
    case2_p1_title: "1. Observabilidade do Tenant",
    case2_p1_desc: "Com dezenas de capacidades e milhares de artefatos distribuídos, a gestão do tenant demandava visibilidade centralizada sobre <strong>atividades de usuários, rotinas de refresh, dataflows e status de gateways</strong>.",
    case2_p2_title: "2. Fabric Notebooks & APIs",
    case2_p2_desc: "Desenvolvimento de scripts Python/PySpark em <strong>Fabric Notebooks</strong> com paginação e autenticação OAuth2 para extrair dados brutos das Power BI Admin REST APIs e persistir em tabelas Delta no Lakehouse.",
    case2_p3_title: "3. Orquestração & Modelagem",
    case2_p3_desc: "Orquestração agendada via <strong>Fabric Data Pipelines</strong> alimentando um <strong>Star Schema</strong> (fatos de atividades e histórico de refreshes conectadas a dimensões) para relatórios no Power BI.",
    tab_pyspark: "Fabric Notebook (PySpark)",
    tab_fabric_arch: "Arquitetura Lakehouse & Pipeline",
    tab_model: "Modelagem Dimensional (Star Schema)",
    badge_fabric_active: "Pipeline em Produção",

    // Case 2 Simulation
    sim2_title: "Painel de Observabilidade do Tenant (Simulado)",
    sim2_desc: "Simulação dos dados consolidados no Lakehouse de monitoramento: acompanhe o status de atualização de datasets críticos, telemetria de gateways e volume de atividades diárias.",
    sim2_filter_all: "Todos os Datasets (8)",
    sim2_filter_ok: "✅ Sucesso (6)",
    sim2_filter_fail: "⚠️ Falhas (2)",
    t_kpi_events: "Eventos Registrados (Hoje):",
    t_kpi_rate: "Taxa de Sucesso de Refresh:",
    t_kpi_gateways: "Gateways Online:",
    t_kpi_lakehouse: "Armazenamento Lakehouse:",
    th2_dataset: "Conjunto de Dados (Dataset)",
    th2_workspace: "Workspace / Capacidade",
    th2_start: "Início da Rotina",
    th2_duration: "Duração",
    th2_gateway: "Cluster de Gateway",
    th2_status: "Status",
    th2_action: "Ação Automatizada",
    sim2_stat_impact: "Orquestrador:",
    sim2_stat_result: "Benefício de Negócio:",

    // FinOps Calculator
    calc_badge: "Ferramenta Interativa FinOps",
    calc_title: "Simulador de Economia de Licenças Power BI",
    calc_subtitle: "Veja o impacto financeiro potencial que a mesma metodologia aplicada na VALE pode gerar na sua organização.",
    calc_label_licenses: "Quantidade de Licenças Pro Atuais:",
    calc_label_viewers: "% Estimada de Usuários Apenas Visualizadores (em Premium):",
    calc_note_text: "Considera o custo de licença Power BI Pro (~US$ 10 - US$ 14 / mês / usuário) convertido com base nas regras de elegibilidade da capacidade Premium.",
    calc_res_users: "Usuários Convertíveis para Licença Free:",
    calc_res_savings_brl: "Economia Anual Estimada (BRL):",
    calc_cta: "Avaliar Potencial da Minha Empresa",

    // Case 3: Zygon Marketing
    case3_title: "Pipelines de Performance & Dashboards de Mídia Multicanal (ROAS / CPA)",
    case3_desc: "Extração automatizada de Google Ads e Facebook Ads via Supermetrics e Tableau Prep. Criação de modelos dimensionais e dashboards no Figma & Power BI monitorando funil completo de conversão, ROAS e custo de aquisição.",
    case3_kpi1: "Fontes & Canais Consolidados",
    case3_kpi2: "Figma Data UX/UI",

    // Case 4: Accenture / J&J
    case4_title: "Otimização de Consultas SQL no Amazon Athena & Governança de Dashboards",
    case4_desc: "Sustentação e evolução de soluções analíticas internacionais com Power BI e Tableau. Resolução de gargalos de performance e integridade em consultas SQL sobre o data lake em Amazon Athena com entrega ágil em Scrum.",
    case4_kpi1: "Athena & S3 Parquet",
    case4_kpi2: "Sprints Internacionais",

    // Simulation
    sim_title: "Simulação Interativa de Dados Sintéticos",
    sim_desc: "Teste a lógica de auditoria em tempo real com este dataset representativo (10 exemplos simulados). Clique nos filtros para verificar a classificação automática.",
    sim_filter_all: "Todos (10)",
    sim_filter_eligible: "✅ Elegíveis para Free",
    sim_filter_keep: "🔒 Manter Licença Pro",
    th_user: "Usuário Simulado",
    th_dept: "Departamento",
    th_license: "Licença Atual",
    th_views: "Visualizações (Premium)",
    th_pro_actions: "Ações de Pro / Não-Premium",
    th_status: "Decisão Algorítmica",
    th_savings: "Impacto Financeiro",
    sim_stat_pot: "Economia Estimada por Usuário Convertido:",
    sim_stat_result: "Impacto Consolidado no Contrato:",

    // Next Projects
    next_proj_title: "Mais Cases e Projetos em Produção",
    next_proj_desc: "Novos cases de pipelines ETL com Tableau Prep, integrações na nuvem AWS Athena, Dashboards no Figma para grandes players (Johnson & Johnson, iFood, O Boticário) e automações com Power Automate sendo catalogados.",
    next_proj_btn: "Solicitar Apresentação Técnica",

    // Experience
    exp_badge: "Trajetória",
    exp_title: "Experiência Profissional",
    exp1_role: "Analista de Dados",
    exp1_period: "11/2025 - Presente",
    exp1_b1: "Desenvolvimento de soluções de Business Intelligence com Power BI e Tableau para apoiar stakeholders globais em tomadas de decisão estratégicas.",
    exp1_b2: "Otimização e depuração de consultas SQL no Amazon Athena, garantindo integridade e conformidade de visualização de dados.",
    exp1_b3: "Refinamento de arquitetura de layouts e experiência do usuário (UX) em dashboards corporativos.",
    exp1_b4: "Atuação ágil em sprints contínuos, assegurando entregas iterativas de alto valor.",

    exp2_role: "Analista de Dados",
    exp2_period: "10/2023 - 10/2025",
    exp2_b1: "Liderança do projeto de otimização de licenças Power BI que economizou cerca de R$ 500.000 em 2025 através de auditoria SQL de atividades em capacidades Premium.",
    exp2_b2: "Gestão e governança de ambiente Microsoft Fabric, suportando múltiplas capacidades premium com mais de 70.000 usuários ativos.",
    exp2_b3: "Desenvolvimento de fluxos automatizados com Power Automate, eliminando processos e intervenções manuais repetitivas.",
    exp2_b4: "Implantação de modelos semânticos escaláveis em produção aplicando as melhores práticas de Azure Analysis Services, Power BI e SQL.",

    exp3_role: "Analista de Dados",
    exp3_period: "08/2022 - 07/2023",
    exp3_b1: "Construção de soluções analíticas em Power BI voltadas para aumento de eficiência operacional e identificação de gargalos.",
    exp3_b2: "Prototipagem de dashboards no Figma focados em usabilidade e redução de ruído visual.",
    exp3_b3: "Pipelines de ingestão e transformação ETL escaláveis com Power Query e linguagem M.",
    exp3_b4: "Automações com Power Automate reduzindo trabalho manual nas rotinas de dados da operação.",

    exp4_role: "Analista de Dados (Marketing Analytics)",
    exp4_period: "12/2021 - 08/2022",
    exp4_b1: "Extração e pipelines de dados de mídias de performance (Google Ads, Facebook Ads) via Supermetrics e Tableau Prep.",
    exp4_b2: "Criação de dashboards em Power BI e Tableau monitorando KPIs críticos: ROAS, CPA, CAC, impressões, cliques e conversões.",
    exp4_b3: "Colaboração com times multifuncionais na criação de protótipos de visualização de dados no Figma, traduzindo métricas complexas em painéis intuitivos.",

    // Education
    edu_badge: "Formação & Certificações",
    edu_title: "Educação Contínua",
    edu_degree: "Graduação em Sistemas de Informação",
    edu_desc: "Ênfase em arquitetura de dados, modelagem de banco de dados e Python para análise de dados.",
    cert_title: "Certificações de Mercado",

    // Contact
    contact_badge: "Vamos Conversar",
    contact_title: "Pronto para gerar valor através dos dados da sua empresa?",
    contact_subtitle: "Disponível para posições remotas, consultoria em Governança/FinOps de BI, arquitetura no Microsoft Fabric e desenvolvimento de dashboards de alta performance.",
    contact_loc_label: "Localização",
    footer_copy: "Construído com foco em alta performance e arquitetura de dados limpa."
  },

  en: {
    // Nav
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects & Cases",
    nav_experience: "Experience",
    nav_contact: "Contact",
    cta_contact: "Get in Touch",

    // Hero
    hero_pill: "Available for new Data & BI challenges",
    hero_greeting: "Hello, I am",
    hero_role: "Data & Business Intelligence Analyst | Governance, Power BI, SQL & Microsoft Fabric Specialist",
    hero_bio: "Transforming complex enterprise data into financial efficiency and high-impact decisions. Over 4 years of experience serving Fortune 500 & enterprise accounts such as <strong>VALE</strong>, <strong>Johnson & Johnson</strong>, <strong>iFood</strong>, and <strong>O Boticário</strong>. Proven track record saving over <strong>$100,000+ (R$ 500k)/year</strong> in BI infrastructure and managing Fabric environments for 70k+ users.",
    stat_savings: "Annual Savings from Cost Optimization",
    stat_users: "Active Users in Managed Capacities",
    stat_exp: "Years in BI, ETL & Data Pipelines",
    stat_capacities: "Monitored Premium Capacities",
    hero_btn_cases: "Explore Cases & Simulations",

    // About
    about_badge: "About Me",
    about_title: "Analytics Engineering with Business ROI Focus",
    about_subtitle: "Combining dimensional modeling, data governance, and an analytical mindset to drive real financial return from corporate data.",
    about_col1_title: "BI Governance & FinOps",
    about_col1_desc: "Deep activity telemetry audit (Unified Audit Log), license consumption analysis, and capacity resource planning across Microsoft Fabric & Power BI Premium to eliminate waste without affecting end-user workflows.",
    about_col2_title: "Advanced SQL & ETL Pipelines",
    about_col2_desc: "Query optimization, analytical aggregations with conditional HAVING clauses and window functions, Star Schema design in SQL Server, Azure Analysis Services, Athena, and Databricks.",
    about_col3_title: "Figma Prototyping & Power BI",
    about_col3_desc: "Designing executive UX/UI analytics layouts in Figma and deploying them into Power BI with optimized DAX, allowing leadership to make decisions in seconds.",

    // Skills
    skills_badge: "Technical Stack",
    skills_title: "Technologies & Tooling",
    skill_group_bi: "Business Intelligence & Visualization",
    skill_group_data: "Databases & Data Engineering",
    skill_group_auto: "Automation & Governance",

    // Projects Header
    projects_badge: "Case Portfolio",
    projects_title: "Featured Case Studies & Interactive Simulations",
    projects_subtitle: "Due to corporate confidentiality and NDAs, proprietary data has been anonymized and rebuilt into an interactive simulation faithfully replicating the actual analytical logic applied.",

    // Case 1: VALE
    case1_tag_impact: "Savings: ~$100,000 / year (R$ 500k)",
    case1_title: "Power BI License Optimization via Telemetry Audit on Premium Capacities",
    case1_summary: "Advanced audit over 6,000+ paid licenses and 12 dedicated Premium Capacities, isolating strict read-only consumption patterns to safely downgrade licenses (Pro to Free) with zero operational impact.",
    case1_p1_title: "1. The Cost Challenge",
    case1_p1_desc: "The enterprise paid for 12 dedicated Premium Capacities while simultaneously funding <strong>6,000+ active Pro licenses</strong>, resulting in substantial recurring OPEX redundancy.",
    case1_p2_title: "2. Architectural Rule",
    case1_p2_desc: "In workspaces backed by <strong>Premium Capacities</strong>, consumers <strong>do not require a Pro license</strong>; a Free license is fully sufficient to view and interact with reports.",
    case1_p3_title: "3. Strict SQL Criteria",
    case1_p3_desc: "A user qualified for downgrade only if <strong>100%</strong> of their activities were <code>ViewReport</code> on Premium capacities. Any authoring, publishing, or non-premium workspace usage retained their Pro status.",
    tab_sql: "SQL Query Logic",
    tab_arch: "Decision Pipeline",
    badge_validated: "Production-Validated Logic",

    // Case 2: Microsoft Fabric Monitoring & Governance
    case2_tag_impact: "Centralized Governance (70k+ Users)",
    case2_title: "Power BI Tenant Telemetry & Governance Architecture in Microsoft Fabric",
    case2_summary: "Enterprise-grade observability and auditing solution in Microsoft Fabric ('Monitoring' workspace), conceptually inspired by community standards like <strong>FUAM (Fabric Unified Activity Monitor)</strong> in a simplified, custom architecture. Automated ingestion via REST APIs using Fabric Notebooks (PySpark), Delta Lakehouse storage, Data Pipeline orchestration, and dimensional Star Schema modeling.",
    case2_p1_title: "1. Tenant Observability",
    case2_p1_desc: "Across multiple capacities and thousands of artifacts, governance required unified visibility over <strong>user activities, dataset refresh schedules, dataflows, and on-premises gateway clusters</strong>.",
    case2_p2_title: "2. Fabric Notebooks & APIs",
    case2_p2_desc: "Engineered Python/PySpark scripts in <strong>Fabric Notebooks</strong> handling API token refresh and pagination to extract telemetry from Power BI Admin REST APIs directly into Lakehouse Delta tables.",
    case2_p3_title: "3. Orchestration & Modeling",
    case2_p3_desc: "Scheduled orchestration with <strong>Fabric Data Pipelines</strong> updating a dimensional <strong>Star Schema</strong> (activity events and refresh history facts linked to workspaces and gateway dimensions).",
    tab_pyspark: "Fabric Notebook (PySpark)",
    tab_fabric_arch: "Lakehouse & Pipeline Flow",
    tab_model: "Dimensional Star Schema",
    badge_fabric_active: "Production Pipeline",

    // Case 2 Simulation
    sim2_title: "Tenant Observability Dashboard (Simulated)",
    sim2_desc: "Simulation of telemetry data consolidated into the monitoring Lakehouse: track dataset refresh health, gateway cluster uptime, and daily activity volume.",
    sim2_filter_all: "All Datasets (8)",
    sim2_filter_ok: "✅ Success (6)",
    sim2_filter_fail: "⚠️ Failures (2)",
    t_kpi_events: "Events Logged (Today):",
    t_kpi_rate: "Refresh Success Rate:",
    t_kpi_gateways: "Online Gateways:",
    t_kpi_lakehouse: "Lakehouse Storage:",
    th2_dataset: "Dataset Name",
    th2_workspace: "Workspace / Capacity",
    th2_start: "Start Time",
    th2_duration: "Duration",
    th2_gateway: "Gateway Cluster",
    th2_status: "Status",
    th2_action: "Automated Action",
    sim2_stat_impact: "Orchestrator:",
    sim2_stat_result: "Business Benefit:",

    // FinOps Calculator
    calc_badge: "Interactive FinOps Tool",
    calc_title: "Power BI License Cost Optimization Simulator",
    calc_subtitle: "See the potential financial return that the governance framework applied at VALE can deliver to your enterprise.",
    calc_label_licenses: "Current Power BI Pro Licenses Count:",
    calc_label_viewers: "Estimated % of Read-Only Report Consumers (on Premium):",
    calc_note_text: "Assumes standard enterprise Power BI Pro licensing costs (~$10 - $14 / month / user) converted based on Premium Capacity consumption rules.",
    calc_res_users: "Eligible Users for Free Downgrade:",
    calc_res_savings_brl: "Estimated Annual Savings (BRL):",
    calc_cta: "Assess Savings For My Enterprise",

    // Case 3: Zygon Marketing
    case3_title: "Performance Marketing Data Pipelines & Multi-Channel BI (ROAS / CPA)",
    case3_desc: "Automated extraction of Google Ads and Meta Ads via Supermetrics and Tableau Prep. Built dimensional models and executive dashboards in Figma & Power BI tracking conversion funnels, ROAS, and CAC.",
    case3_kpi1: "Consolidated Ad Sources",
    case3_kpi2: "Figma Data UX/UI",

    // Case 4: Accenture / J&J
    case4_title: "Amazon Athena SQL Query Optimization & Global Executive BI",
    case4_desc: "Maintained and scaled global BI solutions with Power BI and Tableau. Resolved query performance bottlenecks and ensured data compliance across AWS Athena S3 Parquet lakes under agile sprints.",
    case4_kpi1: "Athena & S3 Parquet",
    case4_kpi2: "Global Agile Sprints",

    // Simulation
    sim_title: "Synthetic Data Interactive Simulation",
    sim_desc: "Test the telemetry audit logic live with this representative dataset (10 mock users). Click the filters to observe the classification engine.",
    sim_filter_all: "All Users (10)",
    sim_filter_eligible: "✅ Eligible for Free",
    sim_filter_keep: "🔒 Retain Pro License",
    th_user: "Simulated User",
    th_dept: "Department",
    th_license: "Current License",
    th_views: "Views (Premium)",
    th_pro_actions: "Pro / Shared Actions",
    th_status: "Algorithmic Decision",
    th_savings: "Financial Impact",
    sim_stat_pot: "Estimated Savings Per Downgraded User:",
    sim_stat_result: "Consolidated Annual Contract Impact:",

    // Next Projects
    next_proj_title: "More Real-World Cases Under Production",
    next_proj_desc: "Upcoming project walkthroughs: Tableau Prep ETL pipelines, AWS Athena analytics, Figma BI design systems for global clients (Johnson & Johnson, iFood, O Boticário), and Power Automate workflows.",
    next_proj_btn: "Request Technical Walkthrough",

    // Experience
    exp_badge: "Career Track",
    exp_title: "Professional Experience",
    exp1_role: "Data Analyst",
    exp1_period: "11/2025 - Present",
    exp1_b1: "Developed Business Intelligence solutions using Power BI and Tableau, supporting global stakeholders in data-driven decision making.",
    exp1_b2: "Optimized and debugged complex SQL queries in Amazon Athena, ensuring data integrity and query performance.",
    exp1_b3: "Enhanced existing dashboard layouts and user experience (UX) to streamline report consumption.",
    exp1_b4: "Delivered iterative value within agile sprints for enterprise clients.",

    exp2_role: "Data Analyst",
    exp2_period: "10/2023 - 10/2025",
    exp2_b1: "Led the Power BI license optimization project that saved ~R$ 500,000 in 2025 by auditing SQL activity telemetry across Premium capacities.",
    exp2_b2: "Managed Microsoft Fabric environments across multiple premium capacities supporting over 70,000 active users.",
    exp2_b3: "Engineered automated workflows with Power Automate, eliminating repetitive manual administrative tasks.",
    exp2_b4: "Delivered scalable production semantic models following best practices in Azure Analysis Services, Power BI, and SQL.",

    exp3_role: "Data Analyst",
    exp3_period: "08/2022 - 07/2023",
    exp3_b1: "Engineered BI solutions in Power BI resulting in increased operational efficiency and executive visibility.",
    exp3_b2: "Designed dashboard layouts and design systems in Figma, ensuring frictionless usability.",
    exp3_b3: "Built scalable ETL pipelines using Power Query and M language for consistent data ingestion.",
    exp3_b4: "Automated business routines with Power Automate, reducing operational toil.",

    exp4_role: "Data Analyst (Marketing Analytics)",
    exp4_period: "12/2021 - 08/2022",
    exp4_b1: "Extracted and ingested data from Google Ads and Facebook Ads via Supermetrics and Tableau Prep.",
    exp4_b2: "Built marketing performance dashboards in Power BI and Tableau, tracking ROAS, CPA, conversions, and impressions.",
    exp4_b3: "Collaborated with cross-functional teams to prototype analytics interfaces in Figma, turning marketing metrics into intuitive dashboards.",

    // Education
    edu_badge: "Education & Certifications",
    edu_title: "Continuous Learning",
    edu_degree: "B.S. in Information Systems",
    edu_desc: "Focus on data architecture, database engineering, and Python for data analysis.",
    cert_title: "Professional Certifications",

    // Contact
    contact_badge: "Get In Touch",
    contact_title: "Ready to unlock measurable ROI from your company's data?",
    contact_subtitle: "Available for remote opportunities, BI Governance & FinOps advisory, Microsoft Fabric architecture, and high-performance dashboard engineering.",
    contact_loc_label: "Location",
    footer_copy: "Built for speed, accessibility, and clean data architecture."
  }
};

// --- 2. SYNTHETIC DATASET FOR PROJECT 1 (VALE LICENSE AUDIT) ---
const mockAuditUsers = [
  {
    email: "operacao.porto.01@vale-simulated.com",
    dept: "Logística Portuária",
    dept_en: "Port Logistics",
    license: "Power BI Pro",
    premiumViews: 142,
    proActions: 0,
    status: "eligible",
    reason_pt: "Apenas visualizou relatórios em Capacidade Premium",
    reason_en: "Exclusively viewed reports on Premium Capacity",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  },
  {
    email: "eng.ferrovia.abc@vale-simulated.com",
    dept: "Engenharia Ferroviária",
    dept_en: "Railway Engineering",
    license: "Power BI Pro",
    premiumViews: 89,
    proActions: 0,
    status: "eligible",
    reason_pt: "Consumo exclusivo de relatórios em Premium",
    reason_en: "100% read-only consumption on Premium",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  },
  {
    email: "analista.bi.senior@vale-simulated.com",
    dept: "Centro de Excelência BI",
    dept_en: "BI Center of Excellence",
    license: "Power BI Pro",
    premiumViews: 310,
    proActions: 45, // Published, edited, created
    status: "keep",
    reason_pt: "Publicou relatórios e editou modelos (Requer Pro)",
    reason_en: "Published reports & edited datasets (Requires Pro)",
    savings_pt: "R$ 0 (Mantém Pro)",
    savings_en: "$0 (Retain Pro)"
  },
  {
    email: "coordenador.minas@vale-simulated.com",
    dept: "Operações de Mina",
    dept_en: "Mining Operations",
    license: "Power BI Pro",
    premiumViews: 64,
    proActions: 0,
    status: "eligible",
    reason_pt: "Apenas consome dashboards operacionais em P-SKU",
    reason_en: "Pure consumer of operational dashboards in P-SKU",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  },
  {
    email: "supervisor.rh@vale-simulated.com",
    dept: "Recursos Humanos",
    dept_en: "Human Resources",
    license: "Power BI Pro",
    premiumViews: 18,
    proActions: 6, // Accessed non-premium workspace
    status: "keep",
    reason_pt: "Acessou workspace pessoal/compartilhado sem capacidade",
    reason_en: "Accessed shared non-premium workspace (Requires Pro)",
    savings_pt: "R$ 0 (Mantém Pro)",
    savings_en: "$0 (Retain Pro)"
  },
  {
    email: "diretoria.executiva@vale-simulated.com",
    dept: "Diretoria Corporativa",
    dept_en: "Executive Board",
    license: "Power BI Pro",
    premiumViews: 52,
    proActions: 0,
    status: "eligible",
    reason_pt: "Consumo de relatórios executivos em Premium",
    reason_en: "Read-only consumption of executive dashboards",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  },
  {
    email: "seguranca.trabalho@vale-simulated.com",
    dept: "SSMA (Segurança)",
    dept_en: "HSE (Safety & Env)",
    license: "Power BI Pro",
    premiumViews: 115,
    proActions: 0,
    status: "eligible",
    reason_pt: "Consulta diária a indicadores em Premium",
    reason_en: "Daily safety KPI lookup in Premium capacity",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  },
  {
    email: "desenvolvedor.dados@vale-simulated.com",
    dept: "Arquitetura de TI",
    dept_en: "IT Architecture",
    license: "Power BI Pro",
    premiumViews: 85,
    proActions: 28, // Created datasets & scheduled refresh
    status: "keep",
    reason_pt: "Criação de conjuntos de dados e agendamento",
    reason_en: "Authoring semantic models and refreshes",
    savings_pt: "R$ 0 (Mantém Pro)",
    savings_en: "$0 (Retain Pro)"
  },
  {
    email: "suprimentos.compras@vale-simulated.com",
    dept: "Procurement / Suprimentos",
    dept_en: "Procurement & Supply",
    license: "Power BI Pro",
    premiumViews: 73,
    proActions: 0,
    status: "eligible",
    reason_pt: "Apenas visualizou relatórios de gastos em Premium",
    reason_en: "View-only access to spend reports in Premium",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  },
  {
    email: "manutencao.ativos@vale-simulated.com",
    dept: "Manutenção Preditiva",
    dept_en: "Predictive Maintenance",
    license: "Power BI Pro",
    premiumViews: 198,
    proActions: 0,
    status: "eligible",
    reason_pt: "Apenas visualizou dashboards de sensores IoT em Premium",
    reason_en: "Exclusively viewed IoT telemetry boards in Premium",
    savings_pt: "- R$ 780 / ano",
    savings_en: "- $156 / yr"
  }
];

// --- 2.1 SYNTHETIC DATASET FOR PROJECT 2 (FABRIC TENANT REFRESH MONITOR) ---
const mockDatasetRefreshes = [
  {
    name: "Dataset_Vendas_Corporativo",
    workspace: "Comercial Executivo (P-SKU)",
    startTime: "06:00:12",
    duration: "14 min",
    gateway: "GW-Enterprise-BR01",
    status: "Completed",
    action_pt: "✅ Carga sem incidentes",
    action_en: "✅ Completed with zero errors"
  },
  {
    name: "Dataset_Operacoes_Ferrovia",
    workspace: "Logística Integrada (Fabric F64)",
    startTime: "06:15:45",
    duration: "28 min",
    gateway: "GW-Enterprise-BR02",
    status: "Completed",
    action_pt: "✅ Carga incremental executada",
    action_en: "✅ Incremental refresh completed"
  },
  {
    name: "Dataset_Manutencao_Mina",
    workspace: "Ativos & Mina (P-SKU)",
    startTime: "06:30:00",
    duration: "45 min",
    gateway: "GW-Enterprise-BR01",
    status: "Failed",
    action_pt: "⚠️ Alerta via Power Automate (Timeout SQL)",
    action_en: "⚠️ Teams alert triggered (SQL Timeout)"
  },
  {
    name: "Dataset_Financeiro_Controladoria",
    workspace: "Finanças & Controladoria (Fabric F64)",
    startTime: "07:00:20",
    duration: "08 min",
    gateway: "GW-Enterprise-BR03",
    status: "Completed",
    action_pt: "✅ Concluído sem alertas",
    action_en: "✅ Completed smoothly"
  },
  {
    name: "Dataset_RH_PeopleAnalytics",
    workspace: "Recursos Humanos (P-SKU)",
    startTime: "07:15:10",
    duration: "11 min",
    gateway: "GW-Enterprise-BR02",
    status: "Completed",
    action_pt: "✅ Carga completa diária",
    action_en: "✅ Daily full refresh succeeded"
  },
  {
    name: "Dataset_Suprimentos_Procurement",
    workspace: "Suprimentos Global (P-SKU)",
    startTime: "07:30:00",
    duration: "19 min",
    gateway: "GW-Enterprise-BR01",
    status: "Failed",
    action_pt: "⚠️ Alerta ao Owner (Credencial Expirada)",
    action_en: "⚠️ Owner alerted (Expired Credential)"
  },
  {
    name: "Dataset_SSMA_IndicadoresSeguranca",
    workspace: "Segurança & Meio Ambiente (Fabric F64)",
    startTime: "08:00:05",
    duration: "05 min",
    gateway: "Direct Cloud Link",
    status: "Completed",
    action_pt: "✅ Concluído sem alertas",
    action_en: "✅ Completed smoothly"
  },
  {
    name: "Dataset_Auditoria_Licencas",
    workspace: "Monitoring (Fabric P-SKU)",
    startTime: "04:00:00",
    duration: "22 min",
    gateway: "Fabric Notebook API Link",
    status: "Completed",
    action_pt: "✅ Base da Otimização de R$ 500k",
    action_en: "✅ Source of the $100k savings case"
  }
];

// --- 3. STATE & APP INITIALIZATION ---
let currentLang = 'pt';
let currentFilter = 'all';
let currentFilter2 = 'all';

// Detect browser language or stored preference
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

// Switch language
function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('mf_lang_pref', currentLang);
  applyTranslations();
  updateLangButton();
  renderSimulationTable();
  renderRefreshMonitoringTable();
  if (window.updateCalculatorLocale) {
    window.updateCalculatorLocale();
  }
}

function updateLangButton() {
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (currentLang === 'pt') {
    flagEl.textContent = '🇧🇷';
    codeEl.textContent = 'PT';
  } else {
    flagEl.textContent = '🇺🇸';
    codeEl.textContent = 'EN';
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

// --- 4. SIMULATION TABLE RENDERING (Case 1) ---
function renderSimulationTable() {
  const tbody = document.getElementById('simulationTbody');
  if (!tbody) return;

  const filtered = mockAuditUsers.filter(u => {
    if (currentFilter === 'all') return true;
    return u.status === currentFilter;
  });

  tbody.innerHTML = filtered.map(u => {
    const isEligible = u.status === 'eligible';
    const dept = currentLang === 'pt' ? u.dept : u.dept_en;
    const reason = currentLang === 'pt' ? u.reason_pt : u.reason_en;
    const savings = currentLang === 'pt' ? u.savings_pt : u.savings_en;

    const statusBadge = isEligible
      ? `<span class="badge-status downgrade"><i class="fa-solid fa-check"></i> ${currentLang === 'pt' ? 'Downgrade para Free' : 'Downgrade to Free'}</span>`
      : `<span class="badge-status keep"><i class="fa-solid fa-lock"></i> ${currentLang === 'pt' ? 'Manter Licença Pro' : 'Retain Pro License'}</span>`;

    return `
      <tr>
        <td>
          <span class="user-code">${u.email}</span>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${reason}</div>
        </td>
        <td>${dept}</td>
        <td><span style="font-family: var(--font-mono); font-size: 0.8rem;">${u.license}</span></td>
        <td style="font-weight: 700; color: var(--accent-cyan); text-align: center;">${u.premiumViews}</td>
        <td style="font-weight: 700; color: ${u.proActions > 0 ? 'var(--accent-amber)' : 'var(--text-muted)'}; text-align: center;">${u.proActions}</td>
        <td>${statusBadge}</td>
        <td style="font-weight: 700; font-family: var(--font-mono); color: ${isEligible ? 'var(--accent-green)' : 'var(--text-muted)'};">
          ${savings}
        </td>
      </tr>
    `;
  }).join('');
}

// --- 4.1 SIMULATION TABLE RENDERING (Case 2 - Tenant Monitoring) ---
function renderRefreshMonitoringTable() {
  const tbody = document.getElementById('refreshMonitoringTbody');
  if (!tbody) return;

  const filtered = mockDatasetRefreshes.filter(item => {
    if (currentFilter2 === 'all') return true;
    return item.status === currentFilter2;
  });

  tbody.innerHTML = filtered.map(item => {
    const isSuccess = item.status === 'Completed';
    const action = currentLang === 'pt' ? item.action_pt : item.action_en;

    const statusBadge = isSuccess
      ? `<span class="badge-status downgrade"><i class="fa-solid fa-circle-check"></i> ${currentLang === 'pt' ? 'Concluído' : 'Completed'}</span>`
      : `<span class="badge-status keep"><i class="fa-solid fa-triangle-exclamation"></i> ${currentLang === 'pt' ? 'Falha Detectada' : 'Failed'}</span>`;

    return `
      <tr>
        <td>
          <div style="font-weight: 600; color: var(--text-primary); font-family: var(--font-mono); font-size: 0.82rem;">${item.name}</div>
        </td>
        <td><span style="font-size: 0.85rem; color: var(--text-secondary);">${item.workspace}</span></td>
        <td style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted);">${item.startTime}</td>
        <td style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 600;">${item.duration}</td>
        <td><span class="user-code">${item.gateway}</span></td>
        <td>${statusBadge}</td>
        <td style="font-size: 0.82rem; color: ${isSuccess ? 'var(--text-secondary)' : 'var(--accent-amber)'}; font-weight: ${isSuccess ? '400' : '600'};">
          ${action}
        </td>
      </tr>
    `;
  }).join('');
}

// --- 5. TAB SWITCHING (Scoped to each Case Technical Box) ---
function initTabs() {
  document.querySelectorAll('.case-technical-box').forEach(box => {
    const tabs = box.querySelectorAll('.tech-tab');
    const contents = box.querySelectorAll('.tech-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetId = `tab-${tab.getAttribute('data-tab')}`;
        const targetContent = box.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

// --- 6. SIMULATION FILTER BUTTONS ---
function initSimulationFilters() {
  // Case 1 Filters
  const filterBtns = document.querySelectorAll('.sim-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderSimulationTable();
    });
  });

  // Case 2 Filters
  const filter2Btns = document.querySelectorAll('.sim-filter2-btn');
  filter2Btns.forEach(btn => {
    btn.addEventListener('click', () => {
      filter2Btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter2 = btn.getAttribute('data-filter');
      renderRefreshMonitoringTable();
    });
  });
}

// --- 7. COPY CODE TO CLIPBOARD ---
function initCopyCode() {
  // SQL Copy
  const copyBtn = document.getElementById('copyCodeBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.querySelector('#tab-sql-query pre code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> ' + (currentLang === 'pt' ? 'Copiado!' : 'Copied!');
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  // PySpark Copy
  const copyPyBtn = document.getElementById('copyPyCodeBtn');
  if (copyPyBtn) {
    copyPyBtn.addEventListener('click', () => {
      const code = document.querySelector('#tab-pyspark-code pre code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = copyPyBtn.innerHTML;
        copyPyBtn.innerHTML = '<i class="fa-solid fa-check"></i> ' + (currentLang === 'pt' ? 'Copiado!' : 'Copied!');
        setTimeout(() => {
          copyPyBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }
}

// --- 8. MOBILE NAVIGATION MENU ---
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileBtn.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close when clicking nav-link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
}

// --- 8.1 FINOPS ROI CALCULATOR ---
function initCalculator() {
  const licInput = document.getElementById('proLicensesInput');
  const pctInput = document.getElementById('viewerPercentInput');
  const valLic = document.getElementById('valLicenses');
  const valPct = document.getElementById('valPercent');
  const resUsers = document.getElementById('resUsersCount');
  const resBRL = document.getElementById('resSavingsBRL');
  const resUSD = document.getElementById('resSavingsUSD');

  if (!licInput || !pctInput) return;

  function updateCalc() {
    const licenses = parseInt(licInput.value, 10);
    const percent = parseInt(pctInput.value, 10);

    valLic.textContent = licenses.toLocaleString(currentLang === 'pt' ? 'pt-BR' : 'en-US');
    valPct.textContent = `${percent}%`;

    const convertible = Math.round(licenses * (percent / 100));
    // Base standard: ~R$ 600 / usuário / ano (~$120 USD)
    const annualBRL = convertible * 600;
    const annualUSD = Math.round(annualBRL / 5.2);

    resUsers.textContent = currentLang === 'pt' 
      ? `${convertible.toLocaleString('pt-BR')} usuários` 
      : `${convertible.toLocaleString('en-US')} users`;

    resBRL.textContent = currentLang === 'pt'
      ? `R$ ${annualBRL.toLocaleString('pt-BR')} / ano`
      : `R$ ${annualBRL.toLocaleString('en-US')} / yr`;

    resUSD.textContent = currentLang === 'pt'
      ? `≈ $ ${annualUSD.toLocaleString('pt-BR')} USD / ano`
      : `≈ $ ${annualUSD.toLocaleString('en-US')} USD / yr`;
  }

  licInput.addEventListener('input', updateCalc);
  pctInput.addEventListener('input', updateCalc);
  updateCalc();
  window.updateCalculatorLocale = updateCalc;
}

// --- 9. DOM CONTENT LOADED ---
document.addEventListener('DOMContentLoaded', () => {
  // Update year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize features
  initLanguage();
  initTabs();
  initSimulationFilters();
  initCopyCode();
  initMobileMenu();
  initCalculator();
  renderSimulationTable();
  renderRefreshMonitoringTable();

  // Language button listener
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
});
