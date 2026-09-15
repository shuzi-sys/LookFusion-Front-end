import TiendaCard from './TiendaCard';

function Locales() {
  return (
    <section className="Locales">

      <div><h2 className="Section-Header"> Nuestros locales </h2></div>
      <ul className="Tiendas">
        <div className="TiendaCardWrapper"> 
        <TiendaCard
          imagen="/img/escaparatetienda1.jpg"
          nombreClase="Tienda1"
          direccion="Gral. José Gervasio Artigas 317, C1406ABC Cdad. Autónoma de Buenos Aires"
          horario="Lunes a Sábados · 10:30AM - 8PM"
          telefono="011 2162-7288"
        />
        </div>
        <div className="TiendaCardWrapper"> 
        <TiendaCard
          imagen="/img/escaparatetienda2.jpg"
          nombreClase="Tienda2"
          direccion="Fray Cayetano Rodríguez 112, C1406AVD Cdad. Autónoma de Buenos Aires"
          horario="Lunes a Sábados · Horarios alternos"
          telefono="Numero alterno"
        />
        </div>
      </ul>
    </section>
  );
}

export default Locales;