import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthThunkCreator} from "../../Redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthThunkCreator()  //сюда попадает коллбэк
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

export default connect(mapStateToProps, {getAuthThunkCreator})(HeaderContainer)