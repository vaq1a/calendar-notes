import {authTypes} from "../../types/auth/authTypes";
import {usersApi} from "../../../api/usersAPI";

export const authActionCreators = {
    setAuth: (payload) => {
        return {
            type: authTypes.SET_AUTH,
            payload,

        }
    },
    setUser: (payload) => {
        return {
            type: authTypes.SET_USER,
            payload,

        }
    },
    login: (payload) => async (dispatch) => {
        const {username, password} = payload;
        dispatch(authActionCreators.setLoading(true));
        try {
            const response = await usersApi.getUsers();
            const mockUser = response.data.find(el => el.username === username && el.password === password);
            if(mockUser) {
                localStorage.setItem('auth', true);
                localStorage.setItem('username', username);
                dispatch(authActionCreators.setUser({username}));
                dispatch(authActionCreators.setAuth(true));
            }
        } catch (e) {
            dispatch(authActionCreators.setError(e));
        }
        dispatch(authActionCreators.setLoading(false));
    },
    logout: () => (dispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(authActionCreators.setAuth(false));
        dispatch(authActionCreators.setUser({}));
    },
    setLoading: (payload) => {
        return {
            type: authTypes.SET_LOADING,
            payload,

        }
    },
    setError: (payload) => {
        return {
            type: authTypes.SET_ERROR,
            payload,

        }
    }
}
