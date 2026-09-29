function OpinionesCardAnon({icono, nombre, opinion, estrellas}){
return(
    <li className="opinionescardanon">
        <div className="opinionescardanon-upper">
         <img className="opinionescardanon-icono"
              src={icono}
              alt="{nombre}"
         />
         <div className="opinionescardanon-nombre">{nombre}</div>
         <div className="opinionescardanon-estrellas">
                        {[0,1,2,3,4].map((i) => (
                <span key={i}>
                    {i < estrellas ? "★" : "☆"}
                </span>
            ))}
         </div>

        </div>
         <div className="opinionescardanon-opinion">{opinion}</div>
    </li>
)
}

export default OpinionesCardAnon;