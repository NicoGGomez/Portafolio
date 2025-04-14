import '../styles/Proyectos.css'
import CardProyecto from './CardProyecto'

const Proyectos = () => {
    return (
        <>
            <div className="contenedor contenedor-principal-proyectos">

                <div className="contenedor-titulo">
                    <h2>Proyectos</h2>
                </div>

                <div className="contenedor-proyectos">
                    
                    <a target='_blank' href="https://github.com/NicoGGomez/INTERFACES-2024"><CardProyecto 
                    img='/public/imgs/foto2.png' 
                    nombre='NUMBER BLOCKS' 
                    descripcion='Diseñamos una interfaz interactiva basada en los personajes de Numberblocks, enfocada en mejorar la experiencia digital de niños en edad preescolar. Aplicamos principios de UX para lograr una navegación simple, visual y accesible, y trabajamos la UI con una estética colorida, botones grandes y personajes que guían al usuario. El proyecto combinó diseño, tecnología y educación para crear una experiencia lúdica e intuitiva.' 
                    lenguajes={['HTML', 'CSS', 'Javascript']}  /></a>
                    
                    <a target='_blank' href="https://github.com/NicoGGomez/To-doList"><CardProyecto 
                    img='../imgs/foto1.png' 
                    nombre='TO DO LIST' 
                    descripcion='Desarrollé una aplicación web de ToDo List con sistema de registro e inicio de sesión, orientada a mejorar la organización personal de cada usuario. Implementé una base de datos relacional para almacenar tareas vinculadas a usuarios registrados, asegurando una gestión individualizada. Apliqué principios de usabilidad para lograr una experiencia clara y funcional, con una interfaz simple, botones visibles y navegación fluida. El proyecto combinó desarrollo backend y frontend para crear una herramienta práctica, segura y accesible.' 
                    lenguajes={['HTML', 'CSS', 'PHP', 'PhpMyAdmin',  ]} /></a>
                    
                    <a target='_blank' href="https://github.com/NicoGGomez/HandServoControl-"><CardProyecto 
                    img='/public/imgs/foto3.png' 
                    nombre='HAND-SERVO-MOTOR' 
                    descripcion='Desarrollamos un sistema interactivo utilizando visión por computadora con OpenCV y Python. El sistema detecta gestos de la mano a través de una cámara web y los utiliza para controlar un servomotor en tiempo real. Además, permite generar respuestas dinámicas, como un saludo en pantalla, mejorando la interacción y la experiencia del usuario.' 
                    lenguajes={['Arduino', 'Python']} /></a>

                </div>

            </div>
        </>
    )
}

export default Proyectos