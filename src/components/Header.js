import {useState} from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import logo from "../images/cashmoneycat.jpg";
import {NavLink} from "react-router-dom";
//import UserLoginForm from "../features/user/UserLoginForm";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <Navbar sticky="top" expand="md" className="mb-4 justify-content-center">  

            <NavbarBrand className="d-flex align-items-center" href="/">
                <img src={logo} alt="Logo" style={{ height: 40, width: 40 }} />
                <h1>How can I cheer you up today?</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>

                    <NavItem>
                        <NavLink className="nav-link" to="/">
                        Home
                        </NavLink>
                    </NavItem>                   

                </Nav>

                {/* <UserLoginForm /> */}
            </Collapse>

        </Navbar>
    );

}

export default Header;