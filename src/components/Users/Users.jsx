import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/index.png';
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const unfollow = (id) => {
        props.unfollowUser(id);
    }

    const follow = (id) => {
        props.followUser(id);
    }
    
    return (
        <div>
            <div>
                {pages.map((p) => (
                    <span
                        className={(props.currentPage === p) ? styles.selectedPage : ''}
                        onClick={() => { props.onPageChange(p) }}>{p}</span>
                ))}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small || userPhoto} className={styles.userPhoto} alt="" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => unfollow(u.id)} disabled={props.followingInProgress.some(id => u.id === id)}>
                                    Unfollow
                                </button>
                                :
                                <button onClick={() => follow(u.id)} disabled={props.followingInProgress.some(id => u.id === id)}>
                                    Follow
                                </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Users;