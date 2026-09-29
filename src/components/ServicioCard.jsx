function ServicioCard({ icono, descripcion, nombre, precio, duracion }) {
  return (
    <li className="serviciocard">
      <div className="serviciocard-icono">{icono}</div>
      <div className="serviciocard-nombre"><h3>{nombre}</h3></div>
      <div className="serviciocard-descripcion">{descripcion}</div>
      <div className="serviciocard-precio">{precio}</div>
      <div className="serviciocard-duracion">{duracion}</div>
    </li>
  );
}

export default ServicioCard;