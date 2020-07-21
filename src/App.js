import React from 'react'
import './App.css';
import Nav from "./Components/Navbar/NavBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Login from "./Components/Login/Login";

//component ожидает компоненту, нельзя передать данные
//<Route path="/profile" component={Dialogs} /> следит за URL, вызывает нужную комоненту из Render
//можно создать компоненту, которая вернет тег, например
//let Comp = () => <Dialogs данные/>
//но можно использовать render={() => <Dialogs/>}, работает шустрее

//Route path="/profile/:userId?" - облегчение взятия userId из URL
// ? - опциональный(необязательный) параметр

const App = () => {
  return <div className="app-wrapper">
        <HeaderContainer/>
        <Nav />
        <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={() => <Login />} />
        </div>
    </div>
  }

export default App;
