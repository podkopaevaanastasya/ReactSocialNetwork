// страница постов для социальной сети, которую я реализую
// реализована FlUX-архитектура

import React from 'react'
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{
    //формирование нового массива из уже опубликованных постов
    let postsElements = props.posts.map(p => <Post text={p.text} likesCount={p.likesCount}/>)

    //объект для хранения в нем текста нового поста
    let newPostText = props.newPostText

    //эта компонента вызывается при нажатии на кнопку добавления поста
    let onAddPost = () =>{
        props.addPost()
    }

    let onPostChange = (e) => {  //эта компонента вызывается, когда пользователь печатает символ в поле для ввода своего поста
        let text = e.target.value //получение каждого нового символа из поля для ввода поста
        props.updateNewPostText(text)
    }

    return(
        <div>
            <h3>Posts</h3>
                <div>
                    <div>
                        <textarea placeholder='Write your post' onChange={onPostChange} value={newPostText}/>
                    </div>
                    <div>
                        <button color='primary' onClick={onAddPost}>Add post</button>

                    </div>
                </div>
                <div className='Posts'>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts