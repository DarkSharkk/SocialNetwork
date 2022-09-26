const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: "Cody" },
        { id: 2, name: "Jack" }
    ],
    messages: [
        { id: 1, message: "Hola, Amigo!" },
        { id: 2, message: "Ayou, dude!" }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: 'ADD-MESSAGE'
});

export const updateNewMessageActionCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: text
});

export default dialogsReducer;