import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({user,followingInProgress,unfollow,follow}) => {
  return (
        <div>
          <div className={classes.item}>
            <div className={classes.face}>
              <div className={classes.img}>
                <NavLink to={"/content/" + user.id}>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
              </div>
              <div className={classes.div_btn}>
                {user.followed
                ? (<button disabled={followingInProgress
                  .some(id=>id===user.id)} className={classes.btn}
                  onClick={() => {unfollow(user.id)
                  }}> Unfollow </button>)
                : (<button disabled={followingInProgress
                  .some(id=>id===user.id)} className={classes.btn}
                  onClick={() => {follow(user.id)
                  }}>Follow</button>)}
              </div>
            </div>

            <div className={classes.info}>
              <div className={classes.left}>
                <div>{'name: ' + user.name}</div>
                <div>{'status: ' + user.status}</div>
              </div>
              <div className={classes.right}>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </div>
            </div>
          </div>
        </div>
      )}


export default User;
