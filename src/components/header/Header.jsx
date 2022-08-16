
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <h1>Header</h1>
            <ul>
                <li>
                    <button onClick={()=>{navigate('/signup')}} type="button">Sign Up</button>
                </li>
                <li>
                    <button onClick={()=>{navigate('/login')}} type="button">Login</button>
                </li>
            </ul>
        </nav>
    );
}

export default Header;