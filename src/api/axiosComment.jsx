import axios from "axios";

// 백엔드와 연결한 후 디폴트값 수정해줄 것
const axiosComment = axios.create({
    baseURL: 'http://localhost:3000/api/posts'
});

export default axiosComment;
