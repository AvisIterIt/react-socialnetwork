import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sideBarReduser from "./sideBar-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Nina" },
        { id: 3, name: "Vasya" },
        { id: 4, name: "Fedya" },
        { id: 5, name: "Alex" },
      ],
      messages: [
        { id: 1, message: "Hi,brooo!" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Yo,maaaan!" },
        { id: 4, message: "Yo,maaaan!" },
        { id: 5, message: "Yo,maaaan!" },
      ],
      newMessageBody: "",
    },
    sideBar: [
      { id: 1, name: "Nikita" },
      { id: 2, name: "Katya" },
      { id: 3, name: "Sveta" },
    ],
  },
  _callSubscriber() {
    console.log("State was chsnged");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    //{type:'ADD-POST'}

    this._state.profilePage = profileReduser(this._state.contentPage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReduser(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
