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
          nombre="Corte de Cabello (Varon/Mujer)"
          descripcion="(Tijera y/o maquina)"
          precio="$20.000"
          duracion="30 minutos"
        />
        <ServicioCard
          icono={<IconoTijera />}
          nombre="Corte de Cabello (Jubilado)"
          descripcion="(Tijera y/o maquina)"
          precio="$18.000"
          duracion="30 minutos"
        />
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Tinturas de raiz"
          descripcion="(Fantasia y/o colores naturales)"
          precio="A partir de $45.000"
          duracion="2 ~ 4 horas (segun largo)"
        />
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Tintura general / Mechas"
          descripcion="(Fantasia y/o colores naturales)"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Permanente"
          descripcion="Rizos u ondas"
          precio="A partir de 60.000 [Consultar segun largo]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Manicura"
          descripcion="Rizos u ondas"
          precio="[Comun 25.000$][Semipermanente 28.000$]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Pedicura"
          descripcion="Rizos u ondas"
          precio="$30.000"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Depilacion de cejas"
          descripcion="Rizos u ondas"
          precio="$8.000"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Depilacion de rostro completo"
          descripcion="Rizos u ondas"
          precio="$25.000"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Masajes de cuerpo completo"
          descripcion="Rizos u ondas"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Kinesiologia con aparatos"
          descripcion="Rizos u ondas"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Extenciones"
          descripcion="De cabello y/o pestañas"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Peinados especiales"
          descripcion="Fiestas / Bodas"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Trensas boxeadoras/africanas/seccionadas"
          descripcion="Rizos u ondas"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
        
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Maquillaje de fiesta"
          descripcion="Rizos u ondas"
          precio="[Consultar]"
          duracion="2 ~ 4 horas (segun largo)"
        />
      </ul>
    </section>
  );
}

export default Servicios;