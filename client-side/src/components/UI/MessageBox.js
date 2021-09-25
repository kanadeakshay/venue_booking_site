import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MessageBox = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header>
                <Modal.Title>Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 style={{ marginBottom: "10px" }}>{props.message}</h5>
                <Button variant="primary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default MessageBox