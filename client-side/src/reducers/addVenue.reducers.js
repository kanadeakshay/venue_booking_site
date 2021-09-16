import { addVenueConstants } from '../actions/constants';

const initialState = {
    error: null,
    message: '',
    saving: false
}

const addVenueReducer = (state = initialState, action) => {
    switch (action.type) {
        case addVenueConstants.ADD_VENUE_REQUEST:
            state = {
                ...state,
                saving: true,
            }
            break;

        case addVenueConstants.ADD_VENUE_SUCCESS:
            state = {
                ...state,
                saving: false
            }
            break;

        case addVenueConstants.ADD_VENUE_REQUEST:
            state = {
                ...state,
                error: action.payload.error,
                message: action.payload.msg,
                saving: false
            }
            break;

        default:
            break;
    }
    return state;
}

export default addVenueReducer