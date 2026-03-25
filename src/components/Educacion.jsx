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

                <a href="https://drive.google.com/file/d/1bKn2vodQIZAttXgpuI7fRA2QSO3dwHcv/view?usp=sharing" target='_blank'><CardEducacion 
                className='card'
                nombreInstitucion='Comercio' 
                titulo='Bachiller con Orientación en Comunicación' 
                anio='2015 - 2021' 
                /></a>

                <a href="">
                <CardEducacion 
                className='card'
                nombreInstitucion='UNICEN' 
                titulo='Tecnicatura universitaria en desarrollo de aplicaciones (TUDAI)' 
                anio='2023 - En progreso' 
                />
                </a>

                <a href="https://drive.google.com/file/d/1eOdd4lyx9nX7GpIommG0YrrFWm7N9GjN/view?usp=sharing" target='_blank'><CardEducacion 
                className='card'
                nombreInstitucion='Municipio de tandil' 
                titulo='Introducción a la Robótica' 
                anio='2024 - 2025' 
                /></a>

                <a href='https://drive.google.com/file/d/1ouCqhgGPOezWtWIS2WwQoLEA4XBynzqG/view?usp=sharing' target='_blank'><CardEducacion 
                className='card'
                nombreInstitucion='Samsung innovation campus' 
                titulo='Curso de inteligencia artificial' 
                anio='2025 - 2025' 
                /></a>

                <a href='https://drive.google.com/file/d/1r72LpDOnHQoIFJPp3T5qh1JNvwZSET_K/view?usp=sharing' target='_blank'><CardEducacion 
                className='card'
                nombreInstitucion='Cilsa' 
                titulo='Testing functional y accesibilidad Web' 
                anio='2025 - 2025' 
                /></a>

                </div>

            </div>
        </>
    )
}

export default Educacion