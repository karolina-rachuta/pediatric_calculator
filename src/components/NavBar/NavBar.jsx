import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className="navbar-box">
        <Link to="/"><img src="../../images/logo.png" alt="Logo"/></Link>
        <Link to="/login"> Login</Link>
        </header>

    )
}

export default NavBar;