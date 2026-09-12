function ServicioCard({ icono, nombre, precio, duracion }) {
  return (
    <li className="lista-servicio">
      <span className="lista-servicio-icono">{icono}</span>
      <h3>{nombre}</h3>
      <p className="lista-servicio-precio">{precio}</p>
      <p className="lista-servicio-duracion">{duracion}</p>
    </li>
  );
}

export default ServicioCard;