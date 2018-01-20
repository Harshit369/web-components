const template = `
  <style>
    #calculator-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
      width: 240px;
      height: 250px;
    }
    #screen {
      background-color: white;
      height: 40px;
      border: 1px solid #ededed;
    }
    .row {
      display: flex;
      justify-content: space-between;
    }
    .button {
      cursor: pointer;
      height: 40px;
      width: 56px;
      border-radius: 3px;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ededed;
    }
    .input {
      background-color: black;
      color: white;
    }
    .operator {
      background-color: white;
      color: black;
    }
  </style>
  <div id="calculator-wrapper">
    <div id="screen"></div>
    <div class="row">
      <span class="button input">1</span>
      <span class="button input">2</span>
      <span class="button input">3</span>
      <span class="button input">0</span>
    </div>
    <div class="row">
      <span class="button input">4</span>
      <span class="button input">5</span>
      <span class="button input">6</span>
      <span class="button operator">C</span>
    </div>
    <div class="row">
      <span class="button input">7</span>
      <span class="button input">8</span>
      <span class="button input">9</span>
      <span class="button equal">=</span>
    </div>
    <div class="row">
      <span class="button operator">+</span>
      <span class="button operator">-</span>
      <span class="button operator">*</span>
      <span class="button operator">/</span>
    </div>
  </div>
`;

class Calculator extends HTMLElement {
  constructor() {
    this.valueString = '';
  }
  createdCallback() {
    this.createShadowRoot().innerHTML = template;
    this.container = this.shadowRoot.querySelector('#calculator-wrapper');
    this.shadowRoot.querySelectorAll('.input').onClick((e) => {
      debugger;
    });
    this.operators = this.shadowRoot.querySelectorAll('.operator');
    this.updateText();
  }

  attachedCallback() {
    console.log('attached');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.updateText();
  }

  updateText() {
    let newVal = this.getAttribute('value');
  }
}

document.registerElement('custom-calculator', Calculator);
