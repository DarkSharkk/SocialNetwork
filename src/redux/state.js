import { rerenderEntireTree } from '../render'

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "How are you?", date: "14:05" },
            { id: 2, message: "It is my first post.", date: "14:02" }
        ],
        newPostText: 'def'
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

export default state;