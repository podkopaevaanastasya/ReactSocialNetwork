import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setActivePage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)

            })
    }

    onPageChanged = (activePage) => {
        this.props.setActivePage(activePage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalCount}
                   pageSize={this.props.pageSize} activePage={this.props.activePage}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   unfollow={this.props.unfollow} follow={this.props.follow}
                   isFetching={this.props.isFetching}/>
                   </>
    }
}


let mapStateToProps = (state) => { //формирует данныe из State, вызывается когда обновляются PROPS осле Dispatch
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => { //формирует коллбэки
    return {
        //follow: (userId) => {
            //dispatch(follow(userId))}
    }
}

export default connect(mapStateToProps,{
    follow, unfollow, setUsers, setActivePage,setUsersTotalCount, toggleIsFetching})
(UsersComponent) //снабжаем данными из Store