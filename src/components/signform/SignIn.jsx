import React, { useContext, useEffect, useState } from "react";
// axios 불러오기
import authService from "../../api/axiosAuth";
//
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../shared/cookie";

// 전역 context 불러오기
import AuthContext from "../../context/AuthProvider";
import axios from "axios";

function SignIn({toggleIsLogin}) {
    const {auth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate()

    const [user, setUser] = useState({
        id: "",
        password: "",
    })
    
    const onChangeHandler = (e) => {
        setUser(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try{
            const response = await authService.post('/login', {
                username: user.id,
                password: user.password
            })

            const accessToken = response?.data.result;
            // if 토큰이 있으면 navigate로 메인 페이지 보내는 로직 추가하기
            setCookie('login_token', accessToken);
            setAuth({
                isLogin : true,
                accessToken : accessToken
            })
            console.log(auth);
            navigate('/');
        }
        catch(error) {
            if(!error.response){
                console.log('서버에서 응답이 없습니다!');
            }
            else if(error.response?.status === 400){
                console.log('로그인 중 유저의 이름이나 비밀번호를 찾을 수 없습니다.');
            }
            else if(error.response?.status === 401){
                console.log('Unauthorized : 액세스 권한이 없습니다.');
            }
            else{
                console.log(error);
            }
        }
    }

    return (
        <fieldset>
            <form className="form" onSubmit={onSubmitHandler}>
                <div>
                    <p>SignIn</p>
                </div>
                {/* id입력 */}
                <label htmlFor="id">ID</label>
                <input id="id" name="id" onChange={onChangeHandler} type="text" required/>
                {/* pw입력 */}
                <label htmlFor="pw">Password</label>
                <input id="pw" name="password" onChange={onChangeHandler} type="password" required/>
                <div>
                    <button className="form__btn" onClick={() => {navigate(-1)}}>취소</button>
                    <button className="form__btn">확인</button>
                </div>
            </form>
        </fieldset>
    )
}

export default SignIn;