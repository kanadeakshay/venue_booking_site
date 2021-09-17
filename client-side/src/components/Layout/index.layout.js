import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/auth.actions';
import { userInfo } from '../../actions/userInfo.actions';
import { getOwnerVenues } from '../../actions/venue.actions';

const Layout = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    const getUserInfo = () => {
        const { _id, role } = auth.user;
        dispatch(userInfo(_id, role));
        if (role === 'dealer') {
            dispatch(getOwnerVenues(_id));
        }
    }

    const LoggedInLinks = (props) => {
        const { _id } = auth.user;
        return (
            <Nav>
                <li className="nav-item">
                    <Link to={`/profile/${_id}`} className="nav-link" onClick={getUserInfo} style={{ textTransform: 'capitalize' }}>
                        🐱‍👤{auth.user.firstName}
                    </Link>
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
                    <NavLink to={`/signin`} className="nav-link">SIGN IN</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to={`/signup`} className="nav-link">SIGN UP</NavLink>
                </li>
            </Nav>
        );
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ marginBottom: "30px" }}>
                <Container>
                    <Link to={`/`} className="navbar-brand">🤝KAPPA</Link>
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