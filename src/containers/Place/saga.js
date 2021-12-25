import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { makeSelecttUser } from '../App/selectors';
import { makeSelectId } from './selectors';
import { GET_PLACE } from './constants';
import { getPlaceSuccess } from './actions';

const baseUrl = 'http://localhost:3999/api';

const getOnePlace = (token, id) => {
  return axios
    .get(baseUrl + '/getOne_places?placeId=' + id, { headers: { "access-token": token } })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

function* placeSaga() {
  const user = yield select(makeSelecttUser());
  const id = yield select(makeSelectId());
  const { response, error } = yield call(getOnePlace, user.token, id);
  if (response) yield put(getPlaceSuccess(response.data));
  else console.log(error);
};

export const placeSagas = [
  takeLatest(GET_PLACE, placeSaga),
];