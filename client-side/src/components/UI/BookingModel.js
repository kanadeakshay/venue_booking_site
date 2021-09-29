import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../helpers/axios';

const BookingModel = (props) => {

    const { _id, venueName, price, category, location, address, ownerId } = props;
    const [date, setDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);

    const auth = useSelector(state => state.auth);

    const gotoCheckoutPage = async (e) => {
        if (!auth.authenticate) {
            return <Redirect to={'/signin'} />
        }
        else {
            e.preventDefault();
            setIsLoading(true);
            const dealInfo = {
                venueId: _id,
                venueName: venueName,
                venueOwnerId: ownerId,
                bill: price,
                eventDate: date.toString()
            }
            console.log(dealInfo);
            const res = await axios.post(`/checkout`, dealInfo);
            localStorage.setItem('dealId', JSON.stringify(res.data.dealId));
            window.location.href = res.data.url;
        }
    }

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
                <h5>
                    <span style={{ color: 'red' }}><strong>Note: </strong></span>
                    Before booking always contact owner
                </h5>

                <Form onSubmit={gotoCheckoutPage}>
                    <Row>
                        <Col md={6}>
                            <Input
                                label='Select the Date for Event'
                                type='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                label='Venue Name'
                                type='text'
                                value={venueName}
                                isReadOnly={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Input
                                label='Category'
                                type='text'
                                value={category}
                                isReadOnly={true}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                label='Location'
                                type='text'
                                value={location}
                                isReadOnly={true}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Input
                                label='Address'
                                type='text'
                                value={address}
                                isReadOnly={true}
                            />
                        </Col>
                        <Col md={6}>
                            <Input
                                label='Bill'
                                type='number'
                                value={price}
                                isReadOnly={true}
                                message='With Service tax included in Bill'
                            />
                        </Col>
                    </Row>

                    <div className="text-center">
                        <Button variant="success" type="submit">
                            {
                                isLoading ?
                                    <>
                                        <Spinner animation="border" as="span" size="sm" variant="light" />
                                        {" "} Processing...
                                    </>
                                    :
                                    <span>Payment</span>
                            }
                        </Button>

                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default BookingModel