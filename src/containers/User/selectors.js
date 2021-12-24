import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectUserDomain = state => state.userReducer || initialState;

const makeSelectName = () =>
    createSelector(
        selectUserDomain,
        substate => substate.name
    );

export {
    makeSelectName,
};