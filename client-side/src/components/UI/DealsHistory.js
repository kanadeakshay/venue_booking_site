import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { isEmpty } from '../../helpers/isObjEmpty';

const DealsHistory = (props) => {
    return (
        <div className="card-body">
            <h4>Last few bookings</h4>
            {
                isEmpty(props.allDeals) ?
                    <h5>
                        {
                            props.role === 'client' ?
                                `You didn't booked any venues`
                                :
                                `Currently you don't have any bookings`
                        }
                    </h5>
                    :
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Deal Date</th>
                                <th>Venue Name</th>
                                <th>Event Date</th>
                                {
                                    props.role === 'dealer' ?
                                        <th>Per deal revenue</th> : <th>Bill per deal</th>
                                }
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.allDeals.map((deal) => {
                                    const { date_added, venueName, eventDate, bill } = deal;
                                    return (
                                        <tr>
                                            <td>{date_added}</td>
                                            <td>{venueName}</td>
                                            <td>{eventDate}</td>
                                            <td>{bill}</td>
                                            <td>
                                                <Button size="sm">Details</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
            }

        </div>
    )
}

export { DealsHistory }
