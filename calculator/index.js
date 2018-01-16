const template = `<div class="calculator-wrapper">init text</div>`

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
    this.updateText();
  }

  updateText() {
    let newVal = this.getAttrinute('value')
    this.container.innerHTML = newVal;
  }
}

document.registerElement('fancy-calculator', Calculator);
