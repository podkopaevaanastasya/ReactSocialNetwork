import React from "react";
import {connect} from "react-redux";
import {
    followSuccess,
    followThunkCreator,
    getUsersThunkCreator,
    setActivePage,
    toggleIsFollowingProgress,
    unfollowSuccess,
    unfollowThunkCreator
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.activePage, this.props.pageSize) //сюда попадает коллбэк
    }

    onPageChanged = (activePage) => {
        this.props.setActivePage(activePage)
        this.props.getUsersThunkCreator(this.props.activePage, this.props.pageSize) //сюда попадает коллбэк
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalCount}
                   pageSize={this.props.pageSize} activePage={this.props.activePage}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   unfollow={this.props.unfollowSuccess} follow={this.props.followSuccess}/>
                   </>
    }
}


let mapStateToProps = (state) => { //формирует данныe из State, вызывается когда обновляются PROPS осле Dispatch
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = (dispatch) => { //формирует коллбэки
    return {
        //follow: (userId) => {
            //dispatch(follow(userId))}
    }
}

export default connect(mapStateToProps,{
    followSuccess, unfollowSuccess, setActivePage,
    toggleIsFollowingProgress, getUsersThunkCreator, unfollowThunkCreator,
    followThunkCreator})
(UsersComponent) //снабжаем данными из Store