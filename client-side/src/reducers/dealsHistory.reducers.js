import { dealsConstants } from '../actions/constants';

const initialState = {
    allDeals: {},
    message: ''
}

const dealsReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case dealsConstants.GET_DEALS_REQUEST:
            state = {
                ...state
            }
            break;

        case dealsConstants.GET_DEALS_SUCCESS:
            state = {
                ...state,
                allDeals: action.payload
            }
            break;

        case dealsConstants.GET_DEALS_FAILURE:
            state = {
                ...state,
                message: action.payload
            }
            break;

        default:
            break;
    }
    return state;
}

export default dealsReducer