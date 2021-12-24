import { all } from 'redux-saga/effects';
import { userSagas } from '../containers/User/saga';
import { mapSagas } from '../containers/Map/saga';

const superSagas = [...userSagas, ...mapSagas];

export default function* rootSaga() {
    yield all([...superSagas]);
};