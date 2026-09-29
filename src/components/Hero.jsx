import { useEffect, useState } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50
  })

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y
    });
  };
  return (
    <header className="hero">

      <div
        className={`info ${isHovering ? "mouse-hover" : ""}`}
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h1 className="poder">Poder</h1>

        <p className="lujo">y Lujo</p>

        <div className="botones">
          <a href="#about-us" className="about">
            Acerca de nosotros
          </a>

          <a href="#reservas" className="reservar">
            Reservar
          </a>
        </div>
      </div>

      <div className="LandingImage">
        <img src="/img/escaparate.jpg" alt="Landing Image" />
      </div>

    </header>
  );
}

export default Hero;