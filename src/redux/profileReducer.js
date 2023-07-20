import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "How are you?", date: "14:05" },
        { id: 2, message: "It is my first post.", date: "14:02" }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {

         case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                date: "13:57"
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
         }
            
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI
            .getProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
            })
    }
}

export default profileReducer;