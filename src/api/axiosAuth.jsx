import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// 백엔드와 연결한 후 디폴트값 수정해줄 것
const authService = axios.create({
    baseURL: `${SERVER_URL}/api`
});

export default authService;


