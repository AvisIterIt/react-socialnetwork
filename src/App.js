import React, { Component, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { initializedApp } from "./redux/app-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "./components/common/withRouter/withRouter";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="App">
        <HeaderContainer />
        <div className="nav__content">
          <Navbar />
          <div className="content">
            <Suspense fallback={<div><Preloader /></div>}>
              <Routes>
                <Route path="/content/:userId" element={<ProfileContainer />} />
                <Route path="/content/*" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
let AppContainer =  compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);
const SamuraiJSApp=(props)=>{
  return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;