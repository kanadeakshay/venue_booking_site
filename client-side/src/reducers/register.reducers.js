import { registerConstants } from "../actions/constants";

const initialState = {
    error: null,
    message: '',
    loading: false
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case registerConstants.REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.msg
            }
            break;
        case registerConstants.REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.msg,
                error: action.payload.error
            }
            break;

        default:
            break;
    }
    return state;
}

export default registerReducer