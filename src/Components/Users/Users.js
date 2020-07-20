import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../Assets/Images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/API";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    //for (let i=1; i <= 3; i++) pages.push(i)
    //for(let i=pagesCount-2; i<= pagesCount; i++) pages.push(i)
    for (let i=1; i <= pagesCount; i++) pages.push(i)

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.activePage === p && styles.selectedPage}
                             onClick={(e) => { props.onPageChanged(p)} }>{p} </span>
            })}
        </div>

        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                       className={styles.userPhoto}/>
                        </NavLink></div>

                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                usersAPI.unfollow(u.id).then(data => {
                                    //подтверждение с сервера, успешный запрос
                                        if (data.resultCode === 0) props.unfollow(u.id)
                                    })
                                props.toggleIsFollowingProgress(false, u.id)
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id)
                                usersAPI.follow(u.id).then(data => {
                                        if (data.resultCode === 0) props.follow(u.id)
                                    })
                                props.toggleIsFollowingProgress(false, u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                <span>

                </span>
            </div>
        )}
    </div>
}

export default Users