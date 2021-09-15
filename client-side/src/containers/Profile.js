import React from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import Layout from '../components/Layout/index.layout';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import VenueCard from '../components/UI/VenueCard';
import { ProfileCard, UserInfoCard } from '../components/UI/ProfileCards';
import { ClientHistory } from '../components/UI/ClientHistory';

const ProfilePage = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const userInfo = useSelector(state => state.userInfo);

    if (!auth.authenticate) {
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
                    <div className="row gutters-sm" style={{ marginTop: '30px' }}>
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
                                <ClientHistory />
                            </div>
                            {
                                userInfo.user.role === 'dealer' ?
                                    <>
                                        <Button variant="success">+ New Venue</Button>
                                        <hr></hr>
                                        <div className="row gutters-sm">
                                            <h4 style={{ marginBottom: "15px" }}>Your All venues</h4>
                                            <div className="col-sm-6 mb-3">
                                                <VenueCard />
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <VenueCard />
                                            </div>
                                        </div>
                                    </>
                                    : <></>
                            }
                        </div>
                    </div>

                </div>
            </Container >
        </Layout >
    );
}

export default ProfilePage