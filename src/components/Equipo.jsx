import IntegranteCard from "./IntegranteCard";
import SectionHeader from "./SectionHeader";
function Equipo(){
return(
<section className="Equipo">
<SectionHeader>Nuestros integrantes</SectionHeader>
<ul className="integrantes">
<IntegranteCard imagen="/img/placeholder.jpg" nombre="placeholder1"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="placeholder2"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="placeholder3"/>
</ul>
</section>
);
}

export default Equipo;