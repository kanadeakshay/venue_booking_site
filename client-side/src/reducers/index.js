import { combineReducers } from 'redux';
import authReducer from './auth.reducers'
import registerReducer from './register.reducers';
import userInfoReducer from './userInfo.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    registrationStatus: registerReducer,
    userInfo: userInfoReducer
});

export default rootReducer