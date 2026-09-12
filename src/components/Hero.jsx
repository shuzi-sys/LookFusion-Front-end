function Hero() {
  return (
    <header className="hero">
      <div className="info">
        <h1 className="poder">Poder</h1>
        <p className="lujo">y Lujo</p>

        <div className="botones">
          <a href="#about-us" className="about">Acerca de nosotros</a>
          <a href="#reservar" className="reservar">Reservar</a>
        </div>
      </div>

      <div className="LandingImage">
        <img src="/img/escaparate.jpg" alt="Landing Image" />
      </div>
    </header>
  );
}

export default Hero;