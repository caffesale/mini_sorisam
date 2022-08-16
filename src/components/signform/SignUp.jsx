import React, { useRef, useState } from "react";
import authService from "../../api/axiosAuth";

function SignUp({toggleIsLogin}) {
    const signupIdRef = useRef();
    const signupPwRef = useRef();
    const signupPwConfirmRef = useRef();
    const signupIntroRef = useRef();
    const [img, setImg] = useState();

    const validationCheck = (id, password, passwordConfirm) => {
        const regExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()-_=+])[0-9a-zA-Z`~!@#$%^&*()-_=+]{8,24}$/;

        if(id.length <= 6){
            alert('아이디는 6글자 이상으로 지어주세요')
            return false;
        }
        if(!regExp.test(password)){
            alert('비밀번호는 8~24자의 영문, 숫자, 특수문자 조합이어야 합니다!')
            return false;
        }

        if(password !== passwordConfirm){
            alert('입력한 두 비밀번호가 일치하지 않습니다!')
            return false;
        }

        return true;
    }
    
    const onImgHandler = (e) => {
        setImg({[e.target.name] : e.target.file})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const idValue = signupIdRef.current.value;
        const pwValue = signupPwRef.current.value;
        const pwConfirmValue = signupPwConfirmRef.current.value;
        const introValue = signupIntroRef.current.value;
        // 유효성검사
        if(validationCheck(idValue, pwValue, pwConfirmValue)){
            // true면 img파일이 있는지 확인하기
            if (img.img) {
                try{
                    const response = await authService.post('/signup', {
                        username: idValue,
                        password: pwValue,
                        img: "",
                        intro: introValue
                    },{
                        withCredentials: true
                    })
                    // 회원가입 성공했나 확인
                    // console.log(response)
                }
                catch(error){
                    console.log({'이미지를 포함하지 않는 회원가입 실패 에러' : error.status});
                }
            }
            else{
                try{
                    const formData = new FormData();
                    formData.append('username', idValue);
                    formData.append('password', pwValue);
                    formData.append('img', img.img);
                    formData.append('intro', introValue);

                    // formData가 제대로 생성되었는지 확인
                    // console.log(formData);
                    const response = await authService.post('/signup', formData, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                }
                catch(error){
                    console.log({'이미지를 포함한 회원가입 실패':error.status})
                }
            }

        }
    }

    return (
        <form onSubmit={onSubmitHandler} encType="multipart/form-data">
            <div>
                <p>SignUp</p>
            </div>
            {/* id입력 */}
            <label htmlFor="id">ID</label>
            <input ref={signupIdRef} id="id" type="text" required/>
            {/* pw입력 */}
            <label htmlFor="pw">Password</label>
            <input ref={signupPwRef} id="pw" type="password" required/>
            {/* pw확인 */}
            <label htmlFor="pw">Password Confirm</label>
            <input ref={signupPwConfirmRef} id="pw" type="password" required/>
            {/* 자기소개 */}
            <label htmlFor="introduce">Introduce</label>
            <input ref={signupIntroRef} id="introduce" type="text" required/>
            {/* 이미지 제출 */}
            <label htmlFor="img">User Image</label>
            <input onChange={onImgHandler} id="img" name="img" type="file" accept="image/png, image/jpeg, image/jpg"></input>
            <div>
                <button onClick={{toggleIsLogin}}>로그인 하러가기</button>
                <button>확인</button>
            </div>
        </form>
    )
}

export default SignUp;