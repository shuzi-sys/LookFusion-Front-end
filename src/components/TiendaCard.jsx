function TiendaCard({ imagen, nombreClase, alt, direccion, horario, telefono }) {
  return (
    <>
      <img className={nombreClase} src={imagen} alt={alt} loading="lazy" />
      <ul className="DatosTienda">
        <li>
          <span className="icon" aria-hidden="true">📌</span>
          <span>{direccion}</span>
        </li>
        {horario && (
          <li>
            <span className="icon" aria-hidden="true">📅</span>
            <span>{horario}</span>
          </li>
        )}
        {telefono && (
          <li>
            <span className="icon" aria-hidden="true">📞</span>
            <span>{telefono}</span>
          </li>
        )}
      </ul>
    </>
  );
}

export default TiendaCard;