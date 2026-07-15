# CLAUDE.md — calculadora-spread

## Status

Ferramenta migrada para o monorepo (arquivo original: `calculadoraspread_v2.html`). Ainda não segue o padrão de estrutura (`index.html` + `script.js` separados) nem importa `shared/css/banco-theme.css` — é um HTML único e autocontido.

## 🔒 Correção de segurança aplicada nesta migração

- **XSS corrigido:** as tabelas de "Precificação" e "Confronto" (abas que leem arquivos CSV/Excel de Ordens de Serviço) inseriam campos de texto livre da planilha — Código, Status, Região, Estado, Cidade, Localidade, Serviço, Cliente, Data, Observação — diretamente em `innerHTML` via template literal, sem nenhuma sanitização (o arquivo não tinha função de escape). Um valor malicioso em qualquer uma dessas colunas de uma planilha importada executaria script no navegador de quem usasse a ferramenta.
  - Adicionada função `escapeHTML()` (mesmo padrão usado em `shared/js/utils.js` / `sanitizeInput`).
  - Aplicada em todos os campos de texto livre nas duas tabelas (`runPrec()` e a função de renderização do confronto).
  - Sintaxe validada com `node --check` após a mudança.

## O que a ferramenta faz

Dashboard de receitas e calculadora de spread (MDR / Pix / Antecipação), incluindo:
- Relatórios mensais
- Tabela de tarifário Dock
- Fechamentos oficiais Dock (previsto × oficial)
- Receita da conta digital (95% CDI)
- Custos TEF TI / fechamento de entregas

## Dependências

- **SheetJS (xlsx)** vendorizado inline no próprio arquivo — sem dependência de CDN externo. ✅

## Persistência de dados

- Usa `localStorage` (`STORAGE_KEY`) para persistir tabelas de tarifário/fechamento entre sessões.

## ⚠️ Pendências (não corrigidas nesta migração — apenas registradas)

- [ ] Confirmar se os dados salvos em `localStorage` (tarifários, fechamentos) são sensíveis o suficiente para exigir tratamento adicional.
- [ ] Refatorar futuramente para separar em `index.html` + `script.js` + `style.css` e adotar `banco-theme.css`, quando houver janela para isso.
