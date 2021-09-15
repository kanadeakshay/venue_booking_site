import { venueConstants } from "./constants";
import axios from '../helpers/axios';

const getVenues = () => {
    return async (dispatch) => {
        dispatch({
            type: venueConstants.GETALL_VENUES_REQUEST
        });

        const res = await axios.get(`/all-venues`);

        if (res.status === 200) {
            dispatch({
                type: venueConstants.GETALL_VENUES_SUCCESS,
                payload: res.data.allVenues
            });
        } else {
            dispatch({
                type: venueConstants.GETALL_VENUES_FAILURE,
                payload: {
                    msg: res.data.msg
                }
            });
        }
    }
}

export {
    getVenues
}