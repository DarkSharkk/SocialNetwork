import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
                followed: false, fullName: 'Max F.', status: 'work', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
                followed: true, fullName: 'Anna D.', status: 'study', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg',
                followed: false, fullName: 'Alex S.', status: 'vacation', location: { city: 'Kiev', country: 'Ukraine' }
            }
        ]);
    }
   
    return (
        <div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt="" />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Users;