import React from 'react';

const Card = ({ post }) => {
    return (
        <div>
            <img src={post?.userImg} alt="user" />
            <audio autoplay="autoplay" loop="loop" preload="auto" controls="controls">
                <source src={post?.filepath} />
            </audio>
            <p>{post?.title}</p>
        </div>
    );
}

export default Card;