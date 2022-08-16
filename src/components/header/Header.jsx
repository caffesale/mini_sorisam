
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

const Header = () => {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);

    return (
        <nav>
            <h1>Header</h1>
            { auth.loginStatus 
                ? (
                <ul>
                    <li>
                        <button onClick={()=>{navigate('/signform')}} type="button">Sign Up</button>
                    </li>
                    <li>
                        <button onClick={()=>{navigate('/signform')}} type="button">Login</button>
                    </li>
                </ul>
                )
                : (
                <ul>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
                )}
        </nav>
    );
}

export default Header;