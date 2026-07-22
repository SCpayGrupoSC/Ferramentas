# Manual de Uso — CRM Comercial · Farmácias do grupo (SCpay)

> Ferramenta interna para acompanhamento comercial das farmácias do grupo: funil de vendas,
> onboarding, carteira ativa e indicadores. Roda 100% no navegador — nenhum dado sai do seu
> computador.

---

## 1. Primeiros passos

1. Abra o arquivo **`index.html`** com um duplo clique (Chrome ou Edge recomendados).
2. A ferramenta abre já no **Painel**. Na primeira vez ela vem **vazia** — os dados aparecem
   conforme você cadastra clientes ou importa uma planilha.
3. Tudo o que você cadastra fica **salvo automaticamente no próprio navegador** (não precisa clicar
   em "salvar tudo"). Ao reabrir o arquivo no mesmo navegador, os dados continuam lá.

> ⚠️ Os dados ficam salvos **só neste navegador e neste computador**. Trocar de máquina, de
> navegador ou limpar os dados de navegação apaga as informações. Para levar os dados para outro
> lugar, use **Exportar CSV** (seção 7).

---

## 2. Visão geral da tela

- **Topo (cabeçalho):** logo SCpay, e à direita os botões **Exportar CSV**, **Importar CSV**,
  **Limpar dados** e o identificador do usuário (ex.: *Comercial 1*).
- **Abas:** `Painel` · `Funil de vendas` · `Onboarding` · `Carteira`. A aba ativa fica em **laranja**.
- **Área central:** muda conforme a aba selecionada.

---

## 3. Aba Carteira — o ponto de partida

A **Carteira** é onde você cadastra e mantém os clientes ativos. **Cadastrar um cliente aqui o
insere automaticamente no Onboarding e no Funil** — por isso comece por ela.

### Cadastrar um novo cliente

1. Clique em **+ Novo cliente** (botão teal, canto superior direito).
2. Preencha o formulário. Os campos estão agrupados em blocos:
   - **Identificação:** Farmácia, CNPJ, TPV adquirência (R$/mês), Meta orçada (R$/mês), Status de
     adimplência, Responsável, Data de renovação.
   - **Dados de cadastro:** contato do comercial, telefone, endereço, cód. SAP, data de entrada, canal.
   - **Onboarding:** produto, status de prospecção, status do produto, status Dock, maquininha TEFTI,
     termos assinados.
   - **Financeiro:** valor operado, dívida total/quitada, limite, limite operado, observação.
3. Clique em **Salvar**. O cliente aparece na tabela e passa a contar nos indicadores do Painel.

### Editar / ver detalhes

- Clique na **linha** do cliente (ou no `▸`) para **expandir** e ver/editar o detalhe financeiro e
  de cadastro.
- Clique em **Editar** para abrir o formulário completo. Para **excluir**, use o botão de exclusão
  dentro do formulário de edição.

### Colunas da tabela

| Coluna | Significado |
|---|---|
| **Farmácia** | Nome do cliente |
| **TPV adquirência** | Volume transacionado no mês (R$) |
| **Meta orçada** | Meta de TPV do mês (R$) |
| **Atingimento** | TPV ÷ Meta. Badge **verde** ≥ 100%, **âmbar** ≥ 80%, **vermelho** abaixo |
| **Adimplência** | Adimplente / Atenção / Inadimplente |
| **Renovação** | Data de renovação do contrato |
| **Resp.** | Responsável comercial |

---

## 4. Atualizar TPV em massa (arquivo Dock)

Em vez de digitar o TPV de cada cliente, você pode subir a planilha padrão de transações da Dock:

1. Na aba **Carteira**, clique em **↑ Atualizar TPV (arquivo Dock)**.
2. Selecione o arquivo **`.xlsx`** exportado da Dock.
3. A ferramenta cruza as farmácias pelo nome e **atualiza o TPV automaticamente**, exibindo um
   relatório com:
   - **Clientes atualizados** (TPV anterior → TPV novo, nº de transações);
   - **Não encontrados** (estabelecimentos da planilha que não casaram com nenhum cliente da carteira).
4. Confira o relatório e clique em **Concluir**.

> O cruzamento é feito por nome de farmácia. Se um estabelecimento aparecer em "Não encontrados",
> verifique se o nome cadastrado na carteira corresponde ao da planilha.

---

## 5. Aba Funil de vendas

Mostra as farmácias distribuídas pelas **etapas do funil**:

`Prospecção → Contato iniciado → Onboarding em andamento → Termos assinados → Proposta de crédito →
Contrato assinado → Ativo` (e `Perdido`, quando aplicável).

- Clique numa **linha** para expandir e editar diretamente: **etapa**, **próxima ação**, **data** e
  **nº de maquininhas**.
- A etapa de cada farmácia alimenta o gráfico de funil do Painel.

---

## 6. Aba Onboarding

Acompanha o processo de ativação de cada farmácia. Para cada uma você controla:

- **Status de prospecção:** Não iniciada / Em andamento / Concluída
- **Status do produto:** Pendente / Em configuração / Liberado
- **Status Dock:** Em análise / Aprovado / Pendência documental / Reprovado
- **Maquininha TEFTI:** Aguardando envio / Enviada / Entregue / Instalada
- **Opt-in:** Sim / Não
- **Rotina** de contato e **Observação / gargalo** (texto livre)

Farmácias com Dock em **"Pendência documental"** ou **"Reprovado"** entram na conta de
**"Onboarding travado"** no Painel.

---

## 7. Aba Painel (indicadores)

Leitura consolidada — atualiza sozinho conforme você mexe nas outras abas:

- **Oportunidades ativas:** farmácias no funil que ainda não são "Ativo" nem "Perdido".
- **Conversão para ativo:** % de farmácias "Ativo" sobre o total do funil.
- **Onboarding travado:** nº de farmácias com gargalo na Dock.
- **Adimplência da carteira:** % de clientes adimplentes.
- **Gráfico "Farmácias por etapa do funil":** distribuição visual por etapa.
- **Resumo da carteira ativa:** clientes ativos, TPV total, atingimento da meta global e campos
  editáveis de **meta orçada** e **produtos contratados** (limites, contas digitais, maquininhas).

---

## 8. Exportar, importar e limpar dados

- **Exportar CSV:** baixa a **aba atual** (Funil, Onboarding ou Carteira) como planilha `.csv` —
  útil para backup ou para compartilhar/analisar no Excel.
- **Importar CSV:** carrega um `.csv` na **aba atual**. Use o mesmo formato gerado pela exportação.
- **Limpar dados:** apaga **todos** os dados salvos neste navegador. Pede confirmação e **não pode
  ser desfeito** — exporte antes se quiser guardar.

---

## 9. Perguntas frequentes

**Meus dados somem quando fecho?**
Não — ficam salvos no navegador. Só sao apagados por "Limpar dados", pela limpeza de dados de
navegação, ou ao trocar de navegador/computador.

**Preciso de internet?**
Não. A ferramenta é autocontida (fontes, bibliotecas e runtime embutidos) e roda offline.

**Os dados vão para algum servidor?**
Não. Todo o processamento (inclusive importação de CSV/XLSX) acontece no seu navegador.

**Posso usar em vários computadores?**
Cada navegador tem seus próprios dados. Para transferir, **Exportar CSV** num e **Importar CSV** no
outro.

---

*Ferramenta interna SCpay · use apenas dados reais em ambiente autorizado; para demonstrações, use
dados fictícios.*
