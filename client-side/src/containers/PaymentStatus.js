import React, { useState, useEffect } from 'react';
import { Button, Spinner, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { paymentSuccess, paymentCanceled } from '../actions/checkout.actions';

const PaymentStatus = () => {
    const dispatch = useDispatch();
    const [checkoutMessage, setCheckoutMessage] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            dispatch(paymentSuccess(JSON.parse(localStorage.getItem("dealId"))));
            setCheckoutMessage("Booking confirmed 😇 !!")
        }

        if (query.get("canceled")) {
            dispatch(paymentCanceled(JSON.parse(localStorage.getItem("dealId"))));
            setCheckoutMessage("Failed to book the venue 😥 !!")
        }
        localStorage.removeItem("dealId");
    }, [])

    return (
        <Container className="text-center" style={{ marginTop: "80px" }}>
            {
                checkoutMessage === "Booking confirmed 😇 !!" ?
                    <h2 style={{ color: 'green' }}>{checkoutMessage}</h2>
                    :
                    <h2 style={{ color: 'red' }}>{checkoutMessage}</h2>
            }

            <Link to={'/'} className="btn btn-primary">🏡 Home Page</Link>
        </Container>
    )
}

export {
    PaymentStatus
}