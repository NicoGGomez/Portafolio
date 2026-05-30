import '../styles/Experiencia.css'
import CardExp from './CardExp'

const Experiencia = () => {
    return (
        <>
            <div className="contenedor contenedor-general-exp">

                <div className="contenedor-zona-titulo-exp">
                    <h2>Experiencia</h2>
                </div>

                <CardExp className='card'
                linkEmpresa= 'https://elosdigital.com/'
                nombreEmpresa={'Elos Digital'}
                descripcionLabor={'Durante mi pasantía en Elos Digital, participé en el diseño y maquetado de interfaces web utilizando Figma. Mi trabajo consistió en desarrollar propuestas visuales para un sitio web, organizando la estructura, distribución de elementos y experiencia de usuario. A lo largo del proyecto, colaboré en la creación y ajuste de prototipos, aplicando criterios de diseño moderno, usabilidad y coherencia visual. Esta experiencia me permitió fortalecer mis habilidades en diseño de interfaces, trabajo en equipo y planificación de proyectos digitales.'}
                anios={'5/2026 - Actualidad'}
                />

                <CardExp className='card'
                linkEmpresa='https://outlier.ai/'
                nombreEmpresa={'OUTLIER'}
                descripcionLabor={'Durante mi experiencia en Outlier, trabajé evaluando el comportamiento de distintos modelos de inteligencia artificial en diversas tareas. Me enfoqué en identificar errores, inconsistencias o respuestas inesperadas, analizando su desempeño desde una mirada crítica y detallada. A lo largo del proceso, elaboré y modifiqué reportes que reflejaban el rendimiento de los modelos, proponiendo mejoras y aportando observaciones clave para su optimización. Mi rol combinó análisis técnico y pensamiento reflexivo, buscando siempre aportar a la mejora continua de las herramientas evaluadas.'}
                anios={'2/2025 - 6/2025'}
                />

                <CardExp className='card'
                linkEmpresa='https://www.chicasprogramadoras.club/'
                nombreEmpresa={'Club Chicas Programadoras (CCP)'}
                descripcionLabor={'Durante mi experiencia como profesor, dicté el curso de Introducción a la Programación, brindando a los estudiantes una base sólida en lógica computacional y pensamiento algorítmico. A lo largo del curso, también enseñé HTML y CSS, guiando a los alumnos en la creación de sitios web estáticos y fomentando buenas prácticas de maquetación. Finalmente, introduje JavaScript como lenguaje de programación del lado del cliente, permitiendo a los estudiantes desarrollar funcionalidades interactivas y comprender los fundamentos de la programación web dinámica. Mi enfoque se centró en explicar los conceptos de forma clara y práctica, adaptándome al ritmo de cada grupo para garantizar una experiencia de aprendizaje accesible y enriquecedora.'}
                anios={'8/2024 - 11/2024'}
                />

            </div>
        </>
    )
}

export default Experiencia 