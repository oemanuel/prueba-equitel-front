import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelecttUser = () =>
    createSelector(
        selectGlobal,
        globalState => globalState.user,
    );

const makeSelectLoading = () =>
    createSelector(
        selectGlobal,
        globalState => globalState.loading,
    );

const makeSelectError = () =>
    createSelector(
        selectGlobal,
        globalState => globalState.error,
    );

export {
    makeSelecttUser,
    makeSelectLoading,
    makeSelectError,
};