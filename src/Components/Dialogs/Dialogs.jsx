// страница диалогов для социальной сети, которую я реализую
// я по смыслу раздробила проект на много компонент

import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"; // компонент DialogItem формирует ссылки на диалоги с другими пользователями и возвращает их
import Message from "./Message/Message"; // компонент Message возвращает уже отправленные сообщения

const Dialogs = (props) => { //передаю ветку dialogsPage, про Store эта компонента не знает

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>) //формирование нового массива ссылок NavLink на имеющиеся диалоги
    let messagesElements = props.messages.map( m => <Message message={m.message} key={m.id}/>) //формирование нового массива из уже отправленных сообщений
    let newMessageText = props.newMessageText //объект для хранения в нем текста нового сообщения, ключевой объект в реализации FLUX в контексте отправляемых сообщений

    let onSendMessage = () =>{ //эта компонента вызывается при нажатии на кнопку отправки сообщения
        props.sendMessage()
    }

    let onMessageChange = (e) => { //эта компонента вызывается, когда пользователь печатает символ в поле для ввода своего сообщения
        //FLUX реализован так: из Redux-Store приходит пустой newMessageText, при вводе каждого символа в поле для ввода своего сообщения
        // этот символ сохраняется в Redux-Store именно в newMessageText, затем перерисовывается весь UI, т.е. React через props опять получает
        // newMessageText и фиксирует его значение в поле для ввода сообщения
        //по сути при напечатывании сообщения пользователь видит каждый символ сообщения не сразу, а только после перерисовки UI, но это происходит моментально
        let text = e.target.value
        props.updateNewMessageText(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder='Write your message' onChange={onMessageChange} value={newMessageText}/>
            </div>
            <div>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs