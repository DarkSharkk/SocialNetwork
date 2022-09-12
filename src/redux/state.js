let state = {
    profilePage: {
        posts: [
            { id: 1, message: "How are you?", date: "14:05" },
            { id: 2, message: "It is my first post.", date: "14:02" }
        ],
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

export const addPost = (postMessage) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: postMessage,
        date: "13:57"
    };
    state.profilePage.posts.push(newPost)
}

export default state;