import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onMessageText = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    
    return (
        <Dialogs addMessage={addMessage} updateNewMessageText={onMessageText} dialogsPage={state.dialogsPage} /> 
    )
}

export default DialogsContainer;