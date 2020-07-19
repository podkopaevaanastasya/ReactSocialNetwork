import React from 'react'
import './Profile.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from 'react-router-dom'
import {profileAPI} from "../../API/API";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
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
export default connect(mapStateToProps, {setUserProfile})(WithUrlData)