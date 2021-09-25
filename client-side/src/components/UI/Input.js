import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.label}</Form.Label>
            {props.isReadOnly ?
                <Form.Control
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    required
                    readOnly
                />
                :
                <Form.Control
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    required
                />
            }
        </Form.Group>
    )
}

export default Input
