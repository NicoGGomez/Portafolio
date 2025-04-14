import '../styles/CardProyecto.css'

const CardProyecto = ({img, nombre, descripcion, lenguajes}) => {
    return (
        <div className="card-proyecto">
            <div className="contenedor-info">
                <div className="info">
                    <img src={img} alt={nombre} className="card-img" />
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                </div>
                <div className="contenedor-lenguajes">
                {Array.isArray(lenguajes) && lenguajes.map((lenguaje, index) => (
                <button className='button' key={index}>{lenguaje}</button>
                ))}
                </div>
            </div>
        </div>
    )
}

export default CardProyecto