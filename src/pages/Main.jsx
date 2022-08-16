import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';

import Header from '../components/header/Header';

const Main = () => {
    const navigate = useNavigate();
    // 백엔드로부터 받아오는 게시글 배열
    //  posts = [{title: '', content: '', filepath: '', postingId: '', username: ''}, {...}, {...}, ...]
    const posts = [];

    return (
        <div>
            {/* 상단 헤더 부분 */}
            <Header />
            {/* 글 작성 버튼 */}
            <button onClick={()=>{navigate('/posts')}}>글 작성</button>
            {/* 글 map 렌더링 */}
            {posts?.map((post) => {
                return (<Card post={post} />)
            })}
        </div>
    );
}

export default Main;