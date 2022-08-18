import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
    return (
        <div>
            <img src={post?.userImg} alt={post?.username} />
            <audio autoPlay="autoplay" loop="loop" preload="auto" controls="controls">
                <source src={post?.filePath} />
            </audio>
            <Link to={'/detail/'+post?.postingId}>{post?.title}</Link>
        </div>
    );
}

export default Card;