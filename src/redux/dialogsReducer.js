const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
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