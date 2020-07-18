// контейнерная компонента, обертка
import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//везде props.store, т.е. весь store
/*const MyPostsContainer = (props) =>{

    let state = props.store.getState().profilePage
    //эта компонента вызывается при нажатии на кнопку добавления поста
    let addPost = () =>{
        props.store.dispatch( addPostActionCreator() )
    }

    let onPostChange = (text) => {  //эта компонента вызывается, когда пользователь печатает символ в поле для ввода своего поста
        //let text = e.target.value //получение каждого нового символа из поля для ввода поста
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts updateNewPostText={onPostChange}
                            addPost={addPost} posts={props.store.posts}
                     newPostText={props.store.getState().profilePage.newPostText}/>
}*/
let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch(addPostActionCreator()) //диспатч экшена
        },
        updateNewPostText:(text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer