import '../styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="nav">
                <ul>
                    <li><a href="">Sobre mi 👨‍💼</a></li>
                    <li><a href="">Proyectos 🛠️</a></li>
                    <li><a href="">Contacto 📞</a></li>
                    <li><button>modo</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header