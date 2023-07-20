import { profileAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
});

export const getAuth = () => {
    return (dispatch) => {
        profileAPI
            .authMe()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    dispatch(setAuthUserDataActionCreator(id, email, login)); 
                }
            });
    }
};

export default authReducer;