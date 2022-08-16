import React from 'react';
import Header from '../components/header/Header';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 백엔드로 POST
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* 글 제목 입력 */}
                <label htmlFor='title'>제목</label>
                <input type='text' id='title' name='title' placeholder='제목을 입력하세요' />

                {/* 글 내용 입력 */}
                <label htmlFor='content'>내용</label>
                <textarea id='content' name='content' placeholder='내용을 입력하세요' />

                {/* 오디오 업로드 */}
                <label htmlFor='audio-file'>파일</label>
                <input type='file' name='audio-file' id='audio-file' accept=".mp3"/>

                {/* 글 제출 버튼 */}
                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;