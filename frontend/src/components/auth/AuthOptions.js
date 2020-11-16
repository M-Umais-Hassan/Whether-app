import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import UserContext from '../../context/userContext';

export default function AuthOptions(props) {
    const userData = useContext(UserContext); 

    const  history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");

    return (
        <div>
            {
                userData.user ? (
                    <button>Logout</button>
                ) : (
                <>
                <button onClick={register}>Register</button>
                <button onClick={login}>Login</button>
                </>
            )}
        </div>
    )
}
