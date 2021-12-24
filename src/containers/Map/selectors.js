import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectUserDomain = state => state.mapReducer || initialState;

const makeSelectPlaces = () =>
    createSelector(
        selectUserDomain,
        substate => substate.places
    );

export {
    makeSelectPlaces,
};