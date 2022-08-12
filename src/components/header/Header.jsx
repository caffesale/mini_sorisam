import React from "react";

function Header(params) {
    return (
        <header>
            <img src="" alt="logo" role="presentation" />
            <nav>
                {true
                ? (
                    <ul>
                        <li>로그인</li>
                        <li>회원가입</li> 
                    </ul>
                )
                : <></>
                }
            </nav>
        </header>
    )
}

export default Header;