function Navbar(){
    return(
          <nav className="UpperNavBar">
      <a href="Inicio">
        <img className="UpperBarLogo" alt="LookFusion" src="/img/LookFusionLogo.jpg" />
      </a>
      <ul className="NavBarButtons">
        <li><a href="Locales">Locales</a></li>
        <li><a href="Precios">Precios</a></li>
        <li><a href="Reservas">Nosotros</a></li>
        <li><a href="Reservas">Galería</a></li>
      </ul>
    </nav>
    );
}

export default Navbar;
