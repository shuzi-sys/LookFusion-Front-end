import OpinionesCardAnon from './OpinionesCard';
import SectionHeader from './SectionHeader';

function Opiniones(){
    return(<section
    ref={ref}
    className="Opiniones"
    style ={{filter: `brightness(${brillo})`}}>
        <SectionHeader>Nuestras opiniones</SectionHeader>
        <div className="Opiniones-List">
            <div className="Opiniones-Anonim-List">
                <OpinionesCardAnon>
                    icono={"/img/placeholder.jpg"}
                    nombre="A. Ma**"
                    opinion="Hace 3 años que me decoloran y cortan el pelo, jamás tuve un problema y siempre me hacen lo que quiero con técnicas especiales."
                    estrellas={5}
                </OpinionesCardAnon>
                <OpinionesCardAnon>
                    icono={"/img/placeholder.jpg"}
                    nombre="Placeholder2"
                    opinion="Opinionplaceholder lorem ipsum"
                    estrellas= {3}
                </OpinionesCardAnon>
                <OpinionesCardAnon>
                    icono={"/img/placeholder.jpg"}
                    nombre="Placeholder3"
                    opinion="Opinionplaceholder lorem ipsum"
                    estrellas= {4}
                </OpinionesCardAnon>
            </div>
            <div className="Opiniones-Ig-List">
            </div>
        </div>

    </section>
    )
}