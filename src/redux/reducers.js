import { combineReducers } from 'redux';
import globalReducer from '../containers/App/reducer';
import userReducer from '../containers/User/reducer';
import mapReducer from '../containers/Map/reducer';
import placeReducer from '../containers/Place/reducer';

const rootReducer = combineReducers({
    global: globalReducer,
    userReducer,
    mapReducer,
    placeReducer
});
export default rootReducer;