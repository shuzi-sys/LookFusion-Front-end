// Cliente del front. Con VITE_USE_MOCK distinto de "false" usa datos de prueba
// en memoria (no hace falta backend). Cuando tu API esté lista:
//   VITE_USE_MOCK=false  y  VITE_API_URL=https://tu-api/api   (en .env)
const USE_MOCK = import.meta.env.VITE_USE_MOCK !== "false";
const BASE = import.meta.env.VITE_API_URL ?? "/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("admin_token");
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return res.status === 204 ? null : res.json();
}

/* ---------- Datos de prueba ---------- */
const wait = (ms = 300) => new Promise((r) => setTimeout(r, ms));
let mockPrecios = { corte: 8000, tintura_5cm: 3500 };
const mockTurnos = {};
const DEMO = [
  ["10:00", "Lucía Fernández", "Corte"],
  ["11:00", "Martín Gómez", "Corte"],
  ["12:30", "Sofía Ramos", "Tintura (10 cm)"],
  ["15:00", "Julián Pérez", "Corte"],
  ["16:30", "Camila Díaz", "Corte y tintura"],
];

function turnosDe(fecha) {
  if (!mockTurnos[fecha]) {
    const lista = DEMO.map(([h, cliente, servicio], i) => ({
      id: `${fecha}-${i}`, cliente, servicio,
      fecha: `${fecha}T${h}:00`, atendido: false, monto: 0,
    }));
    mockTurnos[fecha] = lista;
    // Simula un turno nuevo a los 25s para probar el refresco automático
    setTimeout(() => lista.push({
      id: `${fecha}-nuevo`, cliente: "Turno nuevo (demo)", servicio: "Corte",
      fecha: `${fecha}T18:00:00`, atendido: false, monto: 0,
    }), 25000);
  }
  return mockTurnos[fecha];
}

/* ---------- Auth ---------- */
// Real: POST /auth/login  ->  { token }
export async function login(email, password) {
  const { token } = USE_MOCK
    ? (await wait(), { token: "token-de-prueba" })
    : await request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  localStorage.setItem("admin_token", token);
}
export const logout = () => localStorage.removeItem("admin_token");

/* ---------- Turnos ---------- */
// Turno: { id, cliente, servicio, fecha (ISO), atendido, monto }
export async function getTurnos(fecha) {
  if (!USE_MOCK) return request(`/turnos?fecha=${fecha}`);
  await wait();
  return turnosDe(fecha).map((t) => ({ ...t }));
}

export async function marcarAtendido(id, monto) {
  if (!USE_MOCK)
    return request(`/turnos/${id}`, { method: "PATCH", body: JSON.stringify({ atendido: true, monto }) });
  await wait();
  const turno = Object.values(mockTurnos).flat().find((t) => t.id === id);
  if (turno) Object.assign(turno, { atendido: true, monto });
}

/* ---------- Precios ---------- */
// Precios: { corte, tintura_5cm }
export async function getPrecios() {
  if (!USE_MOCK) return request("/precios");
  await wait();
  return { ...mockPrecios };
}

export async function guardarPrecios(precios) {
  if (!USE_MOCK) return request("/precios", { method: "PUT", body: JSON.stringify(precios) });
  await wait();
  mockPrecios = { ...precios };
}
