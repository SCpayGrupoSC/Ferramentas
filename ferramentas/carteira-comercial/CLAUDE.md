# CLAUDE.md — carteira-comercial

## Status

Ferramenta migrada para o monorepo (arquivo original: `carteiracomercial_V3.html`). Ainda não segue o padrão de estrutura (`index.html` + `script.js` separados) nem importa `shared/css/banco-theme.css` — é um HTML único e autocontido.

## 🔒 Correção de segurança aplicada nesta migração

- **XSS corrigido:** o nome do arquivo `.xlsx` importado (`file.name`) era inserido sem escape em `innerHTML` (linha ~597, variável `m.arquivo`). Um nome de arquivo malicioso (ex: `<img src=x onerror=...>.xlsx`) executaria script no navegador. Corrigido envolvendo o valor com a função `escapeHTML()` já existente no arquivo. Sintaxe validada com `node --check` após a mudança.

## O que a ferramenta faz

Gestão de carteira comercial: organização de clientes em abas/painéis promocionais, com importação/exportação de planilhas.

## Dependências

- **SheetJS (xlsx 0.18.5)** vendorizado inline no próprio arquivo — sem dependência de CDN externo. ✅
- Fonte "IBM Plex Mono/Sans" via Google Fonts (`fonts.googleapis.com`) — dependência externa de CDN.

## Persistência de dados

- Usa `localStorage` do navegador para persistir os dados da carteira/clientes entre sessões. Dados ficam apenas no navegador local, não são enviados a nenhum servidor.

## ⚠️ Pendências (não corrigidas nesta migração — apenas registradas)

- [ ] Avaliar se a fonte do Google Fonts deve ser vendorizada localmente (mesmo padrão do SheetJS).
- [ ] Confirmar se os dados salvos em `localStorage` podem conter informações reais de clientes; se sim, avaliar necessidade de criptografia local ou política de retenção.
- [ ] Refatorar futuramente para separar em `index.html` + `script.js` + `style.css` e adotar `banco-theme.css`, quando houver janela para isso.
