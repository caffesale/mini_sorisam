import React from 'react';
import axios from 'axios';
import Header from '../components/header/Header';

const Form = () => {

    const constraintObj = { audio: true };

    navigator.mediaDevices.getUserMedia(constraintObj)
        .then(function (mediaStreamObj) {
            

            //add listeners for saving audio
            let start = document.getElementById('btnStart');
            let stop = document.getElementById('btnStop');
            let auxSave = document.getElementById('playback');
            let mediaRecorder = new MediaRecorder(mediaStreamObj);

            let chunks = [];


            start.addEventListener('click', (ev) => {
                mediaRecorder.start();
                start.style.backgroundColor = 'red';
                start.style.color = 'white';
                console.log(mediaRecorder.state);
            })
            stop.addEventListener('click', (ev) => {
                mediaRecorder.stop();
                start.style = 'none';
                console.log(mediaRecorder.state);
            });
            mediaRecorder.ondataavailable = function (ev) {
                chunks.push(ev.data);
            }
            mediaRecorder.onstop = (ev) => {
                let blob = new Blob(chunks, { 'type': 'audio/mp3;' });
                chunks = [];
                let audioURL = window.URL.createObjectURL(blob);
                auxSave.src = audioURL;
            }
        })
        .catch(function (err) {
            console.log(err.name, err.message);
        });



    const handleSubmit = (event) => {
        event.preventDefault();

        // 백엔드로 POST
        axios({
            method: 'POST',
            url: 'http://localhost:5001/posts',
            data: {
                // filePath: '',
                title: event.target.title.value,
                contents: event.target.content.value,
            }
        })

        event.target.title.value = '';
        event.target.content.value = '';
        return (
            <div>
                {/* 상단 헤더 부분 */}
                <Header />

                <form onSubmit={handleSubmit}>
                    {/* 글 제목 입력 */}
                    <label htmlFor='title'>제목</label>
                    <input type='text' id='title' name='title' placeholder='제목을 입력하세요' /><br/>

                    {/* 글 내용 입력 */}
                    <label htmlFor='content'>내용</label>
                    <textarea id='content' name='content' placeholder='내용을 입력하세요' /><br/>

                    {/* 오디오 녹음 */}
                    <button id="btnStart">START RECORDING</button>
                    <button id="btnStop">STOP RECORDING</button><br/>
                    <audio controls id="playback"></audio><br/>

                    {/* 오디오 업로드 */}
                    <label htmlFor='audio-file'>파일</label>
                    <input type='file' name='audio-file' id='audio-file' accept="audio/*" capture /><br/>

                    {/* 글 제출 버튼 */}
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Form;