import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import Layout from '../components/Layout/index.layout';
import { ImgsCard } from '../components/UI/ImgsCard';

// Images
import img1 from '../assets/images/client-signin.png';
import img2 from '../assets/images/dealer-signin.png';


const VenuePage = (props) => {
    return (
        <Layout>
            <Container>
                <section className="mb-5" style={{ marginTop: "50px" }}>
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <ImgsCard
                                img1={img1}
                                img2={img2}
                                alt='venue picture'
                            />
                        </div>

                        <div className="col-md-6">
                            <h5>Venue Name</h5>
                            <p className="mb-2 text-muted text-uppercase small">Venue Category</p>
                            <p><span className="mr-1" style={{ fontSize: "24px" }}><strong>$12.99</strong></span></p>
                            <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                                error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                                officia quis dolore quos sapiente tempore alias.</p>

                            <hr></hr>

                            <div className="table-responsive">
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Dealer Name</strong></th>
                                            <td>first name</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Contact no</strong></th>
                                            <td>0000 0000 00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr></hr>

                            <Button variant="danger">Book</Button>
                        </div>
                    </div>
                </section>
            </Container>
        </Layout >
    )
}

export default VenuePage