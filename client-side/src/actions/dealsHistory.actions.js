import { dealsConstants } from "./constants";
import axios from '../helpers/axios';

const getDeals = (user_role, _id) => {
    return async (dispatch) => {
        dispatch({
            type: dealsConstants.GET_DEALS_REQUEST
        });

        let res = {}
        if (user_role === 'client') {
            res = await axios.get(`/confirm-deals/${_id}`)
        }
        if (user_role === 'dealer') {
            res = await axios.get(`/confirm-deals-dealer/${_id}`)
        }

        if (res.status === 200) {
            dispatch({
                type: dealsConstants.GET_DEALS_SUCCESS,
                payload: res.data._allDeals
            })
        }
        if (res.status === 400) {
            dispatch({
                type: dealsConstants.GET_DEALS_FAILURE,
                payload: res.data.msg
            })
        }
    }
}

export default getDeals