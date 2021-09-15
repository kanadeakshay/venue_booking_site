import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/images/client-signin.png';
import img2 from '../../assets/images/dealer-signin.png';
import { getPublicURL } from '../../urlConfig';
import { ImgsCard } from './ImgsCard';

const VenueCard = (props) => {
    const { img1, img2, category, venueName, price, location, address } = props;
    return (
        <div className="card mb-4 box-shadow">
            <ImgsCard
                img1={getPublicURL(img1)}
                img2={getPublicURL(img2)}
                alt='venue picture'
            />
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{venueName}</h5>
                    <h5 className="card-title">₹ {price}</h5>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{location}, {address}</h6>

                <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="venue" className="btn-group">
                        <Button variant="primary">Details</Button>{' '}
                    </NavLink>
                    <Button variant="danger">Book</Button>

                </div>
            </div>
        </div>
    )
}


const VenueCardV1 = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <ImgsCard
                img1={img1}
                img2={img2}
                alt='venue picture'
            />
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Category</Card.Subtitle>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Title>Price</Card.Title>
                </div>
                <Card.Subtitle className="mb-2 text-muted">Location, Address</Card.Subtitle>

                <NavLink to="venue">
                    <Button variant="primary" size="sm">Details</Button>{' '}
                </NavLink>
                <Button variant="danger" size="sm">Book</Button>
            </Card.Body>
        </Card>
    );
}

export default VenueCard