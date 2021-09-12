import { authConstants } from './constants';
import axios from '../helpers/axios';

const userlogin = (user, userType) => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        });

        let res = {};
        if (userType === 'client') {
            res = await axios.post('/signin', {
                ...user
            });
        }
        if (userType === 'dealer') {
            res = await axios.post('/dealer/signin', {
                ...user
            });
        }

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.msg
                    }
                })
            }
        }
    }
}

const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: 'Failed to login'
                }
            })
        }
    }
}

const signout = () => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        });
        const res = await axios.post('/sign-out');
        if (res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            });
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export {
    userlogin,
    isUserLoggedIn,
    signout
}