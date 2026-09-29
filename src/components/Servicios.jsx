import ServicioCard from './ServicioCard';
import SectionHeader from './SectionHeader';
import { IconoTijera, IconoBrocha, IconoSalud } from './Iconos';
import {useRef, useState} from 'react';
import { useScroll, useMotionValueEvent, useTransform } from 'framer-motion';

function Servicios() {
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
    <section id="servicios" ref={ref} className="Servicios" style={{ filter: `brightness(${brillo})` }}>
      <SectionHeader>Nuestros servicios</SectionHeader>
      <ul className="lista-servicios">
        <ServicioCard
          icono={<IconoTijera />}
          nombre="Corte de Cabello"
          descripcion="(Tijera y/o maquina)"
          precio="$15000"
          duracion="30 minutos"
        />
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Tintura"
          descripcion="(Fantasia y/o colores naturales)"
          precio="$25000 cada 5CM"
          duracion="2 ~ 4 horas (segun largo)"
        />
        <ServicioCard
          icono={<IconoSalud />}
          nombre="Tratamientos"
          descripcion="trat 1/ trat 2/ trat3"
          precio="$25000"
          duracion="1 hora"
        />
      </ul>
    </section>
  );
}

export default Servicios;