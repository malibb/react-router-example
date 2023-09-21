import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Nav
                className="my-2"
            >
                <NavItem className="m-2">
                    <Link to="/">Principal</Link>
                </NavItem>
                <NavItem className="m-2">
                    <Link to="/about">Sobre Nosotros</Link>

                </NavItem>
                <NavItem className="m-2">
                    <Link to="/contact">¡Contáctanos!</Link>

                </NavItem>
            </Nav>
        </>
    );
};

export default Navbar;