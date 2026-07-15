# CLAUDE.md — Diretrizes Globais do Repositório

Este arquivo define as regras que **qualquer IA** (Claude Code, Claude.ai, etc.) deve seguir sempre que criar ou alterar código neste repositório.

## 📌 Contexto do Projeto

Monorepositório contendo múltiplas ferramentas independentes em HTML/CSS/JS puro, para uso em ambiente bancário (calculadoras, validadores, simuladores, etc).

## 🗂️ Estrutura de Pastas

```
/repositorio-ferramentas
├── shared/                  # CSS e JS utilitários globais
│   ├── css/banco-theme.css
│   └── js/utils.js
├── ferramentas/             # Uma pasta por ferramenta
│   ├── ferramenta-A/ (index.html, script.js, CLAUDE.md)
│   └── ferramenta-B/ (index.html, script.js, CLAUDE.md)
└── CLAUDE.md                # Este arquivo
```

## 🛠️ Regras de Desenvolvimento

1. **Escopo isolado**
   Trabalhe exclusivamente dentro da pasta da ferramenta solicitada (`/ferramentas/nome-da-ferramenta`). Não altere outras ferramentas para poupar contexto e evitar efeitos colaterais.

2. **Criação de nova ferramenta**
   Ao criar um novo projeto, gere a pasta em `/ferramentas/nome-da-ferramenta` contendo:
   - `index.html`
   - `script.js`
   - `CLAUDE.md` local, com as regras de negócio específicas daquela ferramenta

3. **Padrão de Design (UI/UX)**
   Sempre importe `/shared/css/banco-theme.css` no `<head>` do `index.html` para manter a identidade visual do banco. Não duplique estilos globais dentro da ferramenta — apenas estilos específicos daquela tela.

4. **Segurança Bancária (Mandatório)**
   - Nunca insira chaves de API, credenciais ou dados sensíveis diretamente no código (hardcoded).
   - Utilize apenas dados mockados/fictícios para testes e demonstrações.
   - Sanitize **todos** os inputs de usuário antes de exibi-los ou processá-los (evitar XSS). Use `shared/js/utils.js` → `sanitizeInput()`.
   - Nunca use `innerHTML` com conteúdo vindo diretamente do usuário sem sanitização.
   - Não faça requisições para APIs externas não homologadas pelo banco.
   - Não armazene dados sensíveis em `localStorage`/`sessionStorage`/cookies sem necessidade explícita e aprovação.

5. **Tecnologia**
   - HTML5 semântico.
   - JavaScript moderno nativo (Vanilla JS). Evite frameworks/dependências pesadas desnecessárias.
   - Cada ferramenta deve funcionar de forma independente (abrir o `index.html` isoladamente já deve funcionar).

## ✅ Checklist antes de finalizar qualquer ferramenta

- [ ] Importa `banco-theme.css`?
- [ ] Todos os inputs de usuário são sanitizados?
- [ ] Nenhuma credencial ou dado sensível hardcoded?
- [ ] Apenas dados mockados usados nos exemplos?
- [ ] `CLAUDE.md` local criado/atualizado com as regras específicas da ferramenta?
- [ ] Testado abrindo o `index.html` isoladamente no navegador?
