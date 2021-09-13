import { userInfoConstants } from "./constants";
import axios from '../helpers/axios';

const userInfo = (_id, userType) => {
    return async (dispatch) => {
        dispatch({
            type: userInfoConstants.USER_INFO_REQUEST
        });

        let res = {};
        if (userType === 'client') {
            res = await axios.get(`/user/${_id}`);
        }
        if (userType === 'dealer') {
            res = await axios.get(`/dealer/${_id}`);
        }

        if (res.status === 200) {
            dispatch({
                type: userInfoConstants.USER_INFO_SUCCESS,
                payload: { user: res.data.user }
            });
        } else {
            if (res.status === 404) {
                console.log(res);
                dispatch({
                    type: userInfoConstants.USER_INFO_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                });
            }
        }
    }
}

export {
    userInfo
}