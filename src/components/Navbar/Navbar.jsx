import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import classes from './Navbar.module.css'

const Navbar = (props) =>{
  //let state = props.store;
  //let friendsElement = state.sideBar.map(f => <Friends name={f.name}/>)
    
    return(
          <nav className={classes.nav}>
            <div className={classes.item}>
              <NavLink
                to='/content'
                className = { navData => navData.isActive ? classes.active : classes.item }>
                Profile
              </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink
                to='/dialogs'
                className = { navData => navData.isActive ? classes.active : classes.item }>
                Messages
              </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink
                to='/news'
                className = { navData => navData.isActive ? classes.active : classes.item }>
                News
              </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink
                to='/music'
                className = { navData => navData.isActive ? classes.active : classes.item }>
                Music
              </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink
                to='/settings'
                className = { navData => navData.isActive ? classes.active : classes.item }>
                Settings
              </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink
                to='/users'
                className = { navData => navData.isActive ? classes.active : classes.item }>
                Users
              </NavLink>
            </div>
            {/* <div className={classes.friends}>
                Friends
              </div>
              <div className={classes.icon}>
                {friendsElement}
            </div> */}
          </nav>
    )
}
export default Navbar;