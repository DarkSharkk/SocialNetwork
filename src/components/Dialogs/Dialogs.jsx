import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useRef } from 'react';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
    const newMessageElement = useRef(null);

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    }
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id} />)}
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