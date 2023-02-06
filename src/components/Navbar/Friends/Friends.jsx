import React from "react";
import classes from '../Navbar.module.css'

const Friends = (props) =>{
    return(
        <div className={classes.circle}>
            <div></div>
            <p>{props.name}</p>
        </div>
    )
}

export default Friends;