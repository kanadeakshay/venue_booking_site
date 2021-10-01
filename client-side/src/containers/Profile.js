import React, { useState, useEffect } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import Layout from '../components/Layout/index.layout';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import VenueCard from '../components/UI/VenueCard';
import { ProfileCard, UserInfoCard } from '../components/UI/ProfileCards';
import { DealsHistory } from '../components/UI/DealsHistory';
import { isEmpty } from '../helpers/isObjEmpty';
import AddVenueModel from '../components/UI/AddVenueModel';
import getDeals from '../actions/dealsHistory.actions';

const ProfilePage = (props) => {
    document.title = "KAPPA | Profile";
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const userInfo = useSelector(state => state.userInfo);
    const ownerVenues = useSelector(state => state.ownerVenues);
    const deals = useSelector(state => state.deals);

    const [addVenueModalShow, setAddVenueModalShow] = useState(false);

    if (auth.token === null) {
        return <Redirect to={'/'} />
    }
    if (userInfo.loading) {
        return (
            <Layout>
                <div className='text-center' style={{ marginTop: '60px' }}>
                    <h1>Getting your info 🎉</h1>
                    <Spinner animation="border" variant="success" />
                </div>
            </Layout>
        );
    }

    const { fullName, email, contactNumber, role, username, createdAt } = userInfo.user;

    return (
        <Layout>
            <Container>
                <div className="main-body" >
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <ProfileCard
                                fullName={fullName}
                                email={email}
                                contactNumber={contactNumber}
                            />
                            <UserInfoCard
                                role={role}
                                username={username}
                                createdAt={createdAt}
                            />
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <DealsHistory
                                    role={role}
                                    allDeals={deals.allDeals}
                                />
                            </div>
                            {
                                userInfo.user.role === 'dealer' ?
                                    <>
                                        <Button
                                            variant="success" onClick={() => setAddVenueModalShow(true)}>
                                            + New Venue
                                        </Button>

                                        <hr></hr>
                                        <div className="row gutters-sm">
                                            <h4 style={{ marginBottom: "15px" }}>Your All venues</h4>
                                            {
                                                isEmpty(ownerVenues.allvenues) ?
                                                    <h5 className="text-muted">
                                                        Currently you don't have any venues to rent😢
                                                    </h5>
                                                    :
                                                    ownerVenues.allvenues.map((venue) => {
                                                        const { _id, venueName, address, location, category, price, venuePictures } = venue;
                                                        return (
                                                            <div className="col-sm-6 mb-3">
                                                                <VenueCard
                                                                    img1={venuePictures[0].img}
                                                                    img2={venuePictures[1].img}
                                                                    venueName={venueName}
                                                                    _id={_id}
                                                                    category={category}
                                                                    address={address}
                                                                    location={location}
                                                                    price={price}
                                                                    style={{ width: "800px", height: "200px" }}
                                                                    isDelete={true}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                            }
                                        </div>
                                    </>
                                    : <></>
                            }
                            <AddVenueModel
                                show={addVenueModalShow}
                                onHide={() => setAddVenueModalShow(false)}
                            />
                        </div>
                    </div>

                </div>
            </Container >
        </Layout >
    );
}

export default ProfilePage