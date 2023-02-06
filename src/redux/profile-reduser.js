import { profileAPI, usersAPI } from "../components/api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: 12 },
    { id: 2, message: "Hi,how are you?", likesCount: 10 },
    { id: 3, message: "Hi,how are you?", likesCount: 8 },
    { id: 4, message: "Hi,how are you?", likesCount: 6 },
  ],
  profile: null,
  sattus: "",
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostsText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostsText) => ({
  type: ADD_POST,
  newPostsText,
});
export const setUserProlile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
//Thunk
export const getUserProlile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProlile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export default profileReduser;
