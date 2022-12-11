import { Preloader } from '../../UI/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const  ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt="" className={classes}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large } alt="avatar" className={classes.avatar} />
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;