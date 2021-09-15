import { combineReducers } from 'redux';
import authReducer from './auth.reducers'
import registerReducer from './register.reducers';
import userInfoReducer from './userInfo.reducers';
import venuesInfoReducer from './venue.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    registrationStatus: registerReducer,
    userInfo: userInfoReducer,
    allVenuesInfo: venuesInfoReducer
});

export default rootReducer