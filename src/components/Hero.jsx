function Hero() {
  return (
    <header className="hero">
      <div className="info">
        <h1 className="poder">Poder</h1>
        <p className="lujo">y Lujo</p>

        <div className="botones">
          <button className="about">Acerca de nosotros</button>
          <button className="reservar">Reservar</button>
        </div>
      </div>

      <div className="LandingImage">
        <img src="/img/escaparate.jpg" alt="Landing Image" />
      </div>
    </header>
  );
}

export default Hero;