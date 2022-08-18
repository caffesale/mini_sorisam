import React from 'react';
import axios from 'axios';
import Header from '../components/header/Header';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        console.log(event.target.title.value);
        console.log(event.target.content.value);
        console.log(event.target.audio.files[0]);

        formData.append('title', event.target.title.value);
        formData.append('contents', event.target.content.value);
        formData.append('filePath', event.target.audio.files[0]);

        // 백엔드로 POST
        axios({
            method: 'POST',
            url: `${SERVER_URL}/api/posts`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: formData,
        }).then((response) => {
            if(response.status) {
                console.log(response.statusText);
            }
        }).catch((error) => {
            console.error(error);
        })

        event.target.title.value = '';
        event.target.content.value = '';
    }

    return (
        <div>
            {/* 상단 헤더 부분 */}
            <Header />

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* 글 제목 입력 */}
                <label htmlFor='title'>제목</label>
                <input type='text' id='title' name='title' placeholder='제목을 입력하세요' /><br />

                {/* 글 내용 입력 */}
                <label htmlFor='content'>내용</label>
                <textarea id='content' name='content' placeholder='내용을 입력하세요' /><br />

                {/* 오디오 녹음
                <button id="btnStart">START RECORDING</button>
                <button id="btnStop">STOP RECORDING</button><br />
                <audio controls id="playback"></audio><br /> */}

                {/* 오디오 업로드 */}
                <label htmlFor='audio'>파일</label>
                <input type='file' name='audio' id='audio' accept="audio/*" /><br />

                {/* 글 제출 버튼 */}
                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;