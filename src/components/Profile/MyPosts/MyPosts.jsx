import Post from './Post/Post';
import classes from './MyPosts.module.css';
import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.posts.map((p) => <Post message={p.message} date={p.date} />)}
            </div>
        </div>
    )
}

export default MyPosts;