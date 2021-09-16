import React from 'react';
import { Table } from 'react-bootstrap';

const DealsHistory = (props) => {
    return (
        <div className="card-body">
            <h4>Last few bookings</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Deal Date</th>
                        <th>Venue Name</th>
                        {
                            props.role === 'dealer' ?
                                <th>Per deal revenue</th> : <th>Bill per deal</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09/09/2021</td>
                        <td>AV Banquet hall</td>
                        <td>₹ 7000</td>
                    </tr>
                    <tr>
                        <td>10/09/2021</td>
                        <td>JV Mirrage Hall</td>
                        <td>₹ 30000</td>
                    </tr>
                    {/* <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    )
}

export { DealsHistory }
