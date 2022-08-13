import React from "react";
import { useState } from "react";
import { SignIn, SignUp } from "../components/signform"

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