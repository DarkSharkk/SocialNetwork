import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
} 

export default store;
window.store = store; 