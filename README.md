# Ferramentas Banco

Monorepositório de ferramentas internas (calculadoras, validadores, simuladores) em HTML/CSS/JS puro.

## Estrutura

```
/repositorio-ferramentas
├── shared/                  # CSS e JS utilitários globais
├── ferramentas/             # Uma pasta independente por ferramenta
└── CLAUDE.md                # Diretrizes globais (leia antes de contribuir)
```

## Como adicionar uma nova ferramenta

1. Crie `/ferramentas/nome-da-ferramenta/`
2. Adicione `index.html`, `script.js` e um `CLAUDE.md` local com as regras de negócio
3. Importe `../../shared/css/banco-theme.css` no `index.html`
4. Importe `../../shared/js/utils.js` para sanitização e formatação
5. Siga as regras de segurança descritas no `CLAUDE.md` raiz

## Ferramentas disponíveis

- [`carteira-comercial`](./ferramentas/carteira-comercial) — gestão de carteira comercial (migrada como está, com correção de XSS aplicada — ver CLAUDE.md local)
- [`calculadora-spread`](./ferramentas/calculadora-spread) — dashboard de receitas e calculadora de spread MDR/Pix/Antecipação (migrada como está, com correção de XSS aplicada — ver CLAUDE.md local)
- [`central-de-demandas`](./ferramentas/central-de-demandas) — painel pessoal de demandas no estilo Kanban, com tema claro/escuro (migrada como está — ver CLAUDE.md local)
- [`gestao-maquininhas`](./ferramentas/gestao-maquininhas) — gestão de maquininhas (terminais POS), clientes, OS, cobrança e relatórios XLSX (migrada como está, XSS auditado — ver CLAUDE.md local)
- [`crm-farmacias`](./ferramentas/crm-farmacias) — CRM comercial das farmácias do grupo: painel de indicadores, funil de vendas, onboarding e carteira ativa, com identidade visual SCpay aplicada ([manual de uso](./ferramentas/crm-farmacias/MANUAL.md) — ver CLAUDE.md local)

> **Nota:** as duas ferramentas foram migradas para dentro do monorepo como estavam, mas passaram por auditoria de segurança e correção de XSS. Cada uma tem um `CLAUDE.md` local com detalhes das correções aplicadas e pendências para uma refatoração futura (separar em index.html + script.js + adotar banco-theme.css).
