import '../styles/Experiencia.css'
import CardExp from './CardExp'

const Experiencia = () => {
    return (
        <>
            <div className="contenedor contenedor-general-exp">

                <div className="contenedor-zona-titulo">
                    <h2>Experiencia</h2>
                </div>

                <CardExp 
                nombreEmpresa={'Club Chicas Programadoras (CCP)'}
                descripcionLabor={'Durante mi experiencia como profesor, dicté el curso de Introducción a la Programación, brindando a los estudiantes una base sólida en lógica computacional y pensamiento algorítmico. A lo largo del curso, también enseñé HTML y CSS, guiando a los alumnos en la creación de sitios web estáticos y fomentando buenas prácticas de maquetación. Finalmente, introduje JavaScript como lenguaje de programación del lado del cliente, permitiendo a los estudiantes desarrollar funcionalidades interactivas y comprender los fundamentos de la programación web dinámica. Mi enfoque se centró en explicar los conceptos de forma clara y práctica, adaptándome al ritmo de cada grupo para garantizar una experiencia de aprendizaje accesible y enriquecedora.'}
                anios={'8/2024 - 11/2024'}
                />

            </div>
        </>
    )
}

export default Experiencia 