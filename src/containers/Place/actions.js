import { GET_PLACE, GET_PLACE_SUCCESS } from './constants';

export const getPlace = (payload) => {
    return {
        type: GET_PLACE,
        payload
    };
};
export const getPlaceSuccess = (payload) => {
    return {
        type: GET_PLACE_SUCCESS,
        payload
    };
};