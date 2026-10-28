# Matheus Fernandes — Data & BI Analytics Portfolio

Portfólio profissional de **Matheus Fernandes** (Analista de Dados & Business Intelligence), construído para publicação direta no **GitHub Pages**.

Possui suporte bilíngue nativo (**Português 🇧🇷** e **Inglês 🇺🇸**) com detecção automática do idioma do navegador do recrutador/visitante e alternância instantânea sem recarregar a página.

---

## 🚀 Como Publicar no GitHub Pages

1. Crie um novo repositório no seu GitHub (exemplo: `portfolio` ou `frnandesmatheus.github.io`).
2. Faça o upload ou push dos arquivos desta pasta (`index.html`, `style.css`, `script.js`, etc.):
   ```bash
   git init
   git add .
   git commit -m "feat: initial release with VALE case study and bilingual i18n"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings** > **Pages**:
   - Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
   - Clique em **Save**.
4. Pronto! Em poucos instantes seu site estará no ar em:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO`

---

## 📂 Cases Documentados no Portfólio

### 1. Case VALE (via DXC Technology) — Otimização de Licenciamento Power BI
- **Impacto Financeiro**: Economia anual de **~R$ 500.000,00** para o ciclo de 2025.
- **Contexto**: Mais de 6.000 licenças Pro ativas e 12 Capacidades Premium dedicadas (Microsoft Fabric / Power BI Premium).
- **Regra Arquitetural**: Workspaces hospedados em Capacidades Premium permitem que usuários com licença **Free** visualizem e interajam com relatórios sem custo de licença Pro.
- **Lógica Técnica**: Consulta SQL analítica com agrupamento condicional e cláusula `HAVING` isolando usuários com 100% de atividade exclusiva `ViewReport` em capacidades Premium e zero ações autorais ou em workspaces compartilhados.
- **Simulador Interativo**: O visitante pode visualizar a query SQL completa e testar uma tabela interativa de dados sintéticos que demonstra a classificação algorítmica em tempo real.

### 2. Case Microsoft Fabric & Tenant Governance — Sistema de Telemetria e Observabilidade
- **Contexto & Escala**: Plataforma de monitoramento centralizada no workspace `Monitoring` para um ecossistema com **+70.000 usuários** e dezenas de workspaces em Microsoft Fabric.
- **Inspiração Arquitetural**: Inspirado em soluções de comunidade como o **FUAM (Fabric Unified Activity Monitor)**, adaptado e simplificado para atender a demanda corporativa interna.
- **Stack & Fluxo**:
  - **Fabric Notebooks (PySpark / Python)**: Extração paginada das Power BI Admin REST APIs (`admin/activityevents`, workspaces, capacities, dataset refreshes e gateways) com autenticação Service Principal OAuth2.
  - **Fabric Lakehouse (Delta Tables)**: Armazenamento analítico organizado por camadas de dados.
  - **Fabric Data Pipelines**: Orquestração agendada contínua das rotinas de extração e transformação.
  - **Modelagem Dimensional (Star Schema)**: Estruturação de tabelas fato (`Fact_ActivityEvents`, `Fact_DatasetRefreshes`) conectadas a dimensões para consumo no Power BI.
- **Simulador Interativo**: Dashboard simulado com métricas de saúde do tenant e monitor de refreshes em tempo real com filtros por status de execução.

---

## 🛠️ Stack Tecnológica do Portfólio
- **HTML5 & CSS3 Moderno**: Variáveis CSS, Glassmorphism, Grid/Flexbox responsivo, Dark Tech Theme.
- **JavaScript ES6+**: Motor de internacionalização (i18n), detecção de `navigator.language`, persistência com `localStorage`, simulador de dados interativo.
- **Zero Dependências Pesadas**: Carregamento instantâneo, compatível 100% com GitHub Pages nativo.
