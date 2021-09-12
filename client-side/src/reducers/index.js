import { combineReducers } from 'redux';
import authReducer from './auth.reducers'
import registerReducer from './register.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    regStats: registerReducer
});

export default rootReducer