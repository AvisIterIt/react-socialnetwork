import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const MyPosts = React.memo((props) => {
  let postsElement = props.posts.map((p) => (
    <Post
      profile={props.profile}
      message={p.message}
      key={p.id}
      like={p.likesCount}
    />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostsText);
  };

  return (
    <div className={classes.posts}>
      <div className={classes.myPost}>My posts</div>

      <ReduxForm onSubmit={onAddPost} />

      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

      {createField('text',"Your text...","newPostsText",Textarea,[required, maxLength10])}

      <div className={classes.btn}>
        <button>Add post</button>
      </div>
    </form>
  );
};
const ReduxForm = reduxForm({ form: "PostsAddMessageForm" })(AddNewPostForm);
export default MyPosts;
