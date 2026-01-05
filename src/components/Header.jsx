import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <nav className="navbar bg-primary" data-bs-theme="dark">
            <ul>
                <li><NavLink to="/">Eventos</NavLink></li>
                <li><NavLink to="/favoritos">Favoritos</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;