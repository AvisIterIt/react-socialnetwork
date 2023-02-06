import React from "react";
import classes from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";
import Preloader from "../../../common/Preloader/Preloader";

const Post = (props) =>{
  if(!props.profile){
    return<Preloader/>
  }
  return(
        <div className={classes.item}>
          <div className={classes.item_el}>
            <img src={props.profile.photos.large || userPhoto}/>
            <div className={classes.message}>
            {props.message}
            </div>
          </div>
          <div>
           <span>Like: {props.like}</span>
          </div>
          
        </div>
  )
}

export default Post;