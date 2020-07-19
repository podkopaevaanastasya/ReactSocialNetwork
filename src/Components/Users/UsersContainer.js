import React from "react";
import {connect} from "react-redux";
import {
    follow, setActivePage, setUsers, setUsersTotalCount,
    toggleIsFetching, toggleIsFollowingProgress, unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../API/API";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.activePage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (activePage) => {
        this.props.setActivePage(activePage)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(activePage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalCount}
                   pageSize={this.props.pageSize} activePage={this.props.activePage}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   unfollow={this.props.unfollow} follow={this.props.follow}
                   isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress}
                   followingInProgress={this.props.followingInProgress}/>
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
    follow, unfollow, setUsers, setActivePage,setUsersTotalCount, toggleIsFetching, toggleIsFollowingProgress})
(UsersComponent) //снабжаем данными из Store