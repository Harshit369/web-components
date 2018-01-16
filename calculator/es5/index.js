const template = `<div id="calculator-wrapper">init text</div>`;

class Calculator extends HTMLElement {
  createdCallback() {
    this.createShadowRoot().innerHTML = template;
    this.container = this.shadowRoot.querySelector('#calculator-wrapper');
    this.updateText();
  }

  attachedCallback() {
    console.log('attached');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    debugger;
    this.updateText();
  }
  updateText() {
    debugger;
    let newVal = this.getAttribute('value');
    this.container.innerHTML = newVal;
    console.log('tunak tunak tun');
  }
}

document.registerElement('fancy-calculator', Calculator);
