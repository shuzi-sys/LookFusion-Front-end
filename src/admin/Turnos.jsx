import { useCallback, useEffect, useState } from "react";
import { getTurnos, marcarAtendido } from "./api";

const POLL_MS = 15000;
const hoy = () => new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD en hora local
const pesos = (n) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
const hora = (iso) =>
  new Date(iso).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });

function TurnoRow({ turno, onAtender }) {
  const [monto, setMonto] = useState("");
  const [guardando, setGuardando] = useState(false);

  async function atender() {
    setGuardando(true);
    try {
      await onAtender(turno.id, Number(monto));
    } finally {
      setGuardando(false);
    }
  }

  return (
    <li className={`turno ${turno.atendido ? "turno--hecho" : ""}`}>
      <span className="turno__hora">{hora(turno.fecha)}</span>
      <div className="turno__info">
        <strong>{turno.cliente}</strong>
        <span>{turno.servicio}</span>
      </div>
      {turno.atendido ? (
        <span className="turno__cobro">Atendido · {pesos(turno.monto || 0)}</span>
      ) : (
        <div className="turno__accion">
          <input
            type="number"
            inputMode="numeric"
            min="0"
            placeholder="Cobrado $"
            aria-label={`Monto cobrado a ${turno.cliente}`}
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <button className="btn" onClick={atender} disabled={guardando || monto === ""}>
            {guardando ? "Guardando…" : "Marcar atendido"}
          </button>
        </div>
      )}
    </li>
  );
}

export default function Turnos() {
  const [fecha, setFecha] = useState(hoy());
  const [turnos, setTurnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const cargar = useCallback(async () => {
    try {
      const data = await getTurnos(fecha);
      setTurnos([...data].sort((a, b) => new Date(a.fecha) - new Date(b.fecha)));
      setError("");
    } catch {
      setError("No se pudo actualizar la lista. Reintentando…");
    } finally {
      setCargando(false);
    }
  }, [fecha]);

  // Polling: refresca cada 15s (solo si la pestaña está visible) y al volver a ella.
  useEffect(() => {
    setCargando(true);
    cargar();
    const id = setInterval(() => {
      if (document.visibilityState === "visible") cargar();
    }, POLL_MS);
    const alVolver = () => document.visibilityState === "visible" && cargar();
    document.addEventListener("visibilitychange", alVolver);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", alVolver);
    };
  }, [cargar]);

  async function atender(id, monto) {
    await marcarAtendido(id, monto);
    await cargar();
  }

  const atendidos = turnos.filter((t) => t.atendido);
  const total = atendidos.reduce((suma, t) => suma + (t.monto || 0), 0);

  return (
    <section>
      <div className="resumen">
        <div>
          <p className="resumen__label">Recaudado</p>
          <p className="resumen__total">{pesos(total)}</p>
        </div>
        <p className="resumen__detalle">
          {atendidos.length} de {turnos.length} atendidos
        </p>
        <input
          type="date"
          className="resumen__fecha"
          aria-label="Fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      {error && <p className="aviso aviso--error" role="alert">{error}</p>}
      {cargando ? (
        <p className="vacio">Cargando turnos…</p>
      ) : turnos.length === 0 ? (
        <p className="vacio">No hay turnos para este día.</p>
      ) : (
        <ul className="turnos">
          {turnos.map((t) => (
            <TurnoRow key={t.id} turno={t} onAtender={atender} />
          ))}
        </ul>
      )}
    </section>
  );
}
