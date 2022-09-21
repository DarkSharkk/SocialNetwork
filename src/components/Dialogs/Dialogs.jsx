import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useRef } from 'react';

const Dialogs = (props) => {
    const newMessageElement = useRef(null);

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    const onMessageText = () => {
        const text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text});
    }
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map((m) => <Message message={m.message} />)}
                <div>
                    <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageText} />
                    <button onClick={addMessage}>
                        Add message
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;