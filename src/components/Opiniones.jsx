import OpinionesCardAnon from './OpinionesCardAnon';
import SectionHeader from './SectionHeader';
import { useRef, useState} from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

function Opiniones(){
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

    return(<section
    id="opiniones"
    ref={ref}
    className="Opiniones"
    style ={{filter: `brightness(${brillo})`}}>
        <SectionHeader>Nuestras opiniones</SectionHeader>
        <div className="Opiniones-List">
            <div className="Opiniones-Anonim-List">
                <OpinionesCardAnon
                    icono={"/img/placeholder.jpg"}
                    nombre="A. Ma**"
                    opinion="Hace 3 años que me decoloran y cortan el pelo, jamás tuve un problema y siempre me hacen lo que quiero con técnicas especiales."
                    estrellas={5}
                />
                <OpinionesCardAnon
                    icono={"/img/placeholder.jpg"}
                    nombre="Placeholder2"
                    opinion="Opinionplaceholder lorem ipsum"
                    estrellas= {3}
                />
                <OpinionesCardAnon
                    icono={"/img/placeholder.jpg"}
                    nombre="Placeholder3"
                    opinion="Opinionplaceholder lorem ipsum"
                    estrellas= {4}
                />
            </div>
            <div className="Opiniones-Ig-List">
            </div>
        </div>
    </section>
    )
}

export default Opiniones;