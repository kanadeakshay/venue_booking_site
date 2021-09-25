import { venueConstants } from "../actions/constants";

const initialState = {
    venue: {
        _id: '',
        venueName: '',
        description: '',
        address: '',
        location: '',
        category: '',
        price: '',
        venuePictures: [],
        ownerInfo: {},
        reviews: [],
        ownerId: ''
    },
    error: null,
    message: '',
    loading: false
}

const oneVenueInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case venueConstants.GETONE_VENUE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case venueConstants.GETONE_VENUE_SUCCESS:
            state = {
                ...state,
                venue: action.payload.venue,
                loading: false
            }
            break;
        case venueConstants.GETONE_VENUE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.msg
            }
            break;

        default:
            break;
    }
    return state;
}

export default oneVenueInfoReducer