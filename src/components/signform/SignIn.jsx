import React from "react";

function SignIn({toggleIsLogin}) {
    return (
        <form action="">
            <div>
                <p>SignIn</p>
            </div>
            {/* id입력 */}
            <label htmlFor="id">ID</label>
            <input id="id" type="text" required/>
            {/* pw입력 */}
            <label htmlFor="pw">Password</label>
            <input id="pw" type="password" required/>
            <div>
                <button onClick={{toggleIsLogin}}>회원가입 하러가기</button>
                <button>확인</button>
            </div>
        </form>
    )
}

export default SignIn;