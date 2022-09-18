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

    getState() {
        return this._state;
    },

    _callSubscriber() { },

    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            date: "13:57"
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessageText) {
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель
    },
}

export default store;
window.store = store; 