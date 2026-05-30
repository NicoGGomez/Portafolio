import '../styles/CardExp.css'

const CardExp = ({nombreEmpresa, linkEmpresa,descripcionLabor, anios}) => {
    return (
        <>
            <div className="contenedor contenedor-card-exp">
                <div className="contenedor-info">
                    <a href={linkEmpresa} target="_blank">
                        <h3>{nombreEmpresa}</h3>
                    </a>
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