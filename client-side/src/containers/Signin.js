import React, { useState } from 'react'
import Layout from '../components/Layout/index.layout'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginModel } from '../components/UI/LoginModel';

// Images
import client_signin from '../assets/images/client-signin.svg';
import dealer_signin from '../assets/images/dealer-signin.svg';

const Signin = () => {
    document.title = "KAPPA | Sign In";
    const [userModalShow, setUserModalShow] = useState(false);
    const [DealerModalShow, setDealerModalShow] = useState(false);

    const auth = useSelector(state => state.auth);
    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    return (
        <Layout>
            <Container className="text-center">
                <h2>✨Log In Options✨</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Row className='text-center'>
                        <Col md="auto" className="d-flex justify-content-center">
                            <Card style={{ width: '18rem', marginTop: "30px" }}>
                                < Card.Img variant="top" src={client_signin} />
                                <Card.Body>
                                    <Button variant="primary" onClick={() => setUserModalShow(true)}>Client/User</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="auto" className="d-flex justify-content-center">
                            <Card style={{ width: '18rem', marginTop: "30px" }}>
                                < Card.Img variant="top" src={dealer_signin} />
                                <Card.Body>
                                    <Button variant="primary" onClick={() => setDealerModalShow(true)}>Dealer/Renter</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <LoginModel
                    show={userModalShow}
                    onHide={() => setUserModalShow(false)}
                    title='🛑 User/Client Sign In'
                    userType='client'
                />
                <LoginModel
                    show={DealerModalShow}
                    onHide={() => setDealerModalShow(false)}
                    title='🛑 Dealer/Renter Sign In'
                    userType='dealer'
                />
            </Container>
        </Layout >
    )
}

export default Signin
