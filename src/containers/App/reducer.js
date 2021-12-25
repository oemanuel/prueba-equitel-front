import produce from 'immer';
import { SAVE_USER } from './constants';

export const initialState = {
    loading: false,
    error: false,
    user: {}
};

const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case SAVE_USER:
                draft.user =  action.payload.data;
                break;
            default:
                break;
        };
    });

export default appReducer;