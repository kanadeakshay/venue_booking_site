import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/auth.actions';

const Layout = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    const LoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout} style={{ textTransform: 'capitalize' }}>
                        Welcome {auth.user.firstName}
                    </span>
                </li>
                <li className="nav-item" style={{ cursor: "pointer" }}>
                    <span className="nav-link" onClick={logout}>SIGN OUT</span>
                </li>
            </Nav>
        );
    }

    const NotLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="signin" className="nav-link">SIGN IN</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="signup" className="nav-link">SIGN UP</NavLink>
                </li>
            </Nav>
        );
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="navbar-brand">🤝KAPPA</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        {auth.authenticate ? LoggedInLinks() : NotLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {props.children}
        </>
    )
}

export default Layout