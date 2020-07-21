import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"; //Action Creator из Redux для функции dispatch

/*const DialogsContainer = (props) => {

    let state = props.getState()

    let onSendMessage = () =>{ //эта компонента вызывается при нажатии на кнопку отправки сообщения
        props.dispatch( sendMessageActionCreator() )
    }

    let onMessageChange = (text) => { //эта компонента вызывается, когда пользователь печатает символ в поле для ввода своего сообщения
        //FLUX реализован так: из Redux-Store приходит пустой newMessageText, при вводе каждого символа в поле для ввода своего сообщения
        // этот символ сохраняется в Redux-Store именно в newMessageText, затем перерисовывается весь UI, т.е. React через props опять получает
        // newMessageText и фиксирует его значение в поле для ввода сообщения
        //по сути при напечатывании сообщения пользователь видит каждый символ сообщения не сразу, а только после перерисовки UI, но это происходит моментально
        props.store.dispatch( updateNewMessageTextActionCreator(text) )
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 sendMessage={onSendMessage} dialogsPage={state}/>
    );
}*/

let mapStateToProps = (state) =>{ //формирует данныe из State
    //запускается после любого изменения в State, сравнивается содержимое двух обьектов-старого и нового State
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) =>{ //формирует коллбэки
    return{
        updateNewMessageText: (text) => {
            dispatch( updateNewMessageTextActionCreator(text) )
        },
        sendMessage: () => {
            dispatch( sendMessageActionCreator() )
        }
    }
}

//const SuperDialogsContainer = connect()() //вызвали connect, вернулась какая-то функция, которая сразу вызвалась

//создаем новую контейнерную комоненту
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //снабжаем данными из Store

export default DialogsContainer

//создали 2 функции, чтобы настроить connect. это правили, по которым Dialogs законнектится к Store