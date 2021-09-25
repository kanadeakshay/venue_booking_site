import { registerConstants } from "../actions/constants";

const initialState = {
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
                loading: false,
                message: action.payload.msg
            }
            break;

        case registerConstants.REGISTER_FAILURE:
            state = {
                loading: false,
                message: action.payload.msg
            }
            break;

        default:
            break;
    }
    return state;
}

export default registerReducer