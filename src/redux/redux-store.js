import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sideBarReduser from "./sideBar-reduser";
import usersReduser from "./users-reduser";
import aurhReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reduser";

let redusers = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  sideBar: sideBarReduser,
  usersPage: usersReduser,
  auth: aurhReduser,
  form: formReducer,
  app: appReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(redusers, applyMiddleware(thunkMiddleware));
//window.store = store;
export default store;
