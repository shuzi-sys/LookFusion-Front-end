import { useEffect, useState } from "react";
import { getPrecios, guardarPrecios } from "./api";

// Para sumar servicios después: agregá una entrada acá y el campo aparece solo.
const SERVICIOS = [
  { clave: "corte", nombre: "Corte de pelo" },
  { clave: "tintura_5cm", nombre: "Tintura (cada 5 cm)" },
];

export default function Precios() {
  const [precios, setPrecios] = useState(null);
  const [estado, setEstado] = useState(""); // "", "guardando", "ok", "error"

  useEffect(() => {
    getPrecios().then(setPrecios).catch(() => setEstado("error"));
  }, []);

  async function guardar(e) {
    e.preventDefault();
    setEstado("guardando");
    try {
      await guardarPrecios(
        Object.fromEntries(SERVICIOS.map((s) => [s.clave, Number(precios[s.clave])]))
      );
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  }

  if (!precios) {
    return <p className="vacio">{estado === "error" ? "No se pudieron cargar los precios." : "Cargando precios…"}</p>;
  }

  return (
    <form className="precios" onSubmit={guardar}>
      {SERVICIOS.map((s) => (
        <label key={s.clave} className="campo">
          <span>{s.nombre}</span>
          <div className="campo__input">
            <span aria-hidden="true">$</span>
            <input
              type="number"
              inputMode="numeric"
              min="0"
              value={precios[s.clave] ?? ""}
              onChange={(e) => {
                setPrecios({ ...precios, [s.clave]: e.target.value });
                setEstado("");
              }}
            />
          </div>
        </label>
      ))}
      <button className="btn" disabled={estado === "guardando"}>
        {estado === "guardando" ? "Guardando…" : "Guardar precios"}
      </button>
      {estado === "ok" && <p className="aviso" role="status">Precios guardados.</p>}
      {estado === "error" && <p className="aviso aviso--error" role="alert">No se pudo guardar. Probá de nuevo.</p>}
    </form>
  );
}
