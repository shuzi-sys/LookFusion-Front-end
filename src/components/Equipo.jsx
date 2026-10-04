import IntegranteCard from "./IntegranteCard";
import SectionHeader from "./SectionHeader";
import { useRef, useState} from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
function Equipo(){
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

return(
<section id="equipo" ref={ref} className="Equipo" style={{ filter: `brightness(${brillo})` }}>
<SectionHeader>Nuestro Equipo</SectionHeader>
<ul className="integrantes">
<IntegranteCard imagen="/img/MatiasFixed.png" nombre="Matias"/>
<IntegranteCard imagen="/img/ElyFixed.png" nombre="Ely"/>
<IntegranteCard imagen="/img/AndyFixed.png" nombre="Andy"/>
</ul>
</section>
);
}

export default Equipo;