import { GET_PLACES, GET_PLACES_SUCCESS } from './constants';

export const getPlaces = () => {
    return {
        type: GET_PLACES,
    };
};
export const getPlacesSuccess = (payload) => {
    return {
        type: GET_PLACES_SUCCESS,
        payload
    };
};