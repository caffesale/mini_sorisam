import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../api/axiosAuth";

function SignUp() {
    const navigate = useNavigate();
    // 파일, 입력값 받아오기
    const signupIdRef = useRef();
    const signupPwRef = useRef();
    const signupPwConfirmRef = useRef();
    const signupIntroRef = useRef();
    const [files, setFiles] = useState(null);
    
    //files state에 입력 값 넣어주기
    const onImgHandler = (e) => {
        if(e.target.files === null ) return;
        
        if(e.target.files[0]) {
            setFiles(e.target.files[0])
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const idValue = signupIdRef.current.value;
        const pwValue = signupPwRef.current.value;
        const pwConfirmValue = signupPwConfirmRef.current.value;
        const introValue = signupIntroRef.current.value;

            try{
                // const formData = new FormData();
                // formData.append('img', files);

                const data = { username:idValue, password:pwValue, repassword:pwConfirmValue, intro:introValue};
                // formData.append('requestDto', JSON.stringify(data));

                const response = await authService.post('/signup', JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                console.log(response);
            }
            catch(error){
                console.log(error.response);
            }
        }

    return (
        <fieldset>
            <form onSubmit={onSubmitHandler}>
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
                <label htmlFor="pwConfirm">Password Confirm</label>
                <input ref={signupPwConfirmRef} id="pwConfirm" type="password" required/>
                {/* 자기소개 */}
                <label htmlFor="introduce">Introduce</label>
                <input ref={signupIntroRef} id="introduce" type="text" required/>
                {/* 이미지 제출 */}
                <label htmlFor="img">User Image</label>
                <input onChange={onImgHandler} id="img" type="file" accept="image/png, image/jpeg, image/jpg"></input>
                <div>
                    <button type="button" onClick={() => {navigate(-1)}}>취소하기</button>
                    <button>확인</button>
                </div>
            </form>
        </fieldset>
    )
}

export default SignUp;