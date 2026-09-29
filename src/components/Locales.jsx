import TiendaCard from './TiendaCard';
import SectionHeader from './SectionHeader';
import { useRef, useState } from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
function Locales() {
  const ref = useRef(null);

  const [brillo, setBrillo] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nuevoBrillo;

    if (latest < 0.3) {
      nuevoBrillo = latest / 0.3;
    } 
    else if (latest < 0.7) {
      nuevoBrillo = 1;
    } 
    else {
      nuevoBrillo = 1 - ((latest - 0.7) / 0.3);
    }

    setBrillo(Math.max(0, Math.min(1, nuevoBrillo)));
  });
  
  return (
       <section
       id="locales"
      ref={ref}
      className="Locales"
      style={{ filter: `brightness(${brillo})` }}
    >

<SectionHeader>Nuestros locales</SectionHeader>
<div className="Tiendas">
  <div className="TiendaCardWrapper">
    <TiendaCard
      imagen="/img/escaparatetienda1.jpg"
      nombreClase="Tienda1"
      alt="Fachada del local Keylock en Gral. Artigas 317"
      direccion="Gral. José Gervasio Artigas 317, C1406ABC Cdad. Autónoma de Buenos Aires"
      horario="Lunes a Sábados · 10:30AM - 8PM"
      telefono="011 2162-7288"
    />
  </div>
  <div className="TiendaCardWrapper">
    <TiendaCard
      imagen="/img/escaparatetienda2.jpg"
      nombreClase="Tienda2"
      alt="Fachada del local en Fray Cayetano Rodríguez 112"
      direccion="Fray Cayetano Rodríguez 112, C1406AVD Cdad. Autónoma de Buenos Aires"
      horario="Lunes a Sábados · Horarios alternos"
      telefono="Numero alterno"
    />
  </div>
</div>
    </section>
  );
}

export default Locales;