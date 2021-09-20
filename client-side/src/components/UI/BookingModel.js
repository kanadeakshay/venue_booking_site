import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Input from './Input';

const BookingModel = (props) => {
    const { _id, venueName, price, category, location, address } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Booking Details📝
                </Modal.Title>
                <Button onClick={props.onHide}>X</Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Input
                        label='Select the Date for Event'
                        type='date'
                    />
                    <Row>
                        <Col md={6}>
                            <Input
                                label='Venue Name'
                                type='text'
                                value={venueName}
                                isReadOnly={true}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                label='Category'
                                type='text'
                                value={category}
                                isReadOnly={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Input
                                label='Location'
                                type='text'
                                value={location}
                                isReadOnly={true}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                label='Address'
                                type='text'
                                value={address}
                                isReadOnly={true}
                            />
                        </Col>
                    </Row>
                    <Input
                        label='Bill'
                        type='number'
                        value={price}
                        isReadOnly={true}
                    />
                    <div className="text-center">
                        <Button variant="success">Payment</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default BookingModel