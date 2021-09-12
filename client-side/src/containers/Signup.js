import React, { useState } from 'react';
import Layout from '../components/Layout/index.layout';
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import Input from '../components/UI/Input';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { userRegister } from '../actions/register.actions';

const Signup = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        const userInfo = { userType, firstName, lastName, contactNumber, email, password };
        dispatch(userRegister(userInfo));
    }

    const auth = useSelector(state => state.auth);
    const regStats = useSelector(state => state.regStats);
    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }
    if (regStats.loading) {
        return (
            <Layout>
                <div className='text-center' style={{ marginTop: '60px' }}>
                    <h1>Saving your info 🎉</h1>
                    <Spinner animation="border" variant="success" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Container>
                <h2 className='text-center' style={{ marginTop: '30px' }}>SIGN UP 📝</h2>
                <Row style={{ marginTop: '30px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={register}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label='First Name'
                                        type='text'
                                        placeholder='First Name'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label='Last Name'
                                        type='text'
                                        placeholder='Last Name'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>

                            <Input
                                label='Contact no'
                                type='tel'
                                placeholder='Enter your mob no'
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />

                            <Row>
                                <Col >
                                    <div className="mb-3">
                                        <Form.Label>Choose User Type</Form.Label>
                                        <br />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            name='userType'
                                            label='Client'
                                            id='Client'
                                            value='client'
                                            onChange={(e) => setUserType(e.target.value)}
                                        />
                                        <Form.Check
                                            inline
                                            type='radio'
                                            name='userType'
                                            label='Dealer'
                                            id='Dealer'
                                            value='dealer'
                                            onChange={(e) => setUserType(e.target.value)}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Input
                                label='Email Address'
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label='Password'
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>Sign Up</Button>
                            <Button variant="danger" type="reset" style={{ marginLeft: '10px' }}>Reset</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default Signup