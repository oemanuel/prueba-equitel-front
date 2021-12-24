import { combineReducers } from 'redux';
import globalReducer from '../containers/App/reducer';
import userReducer from '../containers/User/reducer';
import mapReducer from '../containers/Map/reducer';

const rootReducer = combineReducers({
    global: globalReducer,
    userReducer,
    mapReducer
});
export default rootReducer;