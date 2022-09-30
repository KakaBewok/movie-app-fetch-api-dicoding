class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  <style>
                          #footer-element {
                            display: flex;
                            justify-content: center;
                            padding: 4px;
                          }
                          #footer-element p a{
                            text-decoration: none;
                            color: white;
                          }
                        </style>
                        <div id="footer-element">
                            <p id="footer"><a href="https://github.com/KakaBewok" target="_blank">&copy; Noprizal - 2022</a></p>
                        </div>
                      `;
  }
}

customElements.define("footer-element", FooterElement);
