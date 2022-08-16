<<<<<<< HEAD

=======
>>>>>>> dev
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
<<<<<<< HEAD
        <nav>
            <h1>Header</h1>
                <ul>
                    <li>
                        <button onClick={()=>{navigate('/signform')}} type="button">Sign Up</button>
                    </li>
                    <li>
                        <button onClick={()=>{navigate('/signform')}} type="button">Login</button>
                    </li>
                </ul>
        </nav>
=======
        <div>
            <h1>Header</h1>
            <div>
                <button onClick={()=>{navigate('/signup')}}>Sign Up</button>
                <button onClick={()=>{navigate('/login')}}>Login</button>
            </div>
        </div>
>>>>>>> dev
    );
}

export default Header;