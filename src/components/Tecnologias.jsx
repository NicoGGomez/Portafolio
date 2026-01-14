import '../styles/Tecnologias.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss, faFigma, faGit, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';

const Tecnologias = () => {
    return (
        <section className='contenedor contenedor-tecnologias'>
            <div className="contenedor-zona-titulo">
            <h2>Stack</h2>
            </div>
            <div className="contenedor-iconos">
                <ul>
                    <li><FontAwesomeIcon title='angular' icon={faAngular} size="4x" /></li>
                    <li><FontAwesomeIcon title='react' icon={faReact} size="4x" /></li>
                    <li><FontAwesomeIcon title='php' icon={faPhp} size="4x" /></li>
                    <li><FontAwesomeIcon title='html' icon={faHtml5} size="4x" /></li>
                    <li><FontAwesomeIcon title='css' icon={faCss} size="4x" /></li>
                    <li><FontAwesomeIcon title='css' icon={faJs} size="4x" /></li>
                    <li><FontAwesomeIcon title='java' icon={faJava} size="4x" /></li>
                    <li><FontAwesomeIcon title='figma' icon={faFigma} size="4x" /></li>
                    <li><FontAwesomeIcon title='git' icon={faGit} size="4x" /></li>
                    <li><FontAwesomeIcon title='python' icon={faPython} size="4x" /></li>
                </ul>
            </div>
        </section>
    )
}

export default Tecnologias