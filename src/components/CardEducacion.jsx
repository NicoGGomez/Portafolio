import '../styles/CardEducacion.css'

const CardEducacion = ({nombreInstitucion, titulo, anio}) => {
    return (
        <div className='contenedor contenedor-card-educacion'>
            <div className="contenedor-info-educacion">
                <h3>{titulo}</h3>
                <p>{nombreInstitucion}</p>
                </div>
                <p>{anio}</p>
        </div>
    )
}

export default CardEducacion