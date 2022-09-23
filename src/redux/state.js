const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "How are you?", date: "14:05" },
                { id: 2, message: "It is my first post.", date: "14:02" }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Cody" },
                { id: 2, name: "Jack" }
            ],
            messages: [
                { id: 1, message: "Hola, Amigo!" },
                { id: 2, message: "Ayou, dude!" }
            ],
            newMessageText: ''
        },
    },

    _callSubscriber() { },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                date: "13:57"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
 
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
});

export const updateNewPostActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: text
});

export const addMessageActionCreator = () => ({
    type: 'ADD-MESSAGE'
});

export const updateNewMessageActionCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: text
})

export default store;
window.store = store; 