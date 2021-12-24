import produce from 'immer';

import { GET_PLACES_SUCCESS } from './constants';

export const initialState = {
    places: []
};

const mapReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case GET_PLACES_SUCCESS:
                draft.places = action.payload.data;
                break;
            default:
                break;
        }
    })
export default mapReducer;