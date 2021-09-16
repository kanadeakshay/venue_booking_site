import { venueConstants } from "../actions/constants";

const initialState = {
    error: null,
    allvenues: {},
    message: '',
    loading: false
}

const getOwnerVenuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case venueConstants.GETALL_VENUES_OF_DEALER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case venueConstants.GETALL_VENUES_OF_DEALER_SUCCESS:
            state = {
                ...state,
                allvenues: action.payload,
                loading: false
            }
            break;

        case venueConstants.GETALL_VENUES_OF_DEALER_FAILURE:
            state = {
                ...state,
                loading: false
            }
            break;

        default:
            break;
    }
    return state;
}

export default getOwnerVenuesReducer