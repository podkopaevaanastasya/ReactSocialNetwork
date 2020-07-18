import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../Assets/Images/user.png";

const ProfileInfo = (props) =>{
    if(!props.profile) return <Preloader/>

    return <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>

                <div className={s.descriptionBlock}>
                    {props.profile.fullName}
                    {props.profile.aboutMe}
                    {props.profile.userId}
                </div>
                <a>{props.profile.contacts.vk}</a>
            </div>
        </div>
}

export default ProfileInfo