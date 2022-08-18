import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';


const Main = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    // 백엔드로부터 받아오는 게시글 배열
    //  posts = [{title: '', content: '', filepath: '', postingId: '', username: ''}, {...}, {...}, ...]

    // useEffect(async () => {
    //     try{
    //         const response = await axios.get('http://54.180.220.222/api/posts');
    //         setPosts([...response.data]);
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }, [])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://54.180.220.222/api/posts',
        }).then(response => {
            // console.log(response);
            setPosts([...response.data]);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            {/* 글 작성 버튼 */}
            <button onClick={() => { navigate('/posts') }}>글 작성</button>
            {/* 글 map 렌더링 */}
            {posts?.map((post) => {
                return (<Card post={post} key={post.postingId}/>)
            })}
        </div>
    );
}

export default Main;