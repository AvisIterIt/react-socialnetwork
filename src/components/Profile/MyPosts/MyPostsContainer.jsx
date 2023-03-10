import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

let mapStateToProps =(state)=>{
  return{
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}
let mapDispatchToProps =(dispatch)=>{
  return{
    addPost:(newPostsText)=>{
      dispatch(addPostActionCreator(newPostsText));
    },
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;