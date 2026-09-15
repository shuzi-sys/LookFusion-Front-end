function IntegranteCard({imagen, nombre}){
return(
<div className="integrantecard" style={{'--bg-img': `url(${imagen})`}}>
    <img className="integrantecard-image" src={imagen} alt={nombre}></img>
    <h3 className="integrantecard-nombre">{nombre}</h3>
</div>
);
}

export default IntegranteCard;