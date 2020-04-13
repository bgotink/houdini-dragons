
/**
 * @param {string} html 
 * @returns {HTMLTemplateElement}
 */
export function createTemplate(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}