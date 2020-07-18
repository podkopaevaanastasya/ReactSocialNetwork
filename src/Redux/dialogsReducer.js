const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: "Nastya"}, {id: 2, name: "Alex"}, {id: 3, name: "Asel"}
    ],
    messages: [
        {id: 1, message: "Hi"}, {id: 2, message: "Hello"},
        {id: 3, message: "как дела?"}, {id: 4, message: "хорошо"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                //актуальная заись
                messages:  [ ...state.messages, {id: 5, message: state.newMessageText}]}

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }

        default: return state
    }
}

export const sendMessageActionCreator = () => ({ type:SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type:UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer