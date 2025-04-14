import '../styles/Educacion.css'
import CardEducacion from './CardEducacion'

const Educacion = () => {
    return (
        <>
        <div className="contenedor contenedor-principal-proyectos">

                <div className="contenedor-titulo">
                    <h2>Educación</h2>
                </div>

                <div className="contenedor-card">

                <CardEducacion 
                className='card'
                nombreInstitucion='Comercio' 
                titulo='Bachiller con Orientación en Comunicación' 
                anio='2015 - 2021' 
                />

                <CardEducacion 
                className='card'
                nombreInstitucion='UNICEN' 
                titulo='Tecnicatura universitaria en desarrollo de aplicaciones (TUDAI)' 
                anio='2023 - En progreso' 
                />

                <CardEducacion 
                className='card'
                nombreInstitucion='Municipio de tandil' 
                titulo='Introducción a la Robótica' 
                anio='2024 - 2025' 
                />

                </div>

            </div>
        </>
    )
}

export default Educacion