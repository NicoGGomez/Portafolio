import '../styles/AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const AboutMe = () => {
    return (
        <>
        <div className="contenedor contenedor-general-about-me">

            <div className="contenedor-informacion-about-me">

                <img src="../imgs/fotoPerfil.png" alt="Foto perfil" />

                <div className="texto-about-me">
                    <div className="titulo-about-me">
                    <h1>Soy Nicolás Valentín Gómez 💻</h1>
                    </div>
                    <p>Un desarrollador de software con una fuerte pasión por la tecnología y el crecimiento constante. Me destaco por mi capacidad para trabajar en equipo, adaptarme rápidamente a nuevos entornos y mantener siempre una actitud proactiva frente al aprendizaje. 
                        
                    Me motiva asumir desafíos, explorar nuevas tecnologías y aportar valor tanto a nivel técnico como humano. Si estás buscando a alguien comprometido, con ganas de crecer y contribuir al equipo, ¡me encantaría que conectemos!</p>

                    <ul className="zona-de-contacto">
                        <li><a href="https://github.com/NicoGGomez" target='_blank'>
                            <FontAwesomeIcon title='GitHub' className='icon  github-icon' icon={faGithub} size="3x" />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/nicolas-valentin-gomez-7389a824a/" target='_blank'>
                            <FontAwesomeIcon title='Linkedin' className='icon linkedin-icon' icon={faLinkedin} size="3x" />
                        </a></li>
                        <li><a href="https://www.instagram.com/nicoogomez.__/" target='_blank'>
                            <FontAwesomeIcon title='Instagram' className='icon  instagram-icon' icon={faInstagram} size="3x" />
                        </a></li>
                        <li><a href="https://wa.me/5492494494850" target='_blank'>
                            <FontAwesomeIcon title='WhatsApp' className='icon  whatsapp-icon' icon={faWhatsapp} size="3x" />
                        </a></li>
                        <li><a href="https://drive.google.com/file/d/1nMaABMvKtMtZG0GMgfLAzf-elugyCUEA/view?usp=sharing" target='_blank'>
                            <FontAwesomeIcon title='CV' className='icon cv-icon' icon={faFile} size="3x" />
                        </a></li>
                    </ul>

                </div>
            
                

            </div>

        </div>
        </>
    )
}

export default AboutMe