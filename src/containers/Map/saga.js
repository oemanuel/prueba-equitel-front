import { takeLatest, call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import { makeSelecttUser } from '../App/selectors';
import { GET_PLACES } from './constants';
import { getPlacesSuccess } from './actions';

const baseUrl = 'http://localhost:3999/api';

const getListPlaces = (token) => {
    return axios
        .get(baseUrl + '/list_places', { headers: { "access-token": token } })
        .then(response => ({ response }))
        .catch(error => ({ error }));
};

function* listPlacesSaga() {
    const user = yield select(makeSelecttUser());
    const { response, error } = yield call(getListPlaces, user.token);
    if (response) yield put(getPlacesSuccess(response.data));
    else console.log(error);
};

export const mapSagas = [
    takeLatest(GET_PLACES, listPlacesSaga),
];