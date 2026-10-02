import { useEffect, useState } from "react";
import Turnos from "./Turnos";
import Precios from "./Precios";
import "./admin.css";

export default function AdminPanel() {
  const [tab, setTab] = useState("turnos");

  // Que Google no indexe el panel
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="admin">
      <header className="admin__header">
        <h1>Panel</h1>
        <nav className="tabs" role="tablist">
          {[["turnos", "Turnos"], ["precios", "Precios"]].map(([id, label]) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              className={`tab ${tab === id ? "tab--activa" : ""}`}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <main className="admin__main">{tab === "turnos" ? <Turnos /> : <Precios />}</main>
    </div>
  );
}
