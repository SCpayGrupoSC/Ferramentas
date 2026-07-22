# CLAUDE.md — gestao-maquininhas

## Status

Ferramenta migrada para o monorepo (arquivo original: `gestaomaquininhasv8.html`, exportado como fragmento de artifact). Segue o mesmo modelo das demais ferramentas já migradas: **HTML único e autocontido** (CSS e JS inline no próprio `index.html`). Na migração, o fragmento foi encapsulado em um documento HTML5 completo (`<!DOCTYPE html>`, `<head>` com `meta charset`/`viewport`/`title` e `preconnect` das fontes, e `<body>`). Ainda não separa `script.js` nem importa `shared/css/banco-theme.css` — os estilos são próprios da tela (mesmos design tokens SCpay/BancoSC das outras ferramentas).

## O que a ferramenta faz

Painel de **gestão de maquininhas (terminais POS)** de clientes. Recursos principais:

- **Cadastro de clientes** (razão social, CNPJ, marca, contato, cidade/UF, tabela de preços, observações) com preview de mensalidade.
- **Carteira de clientes** com busca e filtros, indicação de cadastro incompleto e status de cobrança (isento / a cobrar / personalizado).
- **Perfil do cliente** (modal) com edição inline de dados de contato e da lista de terminais.
- **Terminais/maquininhas por cliente**: modelo, quantidade, número de série, rastreio, OS de instalação/desinstalação, cobrança e motivo.
- **Ordens de serviço (OS)**: abertura, acompanhamento por status (OS/OPL), retirada e finalização.
- **Regras de cobrança** por modelo: mensalidade padrão e mínimo mensal para isenção, configuráveis em tela.
- **Histórico de volumes** transacionados por mês, volume acumulado e sinalização de "avaliar retirada" (≥ 3 meses sem transação).
- **Importação** de clientes/terminais e **exportação de relatórios em XLSX** (SheetJS) com múltiplas opções de recorte.

## Persistência de dados

- O estado é mantido em memória durante a sessão; a persistência entre sessões, quando existente, ocorre **apenas neste navegador** (sem backend).
- **Dados são fictícios/mockados** para demonstração. Não deve ser usada com dados reais de clientes sem avaliação e aprovação de segurança/compliance do banco.

## Segurança (revisão da migração)

- **XSS:** todo texto de usuário renderizado via `innerHTML` passa pela função `escapeHtml()` (escapa `& < > " '`). Auditados os campos de cliente (razão social, CNPJ, telefone, e-mail, cidade, UF, observações, tabela de preços), de terminal (série, rastreio, OS) e de OS (número, serviço, status, defeito, criado por) — todos escapados. Badges de marca (`marcaBadgeHtml`) e labels de modelo saem de listas fixas/escapadas.
- Campos numéricos são normalizados/validados antes do uso (parse de moeda com fallback e checagem de `NaN`/valores negativos).
- Nenhuma credencial ou dado sensível hardcoded. Nenhuma chamada a API externa de dados.
- Sintaxe do JS validada com `node --check` após a migração. ✅

## Dependências

- **Google Fonts (Poppins)** via `@import` no CSS + `preconnect` no `<head>`. Não bloqueante: sem internet, o navegador usa o fallback `sans-serif` e a ferramenta continua funcional.
- **SheetJS / XLSX** (`xlsx.full.min.js`) carregado via CDN externo (`cdnjs.cloudflare.com`), usado somente na exportação de relatórios. A exportação depende dessa CDN estar acessível; o restante da ferramenta funciona sem ela.

## ⚠️ Pendências (registradas, não corrigidas nesta migração)

- [ ] Refatorar futuramente para `index.html` + `script.js` + `style.css` e adotar `shared/css/banco-theme.css`, quando houver janela.
- [ ] Avaliar vendorizar a fonte Poppins e a biblioteca XLSX localmente para eliminar as dependências de CDN externo (padrão bancário de não fazer requisições externas não homologadas).
