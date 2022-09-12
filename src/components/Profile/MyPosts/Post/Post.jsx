import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0LIfjr-qiRHU4RnRbD4HOTjlkmT9Oc2m2uVBC2Nsfg&s" alt="" />
             {props.message} - {props.date}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;