import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../Assets/Images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    //for (let i=1; i <= 3; i++) pages.push(i)
    //for(let i=pagesCount-2; i<= pagesCount; i++) pages.push(i)
    for (let i=1; i <= pagesCount; i++) pages.push(i)

    return <div>
        <div>
            {pages.map(p => {
                return <span className={
                    props.activePage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)}}>{p} </span>
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
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY" : "d01b6208-acdf-4530-b62e-88a0110fa7da"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY" : "d01b6208-acdf-4530-b62e-88a0110fa7da"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }

                                    })


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