import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserDataAC} from "../../Redux/authReducer";
import {authAPI} from "../../API/API";

class HeaderContainer extends React.Component{

    componentDidMount() {
        authAPI.authMe().then(data => {
                if(data.resultCode === 0){
                    let {id, email, login} = data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) =>{ //формирует данныe из State
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)