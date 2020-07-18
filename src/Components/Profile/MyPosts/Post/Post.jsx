// данный компонент формирует по одному имеющиеся посты на стене пользователя, т.е. компонент отвечает за отображение аватарки,
// текста поста и количество лайков на посте

//аватарка прльзователя хранится пока в этом компоненте, но я перенесу аватарку в дальнейшем, она будет приходить из props
import React from 'react'
import './Post.css';

const Post = (props) =>{
    return(
        <div className="postitem">
            <img src='https://www.pngitem.com/pimgs/m/78-787647_user-female-skin-type-1-2-icon-100.png'/><br />
            {props.text} <br />
            {props.likesCount}
            <span> like</span>
        </div>
    )
}

export default Post