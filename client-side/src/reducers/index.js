import { combineReducers } from 'redux';
import authReducer from './auth.reducers'
import registerReducer from './register.reducers';
import userInfoReducer from './userInfo.reducers';
import venuesInfoReducer from './allVenues.reducers';
import oneVenueInfoReducer from './venue.reducers';
import getOwnerVenuesReducer from './ownerVenues.reducers';
import addVenueReducer from './addVenue.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    registrationStatus: registerReducer,
    userInfo: userInfoReducer,
    allVenuesInfo: venuesInfoReducer,
    oneVenueInfo: oneVenueInfoReducer,
    ownerVenues: getOwnerVenuesReducer,
    addVenueStatus: addVenueReducer
});

export default rootReducer