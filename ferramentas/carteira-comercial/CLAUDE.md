# CLAUDE.md — carteira-comercial

## Status

Ferramenta migrada para o monorepo (arquivo original: `carteiracomercial_V3.html`). Ainda não segue o padrão de estrutura (`index.html` + `script.js` separados) nem importa `shared/css/banco-theme.css` — é um HTML único e autocontido.

## 🎨 Atualização de identidade visual (rebranding SCpay)

- Aplicada a identidade visual da SCpay ao arquivo: fonte **Poppins** (substituindo IBM Plex Sans) e novos tokens de cor (`--orange`, `--teal`, `--ink-navy`, etc.), mapeados por aliases sobre os nomes de variáveis antigos usados no restante do arquivo. Mudança puramente de `<style>`/CSS — nenhuma alteração de lógica JS.
- A fonte **IBM Plex Mono** foi mantida (usada em números/valores).

## 🌙 Dark mode (opcional)

- Adicionado tema escuro **opcional**, alternável por um botão "🌙 Tema escuro / ☀️ Tema claro" na barra de controles do cabeçalho (`#btnTheme`).
- Implementado **apenas via tokens CSS**: um escopo `[data-theme="dark"]` no `documentElement` sobrepõe os tokens de cor da SCpay (`--bg-app`, `--surface-card`, `--border`, `--text-muted`, `--ink`, `--slate`, `--ink-navy`, `--logo-red`); o restante do CSS herda automaticamente pelas variáveis. Poucas correções pontuais foram necessárias para cores fixas (`#fff`/`#FCFBF7`) em `:focus` de inputs, hover de linha da tabela, `select.move-select`, `.btn-primary`, `.modal input` e cor do texto da `.topbar`.
- **Persistência:** a escolha fica em `localStorage['carteira:tema']` (`'dark'`/`'light'`) — preferência de UI, não é dado sensível. Sem valor salvo, respeita a preferência do sistema (`prefers-color-scheme`).
- **Sem flash:** um pequeno script no `<head>` aplica o `data-theme` antes da renderização. Nenhuma alteração na lógica de negócio/dados.

## 🔒 Correção de segurança aplicada nesta migração

- **XSS corrigido:** o nome do arquivo `.xlsx` importado (`file.name`) era inserido sem escape em `innerHTML` (linha ~616, variável `m.arquivo`). Um nome de arquivo malicioso (ex: `<img src=x onerror=...>.xlsx`) executaria script no navegador. Corrigido envolvendo o valor com a função `escapeHTML()` já existente no arquivo.
- **Regressão reintroduzida e recorrigida:** a versão repaginada (rebranding) veio gerada a partir de uma base anterior ao fix e havia perdido o `escapeHTML(m.arquivo)`. O fix foi **reaplicado** ao incorporar a nova versão. Sintaxe validada (parse dos blocos `<script>`) após a mudança.

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
