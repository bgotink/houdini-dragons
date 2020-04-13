import {createStyleApplier} from './utils/style.mjs';
import {createTemplate} from './utils/template.mjs';

const template = createTemplate(`
  <slot></slot>
`);
const applyStyles = createStyleApplier(`
  :host {
    display: block;

    --dnd-box-border: black;
    --dnd-box-color: lightgray;

    background: var(--dnd-box-color);
    border: 1px solid var(--dnd-box-border);
    border-radius: 5px;
  }

  @supports (background: paint(id)) {
    :host {
      background: paint(dnd-box);
      border: unset;
      border-radius: unset;
    }
  }
`, template);

if (isSecureContext && CSS.paintWorklet == null) {
  // Browser doesn't support paint worklet out of the box :(

  import('https://unpkg.com/css-paint-polyfill').then(() => {
    CSS.paintWorklet?.addModule('worklet.mjs');
  });
} else {
  CSS.paintWorklet?.addModule('worklet.mjs');
}


CSS.registerProperty?.({
  name: '--dnd-box-border',
  syntax: '<color>',
  inherits: true,
  initialValue: 'currentColor',
});

CSS.registerProperty?.({
  name: '--dnd-box-color',
  syntax: '<color>',
  inherits: true,
  initialValue: 'transparent',
});

CSS.registerProperty?.({
  name: '--dnd-box-bottom',
  syntax: 'auto | type1a | type1b | type1c | type1d',
  inherits: true,
  initialValue: 'auto',
});

CSS.registerProperty?.({
  name: '--dnd-box-top',
  syntax: 'auto | type1a | type1b | type1c | type1d',
  inherits: true,
  initialValue: 'auto',
});

class DndBox extends HTMLElement {
  static get observedAttributes() {
    return ['top', 'bottom'];
  }

  constructor() {
    super();

    const root = this.attachShadow({mode: 'open'});

    root.appendChild(template.content.cloneNode(true));
    applyStyles(root);

    for (const attribute of ['top', 'bottom']) {
      if (this.hasAttribute(attribute)) {
        this.setCssAttribute(attribute, this.getAttribute(attribute));
      }
    }
  }

  setCssAttribute(name, value) {
    this.style.setProperty(`--dnd-box-${name}`, value);
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    this.setCssAttribute(name, newValue);
  }

  get top() {
    return this.getAttribute('top');
  }

  set top(top) {
    this.setAttribute('top', top);
  }

  get bottom() {
    return this.getAttribute('bottom');
  }

  set bottom(bottom) {
    this.setAttribute('bottom', bottom);
  }
}

customElements.define('dnd-box', DndBox);