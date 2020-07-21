import {authAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state
    }
}

export default authReducer
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if(data.resultCode === 0){
                let {userId, email, login} = data.data
                dispatch(setAuthUserData(userId, email, login))
            }
        })
    }
}