import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";

let store = {
    _state:{ //упаковка данных, все данные хранятся тут
        profilePage:{ //ветка для обслуживания страницы profile
            posts:[
                {id:1, text:"hello world", likesCount:12},
                {id:2, text:"nice to meet you", likesCount:2},
                {id:3, text:"today 24/06", likesCount:15}
            ],
            newPostText: ''
        },
        dialogsPage:{
            dialogs: [
                {id: 1, name: "Nastya"}, {id: 2, name: "Alex"}, {id: 3, name: "Asel"}
            ],
            messages: [
                {id: 1, message: "Hi"}, {id: 2, message: "Hello"},
                {id: 3, message: "как дела?"}, {id: 4, message: "хорошо"}
            ],
            newMessageText: ''
        },
        navBar:{
            friends:[
                {id:1, name:"Alex"},
                {id:2, name:"Asel"},
                {id:3, name:"Samat"}
            ]
        }
    },

    getState(){    ///////есть в Redux
        return this._state
    },

_callSubscriber() {},
subscribe(observer) {   ///////есть в Redux
    this._callSubscriber = observer //паттерн Наблюдатель // publisher
},

dispatch(action){   ///////есть в Redux
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navBar = navBarReducer(this._state.navBar, action)

    this._callSubscriber(this._state)
}
}

//export default store

//чистая функция (pure function) - функция, которая обязательно вернет данные, но
//и возможно примет данные. Если принимает разные данные, то вернет разный результат.
//идемпотентность, детерменированность, неизменяемость входящих данных

