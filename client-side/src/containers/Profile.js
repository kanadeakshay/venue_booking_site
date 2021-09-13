import React from 'react';
import { Container, Spinner, Card, Button } from 'react-bootstrap';
import Layout from '../components/Layout/index.layout';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

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
                <div className="container">
                    <div className="main-body" style={{ marginTop: '30px' }}>

                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User" className="rounded-circle" style={{ width: '100px' }} />
                                            <div className="mt-3">
                                                <h4 style={{ textTransform: 'capitalize' }}>{fullName}</h4>
                                                <p className="text-secondary mb-1">Email - {email}</p>
                                                <p className="text-secondary mb-1">Contact no - {contactNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">User Type</h6>
                                            <span className="text-secondary" style={{ textTransform: 'capitalize' }}>{role}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Username</h6>
                                            <span className="text-secondary">{username}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">User since</h6>
                                            <span className="text-secondary">{createdAt}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h4>Last few bookings</h4>
                                        <hr style={{ width: '30%' }} />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">User Type</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary" style={{ textTransform: 'capitalize' }}>
                                                {role}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary" style={{ textTransform: 'capitalize' }}>
                                                {fullName}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Username</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {username}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="row gutters-sm">
                                    <div class="col-sm-6 mb-3">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                                <small>Web Design</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Website Markup</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>One Page</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Mobile Template</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Backend API</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 mb-3">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                                <small>Web Design</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Website Markup</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>One Page</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Mobile Template</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <small>Backend API</small>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}



                            </div>
                        </div>

                    </div>
                </div>
            </Container >
        </Layout >
    );
}

export default ProfilePage