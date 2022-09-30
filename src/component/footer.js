class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div">
                            <p class="footer">&copy; Noprizal - 2022</p>
                        </div>`;
  }
}

customElements.define("Footer-Element", FooterElement);
