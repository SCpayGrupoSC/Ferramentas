# CLAUDE.md — crm-farmacias

## Status

Ferramenta migrada para o monorepo (arquivo original: `CRM_BancoSC_standalone_V2.html`).
É um **HTML único autocontido** (bundle empacotado com runtime + fontes embutidas via `data:` URI).
Ainda **não** segue o padrão de estrutura separada (`index.html` + `script.js`) nem importa
`shared/css/banco-theme.css` — toda a lógica e estilo vivem dentro do próprio `index.html`.

## 🎨 Identidade visual (rebranding SCpay)

Aplicada a identidade visual da SCpay ao arquivo. Mudança **puramente de aparência** — nenhuma
alteração de estrutura HTML, handlers ou lógica JS:

- **Tipografia:** `Inter Tight` → **Poppins**, embutida como **woff2 (`data:` URI)** no `<head>`.
  Funciona offline; não depende de `fonts.googleapis.com`. `IBM Plex Mono` mantida para números/valores.
- **Marca:** wordmark `BancoSC` → **SCpay**; selo "SC" com gradiente azul→navy do logo.
- **Cores (tokens SCpay):** navy `#0d3b66` → `#1C2445`; fundo `--bg-app #F7F9FB`; textos/bordas
  unificados (`--text-muted #61636E`, `--text-muted-light #8D91A2`, `--border #E2E3E8`).
- **Navegação:** aba ativa em **laranja** (`#F07F3C`) com sublinhado laranja.
- **Botões:** ação de criar/confirmar ("+ Novo cliente", "Salvar", "Concluir") em **teal** (`#22C5AD`);
  secundários ("Atualizar TPV", "Editar", CSV) em outline navy; raios 6px → 10px.
- **Tabelas:** cabeçalho em **slate** (`#2B2D3B`) com texto claro, cantos arredondados.
- **Cards/inputs:** raios maiores (cards 14px, inputs 10px).
- **Preservadas** as cores funcionais dos badges de status/funil (verde/âmbar/azul/roxo/vermelho) —
  são um sistema categórico de data-viz onde o teal já é usado para outros estados; unificá-las
  colapsaria significados distintos.

## O que a ferramenta faz

CRM comercial para acompanhamento das farmácias do grupo, com 4 abas:

- **Painel:** métricas-resumo (oportunidades ativas, conversão para ativo, onboarding travado,
  adimplência), gráfico do funil por etapa e resumo da carteira ativa (com meta/produtos editáveis).
- **Funil de vendas:** farmácias por etapa do funil; linhas expansíveis para editar etapa, próxima
  ação, data e nº de maquininhas.
- **Onboarding:** acompanhamento de status de prospecção, produto, Dock, maquininha TEFTI, opt-in e
  rotina de cada farmácia.
- **Carteira:** clientes ativos com TPV, meta orçada, atingimento, adimplência e renovação;
  cadastro/edição via modal e detalhe financeiro expansível.

Cadastrar um cliente na **Carteira** o insere automaticamente no **Onboarding** e no **Funil**.

## Dependências

- **React 18.3.1 + ReactDOM** vendorizados inline (bundle) — sem CDN externo. ✅
- Runtime de template ("dc-runtime") embutido no bundle. ✅
- Fonte **Poppins** e **IBM Plex Mono** embutidas como `data:` URI — sem dependência externa. ✅
- Importação/atualização de planilhas (CSV e `.xlsx` da Dock) processadas localmente no navegador. ✅

## Persistência de dados

- Usa `localStorage` (chave **`crm-bancosc-v2`**) para persistir funil, onboarding, carteira e
  variáveis do painel entre sessões. Dados ficam **apenas no navegador local**, não são enviados a
  nenhum servidor.
- "Limpar dados" remove a chave após confirmação e recarrega a página.
- ⚠️ A chave de storage foi **mantida** como `crm-bancosc-v2` (não renomeada para SCpay) de propósito:
  renomear é mudança de lógica e faria usuários perderem os dados já salvos.

## Segurança

- Toda importação (CSV/XLSX) é processada localmente; nenhuma requisição a API externa.
- Não há credenciais nem dados sensíveis hardcoded. Use apenas dados mockados/fictícios em demos.

## ⚠️ Pendências (registradas, não tratadas nesta migração)

- [ ] Auditar as rotinas de importação CSV/XLSX quanto a XSS (nomes de arquivo/campos inseridos em
      texto renderizado) — o runtime usa interpolação `{{ }}`, mas convém confirmar escape de campos
      livres vindos de planilha.
- [ ] Avaliar se os dados em `localStorage` podem conter informações reais de clientes; se sim,
      definir política de retenção/criptografia local.
- [ ] Refatorar futuramente para `index.html` + `script.js` + `style.css` e adotar `banco-theme.css`.
