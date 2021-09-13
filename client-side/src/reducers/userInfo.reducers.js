import { userInfoConstants } from "../actions/constants"

const initialState = {
    error: null,
    message: '',
    user: {
        _id: '',
        fullName: '',
        role: '',
        email: '',
        createdAt: '',
        userName: '',
        contactNumber: '',
    },
    loading: false
}

const userInfoReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case userInfoConstants.USER_INFO_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;

        case userInfoConstants.USER_INFO_SUCCESS:
            state = {
                ...state,
                loading: false,
                user: action.payload.user
            }
            break;

        case userInfoConstants.USER_INFO_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;

        default:
            break;
    }
    return state;
}

export default userInfoReducer