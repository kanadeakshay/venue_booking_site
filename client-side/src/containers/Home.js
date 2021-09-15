import React, { useEffect } from 'react';
import Layout from '../components/Layout/index.layout';
import { Container, Spinner } from 'react-bootstrap';
import VenueCard from '../components/UI/VenueCard';
import { useDispatch, useSelector } from 'react-redux';
import { getVenues } from '../actions/venue.actions';
import { getPublicURL } from '../urlConfig';

function Home() {

    const allVenuesInfo = useSelector(state => state.allVenuesInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVenues());
    }, [])


    if (allVenuesInfo.loading) {
        return (
            <Layout>
                <div className='text-center' style={{ marginTop: '60px' }}>
                    <h1>Getting all venues 🎉</h1>
                    <Spinner animation="border" variant="success" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Container>
                <div className="row" style={{ marginTop: "30px" }}>
                    {
                        allVenuesInfo.allVenues.map((venue) => {
                            const { venueName, address, location, category, price, venuePictures } = venue;
                            return (
                                <div className="col-md-4">
                                    <VenueCard
                                        img1={venuePictures[0].img}
                                        img2={venuePictures[1].img}
                                        venueName={venueName}
                                        category={category}
                                        address={address}
                                        location={location}
                                        price={price}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </Layout>
    )
}

export default Home
