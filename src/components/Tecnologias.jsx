import '../styles/Tecnologias.css'
import CardConocimiento from './CardConocimiento';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss, faFigma, faGit, faHtml5, faJava, faJs, faPython, faReact} from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Tecnologias = () => {
    return (
        <section className='contenedor contenedor-tecnologias'>
            <div className="contenedor-zona-titulo">
            <h2>Stack & Conocimientos Técnicos</h2>
            </div>
            <div className="contenedor-iconos">
                <ul>
                    <li><FontAwesomeIcon title='Angular' icon={faAngular} size="4x" /></li>
                    <li><FontAwesomeIcon title='React' icon={faReact} size="4x" /></li>
                    <li><FontAwesomeIcon title='Php' icon={faPhp} size="4x" /></li>
                    <li><FontAwesomeIcon title='Html' icon={faHtml5} size="4x" /></li>
                    <li><FontAwesomeIcon title='Css' icon={faCss} size="4x" /></li>
                    <li><FontAwesomeIcon title='JavaScript' icon={faJs} size="4x" /></li>
                    <li><FontAwesomeIcon title='Java' icon={faJava} size="4x" /></li>
                    <li><FontAwesomeIcon title='Figma' icon={faFigma} size="4x" /></li>
                    <li><FontAwesomeIcon title='Git' icon={faGit} size="4x" /></li>
                    <li><FontAwesomeIcon title='Python' icon={faPython} size="4x" /></li>
                    <li><FontAwesomeIcon title='PostgreSQL' icon={faDatabase} size="4x" /></li>
                </ul>
            </div>
            <div className="contenedor-conocimientos">

                <div className="contenedor-listas-conocimientos">
                    
                <CardConocimiento 
                className="contenedor-lista"
                titulo={"Desarrollo Web"}
                conocimientos={["Patrón MVC", "Diseño responsive", "APIs REST"]}
                />

                <CardConocimiento 
                className="contenedor-lista"
                titulo={"Estructuras de Datos y Algoritmos"}
                conocimientos={["Árboles Binarios", "Grafos", "Greedy"]}
                />

                <CardConocimiento 
                className="contenedor-lista"
                titulo={"Redes y Sistemas"}
                conocimientos={["Modelo TCP/IP", "Netfilter / IPTables", "Routing y Switching"]}
                />
                
                </div>
            </div>
        </section>
    )
}

export default Tecnologias