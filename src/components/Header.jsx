function Header() {
  return (
    <>
      <header>
        <nav className="navbar is-primary">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="src/assets/logo-header.png" alt="Logo" />
            </a>
            <div className="navbar-burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Inico
              </a>
              <a className="navbar-item" href="/about">
                Sobre Nostros
              </a>
            </div>
            <div className="navbar-end">
              <a className="navbar-item" href="/contact">
                Login
              </a>
              <a className="navbar-item" href="/contact">
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
