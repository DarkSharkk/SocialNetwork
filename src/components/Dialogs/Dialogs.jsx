import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useRef } from 'react';

const Dialogs = (props) => {
    const newMessageElement = useRef(null);

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map((m) => <Message message={m.message} />)}
                <div>
                    <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange} />
                    <button onClick={onAddMessage}>
                        Add message
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;