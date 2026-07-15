/**
 * utils.js
 * Funções utilitárias globais compartilhadas entre todas as ferramentas.
 * Importe com: <script src="../../shared/js/utils.js"></script>
 */

/**
 * Sanitiza uma string de input do usuário para evitar XSS.
 * Remove tags HTML e caracteres perigosos antes de qualquer uso em innerHTML.
 * @param {string} input
 * @returns {string}
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML.trim();
}

/**
 * Sanitiza e converte um valor para número, retornando null se inválido.
 * Útil para campos numéricos (evita NaN silencioso e injeção via campos "number").
 * @param {string|number} value
 * @returns {number|null}
 */
function sanitizeNumber(value) {
  const cleaned = String(value).replace(',', '.').trim();
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
}

/**
 * Formata um número como moeda BRL.
 * @param {number} value
 * @returns {string}
 */
function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

/**
 * Formata um número como percentual.
 * @param {number} value - ex: 0.05 para 5%
 * @param {number} decimals
 * @returns {string}
 */
function formatPercent(value, decimals = 2) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

/**
 * Exibe uma mensagem de erro de validação em um campo específico.
 * Espera um elemento com classe .banco-field envolvendo o input,
 * e um <span class="banco-error-msg"> dentro dele.
 * @param {HTMLElement} fieldEl - elemento .banco-field
 * @param {string} message
 */
function showFieldError(fieldEl, message) {
  fieldEl.classList.add('invalid');
  const msgEl = fieldEl.querySelector('.banco-error-msg');
  if (msgEl) msgEl.textContent = message;
}

/**
 * Limpa o erro de validação de um campo.
 * @param {HTMLElement} fieldEl
 */
function clearFieldError(fieldEl) {
  fieldEl.classList.remove('invalid');
}

/**
 * Valida se um valor numérico está dentro de um intervalo permitido.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
function isWithinRange(value, min, max) {
  return typeof value === 'number' && value >= min && value <= max;
}
