function TiendaCard({ imagen, nombreClase, direccion, horario, telefono }) {
  return (
    <li>
      <img className={nombreClase} src={imagen} alt={nombreClase} />
      <ul className="DatosTienda">
        <li>📌{direccion}</li>
        <li>📅{horario}</li>
        <li>📞{telefono}</li>
      </ul>
    </li>
  );
}

export default TiendaCard;