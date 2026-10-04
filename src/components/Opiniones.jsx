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
                    nombre="J.B. Cre***"
                    opinion="saben lo que hacen!! un genio andres jaja"
                    estrellas= {5}
                />
                <OpinionesCardAnon
                    icono={"/img/placeholder.jpg"}
                    nombre="Re***"
                    opinion="voy regularmente desde hace 5 años para cortarme y teñirme de cada idea que se me ocurre, nunca decepciona"
                    estrellas= {5}
                />
                
                <OpinionesCardAnon
                    icono={"/img/placeholder.jpg"}
                    nombre="Sant***"
                    opinion="Me lo recomendó un amigo porque quería hacerme un corte de un personaje de anime y me dijo que acá seguro me lo hacían bien y pienso volver varias veces más"
                    estrellas= {5}
                />
                
                <OpinionesCardAnon
                    icono={"/img/placeholder.jpg"}
                    nombre="T. Genti*****"
                    opinion="Todo bien.. solo me teñi pero bien"
                    estrellas= {4}
                />
            </div>
            <p>¿Ya nos visitaste?</p>
           <a
  href="https://share.google/SjcYbkKGVrJgHZKEF"
  target="_blank"
  rel="noopener noreferrer"
>
  Apoyanos también en Maps
</a>
        </div>
    </section>
    )
}

export default Opiniones;