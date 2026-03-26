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

                    <a target='_blank' href="https://clubchicasprogramadorasquiz.netlify.app/"><CardProyecto 
                    img='../imgs/foto7.png' 
                    nombre='Quiz chicas programadoras' 
                    descripcion='Diseñé un quiz interactivo orientado a chicas interesadas en programación, enfocado en brindar recomendaciones personalizadas de cursos según sus intereses y respuestas. La aplicación guía al usuario mediante una serie de preguntas dinámicas, analizando sus elecciones para sugerir el camino de aprendizaje más adecuado. Se aplicaron principios de UX/UI para lograr una experiencia clara, inclusiva y atractiva, con una interfaz intuitiva y fluida. El proyecto combina desarrollo frontend con JavaScript, HTML y CSS, implementando lógica condicional y manejo de estados para procesar resultados en tiempo real. Está orientado a facilitar la toma de decisiones y acompañar a nuevas programadoras en sus primeros pasos dentro del mundo IT.' 
                    lenguajes={['Javascript', 'HTML' , 'CSS']}  /></a>

                    <a target='_blank' href="https://noproc.netlify.app/"><CardProyecto 
                    img='../imgs/foto8.png' 
                    nombre='NoProc' 
                    descripcion='Creé NoProc, un agente web interactivo enfocado en combatir la procrastinación mediante una experiencia conversacional guiada por voz. La aplicación utiliza audios generados dinámicamente para acompañar al usuario paso a paso, incentivando la acción y la continuidad en tareas. Se aplicaron principios de UX/UI para lograr una interacción fluida, clara y atractiva, combinando una interfaz minimalista con un sistema de estados que simula un diálogo en tiempo real. La solución integra desarrollo frontend en JavaScript con un backend en Node.js para la generación de audio, optimizando la carga y reproducción mediante manejo asincrónico y cacheo. El proyecto está orientado a brindar una experiencia inmersiva, motivacional y eficiente.' 
                    lenguajes={['Node', 'Javascript' , 'CSS', 'API']}  /></a>

                    <a target='_blank' href="https://nicoggomez.github.io/TPE-INTERFACES/Segunda-entrega/index.html"><CardProyecto 
                    img='../imgs/foto5.png' 
                    nombre='Galaxy games' 
                    descripcion='Desarrollé Galaxy Games, una plataforma web orientada al entretenimiento interactivo, centrada en la exploración y disfrute de juegos desarrollados con tecnologías web. Además del sitio principal, implementé distintos juegos utilizando Canvas, incorporando lógica de animación, detección de colisiones y control de eventos en tiempo real. La aplicación permite a los usuarios navegar entre experiencias dinámicas, ofreciendo una interfaz fluida, atractiva y fácil de usar. Se aplicaron principios de UX/UI para mejorar la jugabilidad y la accesibilidad, logrando una experiencia inmersiva. El proyecto integra desarrollo frontend con JavaScript, HTML y CSS, combinando programación visual con estructuras lógicas complejas. Está orientado a brindar una experiencia divertida y accesible para los usuarios dentro del entorno web.' 
                    lenguajes={['Javascript', 'HTML' , 'CSS']}  /></a>

                    <a target='_blank' href="https://github.com/NicoGGomez/Lupulo-Libre"><CardProyecto 
                    img='../imgs/foto6.png' 
                    nombre='Buscador de peliculas' 
                    descripcion='Realicé un buscador de películas utilizando React, enfocado en permitir a los usuarios encontrar contenido de forma rápida y dinámica. La aplicación consume una API externa para obtener información actualizada, gestionando solicitudes asincrónicas y renderizado en tiempo real. Permite realizar búsquedas parciales, mostrando resultados a medida que el usuario escribe, mejorando la experiencia de uso. Se implementó manejo de estados y componentes reutilizables para organizar la lógica y la interfaz. El proyecto integra JavaScript, HTML y CSS dentro del ecosistema de React, aplicando buenas prácticas de desarrollo frontend. Está orientado a ofrecer una herramienta ágil e intuitiva para la exploración de contenido cinematográfico.' 
                    lenguajes={['React', 'HTML' , 'CSS']}  /></a>

                    <a target='_blank' href="https://github.com/NicoGGomez/Lupulo-Libre"><CardProyecto 
                    img='../imgs/foto4.png' 
                    nombre='LÚPULO LIBRE' 
                    descripcion='Desarrolle Lúpulo Libre, una aplicación web interactiva centrada en la gestión y exploración de cervezas artesanales. Aplicamos principios de diseño UX/UI para ofrecer una navegación clara, intuitiva y visualmente atractiva, integrando una interfaz moderna con secciones bien definidas para usuarios y administradores. La experiencia incluye una vista general del catálogo, formularios de contacto, y un panel exclusivo para admins con funcionalidades de gestión de productos. El proyecto combina desarrollo frontend con Angular y diseño enfocado en la usabilidad para brindar una experiencia accesible y eficiente.' 
                    lenguajes={['Angular', 'TypeScript' , 'CSS']}  /></a>
                    
                    <a target='_blank' href="https://github.com/NicoGGomez/INTERFACES-2024"><CardProyecto 
                    img='../imgs/foto2.png' 
                    nombre='NUMBER BLOCKS' 
                    descripcion='Diseñamos una interfaz interactiva basada en los personajes de Numberblocks, enfocada en mejorar la experiencia digital de niños en edad preescolar. Aplicamos principios de UX para lograr una navegación simple, visual y accesible, y trabajamos la UI con una estética colorida, botones grandes y personajes que guían al usuario. El proyecto combinó diseño, tecnología y educación para crear una experiencia lúdica e intuitiva.' 
                    lenguajes={['HTML', 'CSS', 'Javascript']}  /></a>
                    
                    <a target='_blank' href="https://github.com/NicoGGomez/To-doList"><CardProyecto 
                    img='../imgs/foto1.png' 
                    nombre='TO DO LIST' 
                    descripcion='Desarrollé una aplicación web de ToDo List con sistema de registro e inicio de sesión, orientada a mejorar la organización personal de cada usuario. Implementé una base de datos relacional para almacenar tareas vinculadas a usuarios registrados, asegurando una gestión individualizada. Apliqué principios de usabilidad para lograr una experiencia clara y funcional, con una interfaz simple, botones visibles y navegación fluida. El proyecto combinó desarrollo backend y frontend para crear una herramienta práctica, segura y accesible.' 
                    lenguajes={['HTML', 'CSS', 'PHP', 'PhpMyAdmin',  ]} /></a>
                    
                    <a target='_blank' href="https://github.com/NicoGGomez/HandServoControl-"><CardProyecto 
                    img='../imgs/foto3.png' 
                    nombre='HAND-SERVO-MOTOR' 
                    descripcion='Desarrollamos un sistema interactivo utilizando visión por computadora con OpenCV y Python. El sistema detecta gestos de la mano a través de una cámara web y los utiliza para controlar un servomotor en tiempo real. Además, permite generar respuestas dinámicas, como un saludo en pantalla, mejorando la interacción y la experiencia del usuario.' 
                    lenguajes={['Arduino', 'Python']} /></a>

                </div>

            </div>
        </>
    )
}

export default Proyectos