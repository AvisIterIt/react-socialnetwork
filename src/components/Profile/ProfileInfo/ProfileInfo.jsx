import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css'
import ProfileStatusWIthHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile,status,updateStatus}) =>{
  if(!profile){
    return<Preloader/>
  }
    return(
        <div className={classes.info}>
          <img className={classes.img} src='https://img2.akspic.ru/attachments/crops/9/7/9/3/93979/93979-bruklinskij_most-arhitektura-nebo-voda-otrazhenie-1920x1080.jpg'/>
          <div className={classes.face}>
            <div>
              <img src={profile.photos.large || userPhoto}  /> 
              <div>Status: <ProfileStatusWIthHooks status={status} updateStatus={updateStatus}/></div>
            </div>
             <div className={classes.p}>
              <p>Name: {profile.fullName}</p>
              <p>aboutMe: {profile.aboutMe}</p>
              <p>lookingForAJobDescription: {profile.lookingForAJobDescription}</p>
              <p>contacts: {profile.contacts.vk}</p>
             </div>
          </div>
          
        </div>
    )
}

export default ProfileInfo;