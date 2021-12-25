import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectUserDomain = state => state.placeReducer || initialState;

const makeSelectPlace = () =>
    createSelector(
        selectUserDomain,
        substate => substate.place
    );
const makeSelectId = () =>
    createSelector(
        selectUserDomain,
        substate => substate.id
    );

export {
    makeSelectPlace,
    makeSelectId
};