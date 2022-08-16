import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import  SignIn from "../components/signform/SignIn";
import SignUp from "../components/signform/SignUp";

const SignForm = () => {
    const [isSigned, setIsSigned] = useState();

    const toggleIsLogin = () => {
        setIsSigned(!isSigned)
    }

    return (
        <>
            ? <SignUp toggleIsLogin={toggleIsLogin}/>
            : <SignIn toggleIsLogin={toggleIsLogin}/>
=======
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
>>>>>>> dev
        </>
    )
}

export default SignForm;