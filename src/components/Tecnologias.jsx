import '../styles/Tecnologias.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss, faFigma, faGit, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';

const Tecnologias = () => {
    return (
        <section className='contenedor contenedor-tecnologias'>
            <div className="contenedor-zona-titulo">
            <h2>Stack</h2>
            </div>
            <div className="contenedor-iconos">
                <ul>
                    <li><FontAwesomeIcon icon={faReact} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faPhp} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faHtml5} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faCss} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faJs} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faJava} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faFigma} size="3x" /></li>
                    <li><FontAwesomeIcon icon={faGit} size="3x" /></li>
                </ul>
            </div>
        </section>
    )
}

export default Tecnologias