const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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