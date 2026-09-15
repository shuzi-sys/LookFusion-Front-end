import IntegranteCard from "./IntegranteCard";

function Equipo(){
return(
<section className="Equipo">
      <div><h2 className="Section-Header"> Nuestros integrantes </h2></div>
<ul className="integrantes">
<IntegranteCard imagen="/img/placeholder.jpg" nombre="placeholder1"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="placeholder2"/>
<IntegranteCard imagen="/img/placeholder.jpg" nombre="placeholder3"/>
</ul>
</section>
);
}

export default Equipo;