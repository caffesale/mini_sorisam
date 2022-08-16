import React from 'react';

const Card = ({ post }) => {
    return (
<<<<<<< HEAD
        <div>
            <img src={post?.userImg} alt="user" />
=======
        <div key={post?.postingId}>
            <img src={post?.userImg} alt={post?.username} />
>>>>>>> dev
            <audio autoplay="autoplay" loop="loop" preload="auto" controls="controls">
                <source src={post?.filepath} />
            </audio>
            <p>{post?.title}</p>
        </div>
    );
}

export default Card;