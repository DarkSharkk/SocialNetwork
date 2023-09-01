import { Preloader } from '../../UI/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const  ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large } alt="avatar" className={classes.avatar} />
                <ProfileStatus statusText="status" />
            </div>
        </div>
    )
}

export default ProfileInfo;