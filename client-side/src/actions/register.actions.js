import { registerConstants } from './constants';
import axios from '../helpers/axios';

const userRegister = (userInfo) => {
    console.log(userInfo);
    return async (dispatch) => {
        dispatch({
            type: registerConstants.REGISTER_REQUEST
        });

        let res = {};
        if (userInfo.userType === 'client') {
            res = await axios.post('/signup', {
                ...userInfo
            });
        }
        if (userInfo.userType === 'dealer') {
            res = await axios.post('/dealer/signup', {
                ...userInfo
            });
        }

        if (res.status === 201) {
            const { msg } = res.data;
            dispatch({
                type: registerConstants.REGISTER_SUCCESS,
                payload: { msg }
            });
        } else {
            if (res.status === 400) {
                const { msg } = res.data;
                dispatch({
                    type: registerConstants.REGISTER_FAILURE,
                    payload: { msg }
                })
            }
        }
    }
}

export {
    userRegister
}