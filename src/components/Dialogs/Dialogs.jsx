import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useRef } from 'react';

const Dialogs = (props) => {
    const newMessageElement = useRef(null);
    const addMessage = () => {
        const text = newMessageElement.current.value;
        alert(text);
    }
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map((m) => <Message message={m.message} />)}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>
                        Add message
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;