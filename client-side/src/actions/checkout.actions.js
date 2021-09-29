import { saveDealConstants, deleteDealConstants } from './constants';
import axios from '../helpers/axios';

const paymentSuccess = (dealId) => {
    return async (dispatch) => {
        dispatch({
            type: saveDealConstants.SAVE_DEAL_REQUEST
        });

        try {
            const res = await axios.patch(`/confirm-deal/${dealId}`);
            if (res.status === 200) {
                dispatch({
                    type: saveDealConstants.SAVE_DEAL_SUCCESS
                })
            }
        } catch (error) {
            dispatch({
                type: saveDealConstants.SAVE_DEAL_FAILURE
            })
        }
    }
}

const paymentCanceled = (dealId) => {
    return async (dispatch) => {
        dispatch({
            type: deleteDealConstants.DELETE_DEAL_REQUEST
        });

        try {
            const res = await axios.delete(`delete-unconfirmDeal/${dealId}`);
            if (res.status === 200) {
                dispatch({
                    type: deleteDealConstants.DELETE_DEAL_SUCCESS
                })
            }
        } catch (error) {
            dispatch({
                type: deleteDealConstants.DELETE_DEAL_FAILURE
            })
        }
    }
}

// const gotoCheckout = (dealInfo) => {
//     console.log(dealInfo);
//     return async (dispatch) => {
//         dispatch({
//             type: checkoutConstants.CHECKOUT_REQUEST
//         });

//         try {
//             const res = await axios.post(`/checkout`, dealInfo);

//             if (res.status === 201) {
//                 localStorage.setItem('dealId', JSON.stringify(res.data.dealId));
//                 dispatch({
//                     type: checkoutConstants.CHECKOUT_SUCCESS,
//                     payload: {
//                         url: res.data.url,
//                         dealId: res.data.dealId
//                     }
//                 })
//             } else {
//                 dispatch({
//                     type: checkoutConstants.CHECKOUT_FAILURE,
//                     paylaod: {
//                         error: res.data.msg
//                     }
//                 })
//             }
//         } catch {
//             dispatch({
//                 type: checkoutConstants.CHECKOUT_FAILURE,
//                 paylaod: {
//                     error: "Something went wrong"
//                 }
//             })
//         }
//     }
// }

export {
    paymentSuccess,
    paymentCanceled
}