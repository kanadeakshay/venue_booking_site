import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getOneVenue } from '../../actions/venue.actions';
import { getPublicURL } from '../../urlConfig';
import { ImgsCard } from './ImgsCard';
import { useDispatch } from 'react-redux';
import BookingModel from './BookingModel';

const VenueCard = (props) => {

    const [bookingModalShow, setBookingModalShow] = useState(false);
    const { img1, img2, category, venueName, _id, price, location, address, style, isDelete } = props;

    const dispatch = useDispatch()
    const getVenueInfo = () => {
        dispatch(getOneVenue(_id));
    }

    return (
        <div className="card mb-4 box-shadow">
            <ImgsCard
                img1={getPublicURL(img1)}
                img2={getPublicURL(img2)}
                alt='venue picture'
                style={style}
            />
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{venueName}</h5>
                    <h5 className="card-title">₹ {price}</h5>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{location}, {address}</h6>

                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/venue/${_id}`} className="btn-group">
                        <Button variant="primary" onClick={getVenueInfo}>Details</Button>{' '}
                    </Link>
                    {
                        isDelete === true ?
                            <Button variant="danger">Delete</Button>
                            :
                            <Button variant="danger" onClick={() => setBookingModalShow(true)}>Book</Button>
                    }
                    <BookingModel
                        _id={_id}
                        venueName={venueName}
                        price={price}
                        category={category}
                        address={address}
                        location={location}
                        show={bookingModalShow}
                        onHide={() => setBookingModalShow(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default VenueCard