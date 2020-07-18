import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({ //склейка редьюсеров, условно новый state
    profilePage: profileReducer, //свойство: метод //объекты
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navBarReducer,
    auth: authReducer
})

let store = createStore(reducers)
window.store = store
export default store