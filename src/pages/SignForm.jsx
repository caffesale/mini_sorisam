import React, { useContext } from "react";
import { useState } from "react";
import  SignIn from "../components/signform/SignIn";
import SignUp from "../components/signform/SignUp";
import AuthContext from "../context/AuthProvider";

const SignForm = () => {
    const {auth}= useContext(AuthContext);
    const [isSigned, setIsSigned] = useState(false);

    const toggleIsLogin = () => {
        setIsSigned(!isSigned)
    }

    // 이 부분도 3항으로 구현하기
    return (
        <>
            { auth === {} 
            ? <SignUp toggleIsLogin={toggleIsLogin}/>
            : <SignIn toggleIsLogin={toggleIsLogin}/>}
        </>
    )
}

export default SignForm;