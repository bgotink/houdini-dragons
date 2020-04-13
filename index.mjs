import {LitElement, html, css} from 'https://unpkg.com/lit-element?module';
import {styleMap} from 'https://unpkg.com/lit-html/directives/style-map.js?module';

if (isSecureContext && CSS.paintWorklet == null) {
  // Browser doesn't support paint worklet out of the box :(

  import('https://unpkg.com/css-paint-polyfill?module').then(() => {
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

class DndBox extends LitElement {
  static properties = {
    top: {type: String},
    bottom: {type: String},
    title: {type: String},
  };

  static styles = css`
    :host {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      justify-content: stretch;
    }

    .box {
      flex: 1 0 0px;
      background: var(--dnd-box-color);
      border: 1px solid var(--dnd-box-border);
      border-radius: 5px;
      padding: 15px 25px;
    }

    @supports (background: paint(id)) {
      .box {
        background: paint(dnd-box);
        border: unset;
        border-radius: unset;
      }
    }

    .box--with-title {
      padding-bottom: 40px;
      position: relative;
    }

    .title {
      bottom: 0;
      font-size: 1em;
      line-height: 40px;
      height: 40px;
      left: 0;
      margin: 0;
      position: absolute;
      right: 0;
      text-align: center;
      text-transform: uppercase;
    }
  `;

  // FIXME property definitions don't work when used in conjunction with the static properties
  // property.
  //
  // /** @type {string} */
  // top;
  // /** @type {string} */
  // bottom;
  // /** @type {string} */
  // title;

  render() {
    const style = {};

    const {top, bottom} = this;

    if (top) {
      style['--dnd-box-top'] = top;
    }

    if (bottom) {
      style['--dnd-box-bottom'] = bottom;
    }

    if (!this.title) {
      return html`
        <section class="box" style=${styleMap(style)}>
          <slot></slot>
        </section>
      `;
    }

    return html`
      <section class="box box--with-title" aria-labelledby="title" style=${styleMap(style)}>
        <h2 class="title" id="title">${this.title}</h2>

        <slot></slot>
      </section>
    `;
  }
}

customElements.define('dnd-box', DndBox);