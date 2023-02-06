import React from "react";
import { connect } from "react-redux";
import Profile from '../Profile/Profile.jsx'
import {getUserProlile,getStatus,updateStatus} from '../../redux/profile-reduser'
import { withAuthRedirect } from "../hoc/withAuthRedirect.js";
import { compose } from "redux";
import {withRouter} from '../common/withRouter/withRouter'

class ProfileContainer extends React.Component {
    refreshProfile(){
      let userId = this.props.router.params.userId ;
      if(!userId){
        // userId =this.props.authorizedUserId;
        // if(!userId){
        //   this.props.history.push('/login')
        // }
        userId =27070;
      }
      this.props.getUserProlile(userId);
      this.props.getStatus(userId);
    }
    componentDidMount(){
      this.refreshProfile();
    }
  render(){
    
    return(
      <Profile {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps=(state)=>({
  profile:state.profilePage.profile,
  status:state.profilePage.status,
  authorizedUserId:state.auth.userId,
  isAuth:state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps,{getUserProlile,getStatus,updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);