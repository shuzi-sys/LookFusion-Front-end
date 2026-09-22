import IntegranteCard from "./IntegranteCard";
import SectionHeader from "./SectionHeader";
function Equipo(){
return(
<section className="Equipo">
<SectionHeader>Nuestros integrantes</SectionHeader>
<ul className="integrantes">
<IntegranteCard imagen="/img/placeholder.jpg" nombre="Franco"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="Matias"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="Ely"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="Angel"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="Andy"/>
</ul>
</section>
);
}

export default Equipo;