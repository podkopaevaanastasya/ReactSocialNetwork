import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

//стартовый стейт, который передается в редьюсер изначально при загрузке страницы
let initialState = { //ветка для обслуживания страницы profile
    posts: [    ],
    newPostText: '',
    profile: null
}

//параметр по умолчанию 'state = initialState'
//чистая функция, не меняет значения props
const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            const newPost = {
                id: 4,
                text: state.newPostText,
                likesCount:0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost] }

//копируем только то, что будем изменять
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default: return state
    }
}

export const addPost = () => ({ type:ADD_POST })
export const setUserProfile = (profile) => ({ type:SET_USER_PROFILE, profile })
export const updateNewPostText = (text) =>
    ({ type:UPDATE_NEW_POST_TEXT, newText: text })

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        if (!userId) userId = 2

        profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default profileReducer