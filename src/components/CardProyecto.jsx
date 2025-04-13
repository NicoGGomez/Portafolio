import '../styles/CardProyecto.css'

const CardProyecto = ({img, nombre, descripcion, lenguajes}) => {
    return (
        <div className="card-proyecto">
            <img src={img} alt={nombre} className="card-img" />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p><strong>Lenguajes:</strong> {lenguajes}</p>
        </div>
    )
}

export default CardProyecto