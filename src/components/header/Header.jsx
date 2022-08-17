import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/dist/css/main.css'
import { removeCookie } from '../../shared/cookie';

//전역 context 테스트
import AuthContext from '../../context/AuthProvider';

const Header = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
            <nav className='header'>
                <h1>Header</h1>
                <ul className='nav'>
                    { auth.isLogin === false
                    ? <>
                    <li className='nav__item'>
                        <button  onClick={()=>{navigate('/signUp')}} type="button">Sign Up</button>
                    </li>
                    <li className='nav__item'>
                        <button  onClick={()=>{navigate('/signIn')}} type="button">Login</button>
                    </li>
                    </>
                    : <>
                    <li>
                    <button  onClick={()=>{
                        removeCookie('login_token');
                        setAuth({
                                isLogin : false,
                                accessToken : undefined
                        })
                        }} type="button">로그아웃</button>
                    </li>
                    </>

                    }
                    
                </ul>
            </nav>
        )
    }



export default Header;