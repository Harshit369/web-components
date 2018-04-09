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
      <span id="clear" class="button clear">C</span>
    </div>
    <div class="row">
      <span class="button input">7</span>
      <span class="button input">8</span>
      <span class="button input">9</span>
      <span id="equal" class="button equal">=</span>
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
  createdCallback() {
    this.valueString = '';
    this.createShadowRoot().innerHTML = template;
    this.container = this.shadowRoot.querySelector('#calculator-wrapper');
    this.screen = this.shadowRoot.querySelector('#screen');
    this.shadowRoot.querySelectorAll('.input, .operator').forEach((button) => {
      let isValue = button.classList.contains('input');
      button.onclick = e => {
        this.updateScreen(e.target.innerText, isValue)
      };
    })
    this.shadowRoot.querySelector('#clear').onclick = e => {
      this.clearScreen();
    };
    this.shadowRoot.querySelector('#equal').onclick = e => {
      this.evaluateScreen();
    };
    this.updateComponents();
  }

  attachedCallback() {
    console.log('attached');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.updateComponents();
  }

  updateComponents() {
    this.screen.innerHTML = this.valueString;
  }

  updateScreen(string, isValue) {
    this.valueString += string;
    this.updateComponents();
  }

  clearScreen() {
    this.valueString = this.valueString.slice(0, -1);
    this.updateComponents();
  }

  evaluateScreen() {
    this.valueString = eval(this.valueString);
    this.updateComponents();
  }

}

document.registerElement('custom-calculator', Calculator);
