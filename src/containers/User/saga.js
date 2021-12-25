import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { makeSelectName } from './selectors';
import { REGISTER, LOGIN } from './constants';
import { saveUser } from '../App/actions';

const baseUrl = 'http://localhost:3999/api';

const postLogin = (name) => {
    return axios
        .post(baseUrl + '/login', { name: name })
        .then(response => ({ response }))
        .catch(error => ({ error }));
};

function* loginSaga() {
    const name = yield select(makeSelectName());
    const { response, error } = yield call(postLogin, name);
    if (response) yield put(saveUser(response.data));
    else console.log(error);
};

const postRegister = (name) => {
    return axios
        .post(baseUrl + '/register', { name: name })
        .then(response => ({ response }))
        .catch(error => ({ error }));
};

function* reisterSaga() {
    const name = yield select(makeSelectName());
    const { response, error } = yield call(postRegister, name);
    if (response) console.log(response);
    else console.log(error);
};

export const userSagas = [
    takeLatest(LOGIN, loginSaga),
    takeLatest(REGISTER, reisterSaga),
];