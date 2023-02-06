import { connect } from "react-redux";
import { follow,unfollow,followSuccess, unfollowSuccess,setCurrentPage,
    toggleFollowingProgress,requestUsers } from "../../redux/users-reduser";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsers, getCurrentPage, getFollowingInProgress, getIsFeatching, getPageSize, getTotalUsersCount } from "../../redux/users-selectors";

class UsersContainer extends React.Component{
    componentDidMount(){
        const {currentPage,pageSize} =this.props;
        this.props.requestUsers(currentPage,pageSize)
    }
    onPageChanged = (pageNumber)=>{
        const {requestUsers,setCurrentPage,pageSize} = this.props;
        requestUsers(pageNumber,pageSize)
      setCurrentPage(pageNumber);
    }
    render(){
      return <>
        {this.props.isFeatching ? <Preloader/> : <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      followingInProgress={this.props.followingInProgress}
      />}
      
      </>
    }
}

let mapStateToProps=(state)=>{
    return{
        users: getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFeatching:getIsFeatching(state),
        followingInProgress:getFollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{ follow,unfollow,
        followSuccess,unfollowSuccess,setCurrentPage,toggleFollowingProgress,requestUsers
    })
)(UsersContainer)