/**
 * @param {string} css
 * @param {HTMLTemplateElement} template
 * @returns {(shadowRoot: ShadowRoot) => void}
 */
export function createStyleApplier(css, template) {
  if (typeof CSSStyleSheet.prototype.replaceSync === 'function' && 'adoptedStyleSheets' in ShadowRoot.prototype) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);

    /**
     * @param {ShadowRoot} shadowRoot
     */
    const fn = (shadowRoot) => {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, sheet];
    };

    return fn;
  } else {
    const sheet = document.createElement('style');
    sheet.innerHTML = css;

    template.content.insertBefore(sheet, template.content.firstChild);

    return () => {};
  }
}