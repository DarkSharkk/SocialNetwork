let rerenderEntireTree = () => {}

let state = {
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
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        date: "13:57"
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText) => {
     state.profilePage.newPostText = newPostText;
     rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages.length + 1,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // наблюдатель
}

export default state;