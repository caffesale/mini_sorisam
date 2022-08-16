import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';

const Main = () => {
    
    const navigate = useNavigate();
    // 백엔드로부터 받아오는 게시글 배열
    const posts = [];

    return (
        <div>
            <button onClick={()=>{navigate('/posts')}}>글 작성</button>
            
            {/* 글 map 렌더링 */}
            {posts?.map((post) => {
                return (<Card post={post} />)
            })}
        </div>
    );
}

export default Main;