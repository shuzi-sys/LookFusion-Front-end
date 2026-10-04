import { useState } from "react";
import "../Reservar.css";
/*
En cada form hay que meter un fetch a TurnitoAPI para sacar los empleados y servicios ofrecidos.
Luego, en el de fecha hay que primero procesarr las fechas y horarios ya disponibles.
*/
function FormData({info, setInfo}){
    return(
    <ul className="Form">
        <li>Ingresá tu nombre:</li>
        <li><input 
        type="text"
        required placeholder="Nombre" 
        value={info.name}
        onChange={(e) => setInfo({...info, name:e.target.value})}
        className="Box"
        ></input></li>
        <li>ingresá tu número de teléfono (opcional):</li>
        <li><input 
        type="tel" 
        placeholder="+54 9 11 xxxx-xxxx"
        value={info.phone}
        onChange={(e) => setInfo({...info, phone:e.target.value})}
        className="Box"
        ></input></li>
    </ul>);
}

function FormService({service, setService}){
    const handleChange = (e) => {
        const selected = Array.from(e.target.selectedOptions, option=>option.value);
        setService(selected);
    }
    return(
    <ul className="Form">
        <li>Elegí el Servicio</li>
        <li><select multiple
                    value={service}
                    onChange={handleChange}>
            <option value="corte">Corte</option>
            <option value="tintura">Tintura</option>
            <option value="permanente">Permanente</option>
            </select>
            </li>
    </ul>
    );
}

function FormBarber({barber, setBarber}){
    return (
    <ul className="Form">
    <li>Elegi el Barbero</li>
    <li><select
                value={barber}
                onChange={(e) => setBarber(e.target.value)}>
            <option value="Andres">Andres</option>
            <option value="Franco">Franco</option>
            <option value="Matias">Matias</option>
            <option value="Ely">Ely</option>
        </select></li>
        </ul>
    )
}

// parsear current month ver cantidad de dias & comparar
function FormDate({date, setDate}){
  const hoy = new Date().toLocaleDateString("en-CA"); // "YYYY-MM-DD" en hora local
  return (
    <ul className="Form">
      <li>Elegí el día</li>
      <li>
        <input type="date" required min={hoy} value={date.day}
          onChange={(e) => setDate({...date, day:e.target.value})} />
      </li>
      <li>Elegi la hora</li>
      <li>
        <input type="time" min="10:00" max="19:00" step="1800" value={date.time}
        onChange={(e) => setDate({...date, time:e.target.value})}/>
        </li>
    </ul>
  );
}

export function Reservar(){
const steps = [
    {id: 1, name:"Datos"},
    {id: 2, name:"Servicio"},
    {id: 3, name:"Barbero"},
    {id: 4, name:"Fecha"}
];
const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [],
    barber: "",
    date: ""
});

const [info, setInfo]= useState({
    name: "",
    phone: ""
});
const [service, setService]= useState([]);
const [barber, setBarber]= useState("");
const [date, setDate]= useState({
    day:"",
    time:""
});
    const [currentStep, SetCurrentStep] = useState(1);

return(
<div>        
    <div className="FormBox">
        <div className="FormBox-Upper">
        <ul className="Steps">
            {steps.map((step)=> (
                <li
                    key={step.id}
                    className={step.id === currentStep ? "Active" : "Inactive"}
                >
                    {step.name}
                </li>
            ))}
            <li><button onClick={(e) =>currentStep < 4 ? SetCurrentStep(currentStep+1) : null}>Siguiente</button></li>
            <li><button onClick={(e) =>currentStep > 1 ? SetCurrentStep(currentStep-1) : null}>Anterior</button></li>
        </ul>
        </div>
        <div className="FormBox-Lower">
            {currentStep === 1 && <FormData info={info} setInfo={setInfo} />}
            {currentStep === 2 && <FormService service={service} setService={setService}/>}
            {currentStep === 3 && <FormBarber barber={barber} setBarber={setBarber}/>}
            {currentStep === 4 && <FormDate date={date} setDate={setDate}/>}
        </div>
    </div>
</div>
);
}