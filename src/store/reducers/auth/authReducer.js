import {authTypes} from "../../types/auth/authTypes";

const initialState = {
    isAuth: false,
    user: {},
    loading: false,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case authTypes.SET_AUTH:
            return {
                ...state,
                isAuth: payload,

            }
        case authTypes.SET_USER:
            return {
                ...state,
                user: payload,

            }
        case authTypes.SET_LOADING:
            return {
                ...state,
                loading: payload,

            }
        case authTypes.SET_ERROR:
            return {
                ...state,
                error: payload,

            }
        default:
            return state;
    }
}