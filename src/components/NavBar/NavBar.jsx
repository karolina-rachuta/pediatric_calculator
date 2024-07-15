import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

function NavBar() {
    return (
        <header className="navbar-box">
        <Link to="/"><img src={logo} alt="Logo" className="logo-style"/></Link>
        <Link to="/login" className='login-nav'> Login</Link>
        </header>

    )
}

export default NavBar;