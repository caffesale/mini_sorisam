import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Header</h1>
            <div>
                <button onClick={()=>{navigate('/signup')}}>Sign Up</button>
                <button onClick={()=>{navigate('/login')}}>Login</button>
            </div>
        </div>
    );
}

export default Header;