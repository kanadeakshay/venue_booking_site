import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/auth.actions';
import { userInfo } from '../../actions/userInfo.actions';
import { getOwnerVenues } from '../../actions/venue.actions';
import getDeals from '../../actions/dealsHistory.actions';
import Avatar from 'boring-avatars';
import './layout.style.css';

const Layout = (props) => {

    const auth = useSelector(state => state.auth);
    const serverStatus = useSelector(state => state.serverStatus);
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
        dispatch(getDeals(role, _id))
    }

    const LoggedInLinks = (props) => {
        const { _id } = auth.user;
        return (
            <Nav className="test">
                <li className="nav-item">
                    <Link to={`/profile/${_id}`} className="nav-link" onClick={getUserInfo} style={{ textTransform: 'capitalize' }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="avatar-border">
                                <Avatar
                                    size={25}
                                    name={auth.user.fullName}
                                    variant="bauhaus"
                                    colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
                                />
                            </div>
                            <span style={{ marginLeft: "5px", textTransform: "uppercase" }}>{auth.user.firstName}</span>
                        </div>
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

    if (serverStatus.message === null) {
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
    } else {
        return (
            <>
                <h1 className="text-center" style={{ marginTop: "80px" }}>{serverStatus.message}</h1>
            </>
        )
    }

}

export default Layout