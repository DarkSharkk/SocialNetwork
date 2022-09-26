import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}
        />
    )
}

export default MyPostsContainer;