import React, { useContext, useEffect, useState } from "react";
// axios 불러오기
import authService from "../../api/axiosAuth";
//
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../shared/cookie";

// 전역 context 불러오기
import AuthContext from "../../context/AuthProvider";

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
            },{
                withCredentials: true
            })

            // console.log(response);
            // response 생김새 보고 아래 accessToken 수정하기
            const accessToken = response?.data?.token;
            // if 토큰이 있으면 navigate로 메인 페이지 보내는 로직 추가하기
            if(accessToken){
                setCookie('login_token', accessToken);
                // 통신 성공하면 시도해볼 것
                // setAuth({
                //     isLogin : true,
                //     accessToken : accessToken
                // })
                // console.log(auth);
                // navigate('/');
            }
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
                console.log('로그인에 그냥 실패했습니다');
            }
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
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
                <button onClick={() => {navigate(-1)}}>취소</button>
                <button>확인</button>
            </div>
        </form>
    )
}

export default SignIn;