import { CHANGE, REGISTER, LOGIN } from './constants';

export const change = (target) => {
    return {
        type: CHANGE,
        payload: { target }
    };
};

export const register = () => {
    return {
        type: REGISTER
    };
};
export const login = () => {
    return {
        type: LOGIN
    };
};