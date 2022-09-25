const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "How are you?", date: "14:05" },
        { id: 2, message: "It is my first post.", date: "14:02" }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {

         case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                date: "13:57"
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
            
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
});

export const updateNewPostActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
});

export default profileReducer;