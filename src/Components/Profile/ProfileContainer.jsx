import React from 'react'
import './Profile.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../Redux/profileReducer";
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

//чтобы сделать запрос на сервер, нужны данные из URL. поэтому обернем ProfileContainer, вызовем функцию withRouter
let WithUrlData = withRouter(ProfileContainer) //вернет комоненту ProfileContainer с данными из URL
//нужно обратиться к props.match - совпадение URL с роутами, т.е. с /profile
//props.match.params - тот самый нужный нам userIdю
//props.location - путь


//обернем объект WithUrlData функцией connect, закинем туда данные из URL
export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlData)