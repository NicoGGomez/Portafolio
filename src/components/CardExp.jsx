import '../styles/CardExp.css'

const CardExp = ({nombreEmpresa, descripcionLabor, anios}) => {
    return (
        <>
            <div className="contenedor contenedor-card-exp">
                <div className="contenedor-info">
                    <h3>{nombreEmpresa}</h3>
                    <p>{descripcionLabor}</p>
                </div>
                <div className="contenedor-anios">
                    <p>{anios}</p>
                </div>
            </div>
        </>
    )
}

export default CardExp