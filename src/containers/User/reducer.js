import produce from 'immer';

import { CHANGE } from './constants';

export const initialState = {
    name: ""
};

const userReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case CHANGE:
                draft.name = action.payload.target.value
                break;
            default:
                break;
        }
    })
export default userReducer;