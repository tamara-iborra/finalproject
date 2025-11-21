class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <a href="home.html" class="logo">
          <h1>InterPals</h1>
        </a>
        
        <nav>
          <a href="login.html" class="btn">Entrar</a>
          <a href="signup.html" class="btn-secondary">Crear cuenta</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-navbar', SiteNavbar);