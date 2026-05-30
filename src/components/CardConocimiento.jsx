
import '../styles/CardConocimento.css'

const CardConocimiento = ({titulo, conocimientos}) => {
    return (
        <div className="contenedor card-conocimiento">
            <div className="contenedor-info">

                <div className="contenedor-conocimiento-titulo">
                    <p>{titulo}</p>
                </div>

                <div className="contenedor-lista-conocimientos">
                {Array.isArray(conocimientos) && conocimientos.map((conocimiento, index) => (
                <li key={index}>{conocimiento}</li>
                ))}
                </div>
                
            </div>
        </div>
    )
}

export default CardConocimiento