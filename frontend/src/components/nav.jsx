import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import userContext from '../context/userContext';

export default function Nav_bar() {
    const {userData, setuserData} = useContext(userContext);

    const  history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setuserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "");
    };

    return (
        <nav className="nav">
            <h1 className="brand">
                <i className="fa fa-home"></i><Link to='/'>Weath<span>er-Gu</span>ider</Link>
            </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/saved'>Saved</Link></li>
                {
                    userData.user ? (
                    <li><Link onClick={logout}>Log out</Link></li> ) : ( 
                    <>
                        <li><Link onClick={register}>Register</Link></li>
                        <li><Link onClick={login}>Login</Link></li>
                    </>
                    )
                }
            </ul>
        </nav>
    );
  
}


