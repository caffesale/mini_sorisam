import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/dist/css/main.css'
import { removeCookie } from '../../shared/cookie';

const Header = () => {
    const navigate = useNavigate();

    return (
        <nav className='header'>
            <h1>Header</h1>
                <ul className='nav'>
                    <li className='nav__item'>
                        <button  onClick={()=>{navigate('/signform')}} type="button">Sign Up</button>
                    </li>
                    <li className='nav__item'>
                        <button  onClick={()=>{navigate('/signform')}} type="button">Login</button>
                    </li>
                    <li className='nav__item'>
                        <button onClick={()=>{removeCookie('login_token')}}>로그아웃</button>
                    </li>
                </ul>
        </nav>
    );
}

export default Header;