import React from "react";
import { useState } from "react";
import  SignIn from "../components/signform/SignIn";
import SignUp from "../components/signform/SignUp";

const SignForm = () => {
    const [isSigned, setIsSigned] = useState();

    const toggleIsLogin = () => {
        setIsSigned(!isSigned)
    }

    return (
        <>
            {isSigned
            ? <SignUp toggleIsLogin={toggleIsLogin}/>
            : <SignIn toggleIsLogin={toggleIsLogin}/>}
        </>
    )
}

export default SignForm;