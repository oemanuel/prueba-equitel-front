import { SAVE_USER } from './constants';

export const saveUser = (payload) => {
    return {
        type: SAVE_USER,
        payload
    };
};