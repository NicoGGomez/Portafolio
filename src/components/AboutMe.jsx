import '../styles/AboutMe.css'
import githubIcon from '../assets/github-logo.svg';

const AboutMe = () => {
    return (
        <>
        <div className="contenedor-general-about-me">

            <img src="../imgs/fotoPerfil.png" alt="Foto de perfil" />

            <div className="contenedor-informacion-about-me">
            <div className="texto-about-me">
                <div className="titulo-about-me">
                <h1>Soy Nicolas Valentin Gomez 💻</h1>
                </div>
                <p>Un desarrollador de software con una fuerte pasión por la tecnología y el crecimiento constante. Me destaco por mi capacidad para trabajar en equipo, adaptarme rápidamente a nuevos entornos y mantener siempre una actitud proactiva frente al aprendizaje.

                Me motiva asumir desafíos, explorar nuevas tecnologías y aportar valor tanto a nivel técnico como humano. Si estás buscando a alguien comprometido, con ganas de crecer y contribuir al equipo, ¡me encantaría que conectemos!</p>
            </div>
            
            <ul className="zona-de-contacto">
                <li><a href=""><img src={githubIcon} alt="GitHub"/></a></li>
            </ul>

            </div>

        </div>
        </>
    )
}

export default AboutMe