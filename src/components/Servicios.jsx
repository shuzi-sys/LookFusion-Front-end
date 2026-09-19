import ServicioCard from './ServicioCard';
import SectionHeader from './SectionHeader';
import { IconoTijera, IconoBrocha, IconoSalud } from './Iconos';

function Servicios() {
  return (
    <section className="Servicios">
      <SectionHeader>Nuestros servicios</SectionHeader>
      <ul className="lista-servicios">
        <ServicioCard
          icono={<IconoTijera />}
          nombre="Corte de Cabello"
          precio="$15000"
          duracion="30 minutos"
        />
        <ServicioCard
          icono={<IconoBrocha />}
          nombre="Tintura"
          precio="$25000 cada 5CM"
          duracion="2 ~ 4 horas (segun largo)"
        />
        <ServicioCard
          icono={<IconoSalud />}
          nombre="Tratamientos"
          precio="$25000"
          duracion="1 hora"
        />
      </ul>
    </section>
  );
}

export default Servicios;