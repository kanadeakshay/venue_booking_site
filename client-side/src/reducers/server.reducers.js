import { serverConstants } from "../actions/constants";

const initialState = {
    message: null
}

const serverReducer = (state = initialState, action) => {
    switch (action.type) {
        case serverConstants.SERVER_OFFLINE:
            state = {
                message: action.payload.msg
            }
            break;

        default:
            break;
    }
    return state;
}

export default serverReducer