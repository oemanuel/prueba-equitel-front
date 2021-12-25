import produce from 'immer';

import { GET_PLACE_SUCCESS, GET_PLACE } from './constants';

export const initialState = {
    place: {},
    id: ""
};

const placeReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case GET_PLACE:
                draft.id = action.payload;
                break;
            case GET_PLACE_SUCCESS:
                draft.place = action.payload.data;
                break;
            default:
                break;
        }
    })
export default placeReducer;