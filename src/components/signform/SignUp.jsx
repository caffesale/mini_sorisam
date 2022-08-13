import React from "react";

function SignUp({toggleIsLogin}) {
    const validationCheck = (password, passwordConfirm) => {
        const regExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*()-_=+])[0-9a-zA-Z`~!@#$%^&*()-_=+]{8,24}$/

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

    return (
        <form action="" encType="multipart/form-data">
            <div>
                <p>SignUp</p>
            </div>
            {/* id입력 */}
            <label htmlFor="id">ID</label>
            <input id="id" type="text" required/>
            {/* pw입력 */}
            <label htmlFor="pw">Password</label>
            <input id="pw" type="password" required/>
            {/* pw확인 */}
            <label htmlFor="pw">Password Confirm</label>
            <input id="pw" type="password" required/>
            {/* 자기소개 */}
            <label htmlFor="introduce">Introduce</label>
            <input id="introduce" type="text" required/>
            {/* 이미지 제출 */}
            <label htmlFor="img">User Image</label>
            <input id="img" type="file" accept="image/png, image/jpeg"></input>
            <div>
                <button onClick={{toggleIsLogin}}>로그인 하러가기</button>
                <button>확인</button>
            </div>
        </form>
    )
}

export default SignUp;