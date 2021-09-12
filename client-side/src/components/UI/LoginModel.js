import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Input from './Input';
import { userlogin } from '../../actions/auth.actions';
import { useSelector, useDispatch } from 'react-redux';

const LoginModel = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = { email, password }
        dispatch(userlogin(user, props.userType));
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
                <Button onClick={props.onHide} >X</Button>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={userLogin}>
                    <Input
                        label='Email address'
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
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export {
    LoginModel
}