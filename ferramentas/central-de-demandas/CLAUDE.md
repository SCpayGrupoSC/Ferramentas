# CLAUDE.md — central-de-demandas

## Status

Ferramenta migrada para o monorepo (arquivo original: `Central_de_demandas.html`). Segue o mesmo modelo das demais ferramentas já migradas: **HTML único e autocontido** (CSS e JS inline no próprio `index.html`). Ainda não separa `script.js` nem importa `shared/css/banco-theme.css` — estilos são próprios da tela.

## O que a ferramenta faz

Painel pessoal de demandas no estilo **Kanban** ("Central de Demandas"), para organizar o dia a dia. Recursos:

- **Quadros múltiplos** (abas) — cada quadro com suas colunas.
- **Colunas** configuráveis (criar, renomear, excluir). Padrão: *A fazer · Fazendo · Feito*.
- **Cards** com título, prazo, responsável, esforço (PP/P/M/G/GG), bloqueador e checklist de tarefas.
- **Drag & drop** de cards entre colunas.
- **Notificações** (sino) de vencimentos próximos (≤ 2 dias) e atrasados.
- **Dashboard** com estatísticas: total de cards, atrasados, vencendo, concluídos, bloqueados, progresso de checklist, cards por coluna e por responsável.
- **Relatório** exportável em HTML (download local) com o resumo do quadro ativo.

## Persistência de dados

- Usa `localStorage` (`STORAGE_KEY = 'kanban-state'`) para guardar todo o estado (quadros, colunas, cards) entre sessões, **apenas neste navegador**.
- Há tratamento de falha de armazenamento (modo privado / cota cheia): a ferramenta avisa na tela (`saveStatus`) e alerta no `beforeunload` que os dados serão perdidos ao fechar a aba.
- **Não há dado sensível/bancário** persistido — apenas texto livre de tarefas do próprio usuário.

## Segurança (revisão da migração)

- Todo texto de usuário inserido via `innerHTML` passa por escape:
  - Nomes de quadro/coluna, títulos de card, responsáveis e nomes no dashboard/relatório usam a função `escapeHtml()`.
  - Listas de notificações e checklist usam `textContent` (sem `innerHTML`).
- Nenhuma credencial ou dado sensível hardcoded. Nenhuma chamada a API externa de dados.
- Sintaxe do JS validada com `node --check` após a migração. ✅

## Dependências

- **Google Fonts (Poppins)** carregada via `<link>` de CDN externo. Não é bloqueante: se a fonte não carregar (ambiente sem internet), o navegador usa `sans-serif` como fallback e a ferramenta continua 100% funcional.

## ⚠️ Pendências (registradas, não corrigidas nesta migração)

- [ ] Refatorar futuramente para `index.html` + `script.js` + `style.css` e adotar `shared/css/banco-theme.css`, quando houver janela.
- [ ] Avaliar vendorizar a fonte Poppins localmente para eliminar a dependência de CDN externo (padrão bancário de não fazer requisições externas não homologadas).
