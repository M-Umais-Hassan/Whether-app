import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/userContext';
import ErrorNotice from '../../misc/ErrorNotice';
import {Link} from 'react-router-dom';

export default function Register() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [passwordCheck, setpasswordCheck] = useState();
    const [displayName, setdisplayName] = useState();
    const [error, setError] = useState();

    const {setuserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const newUser = {email, password, passwordCheck, displayName};
            await Axios.post("http://localhost:5000/users/register", newUser);
            const loginRes = await Axios.post("http://localhost:5000/users/login", {
                email,
                password,
            });
            setuserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
        
    };

    return (
        <div>
            <h1>Register</h1>
            {
                error && <ErrorNotice message={error} clearError={()=>setError(undefined)} />
            }
            <form onSubmit={submit}>
                <input type="email" id="register-email" onChange={(e) => setemail(e.target.value)} /><br/><br/>
                <input type="password" id="register-password" onChange={(e) => setpassword(e.target.value)} /><br/><br/>
                <input type="password" id="verify-password" onChange={(e) => setpasswordCheck(e.target.value)} /><br/><br/>
                <input type="text" id="register-display-name" onChange={(e) => setdisplayName(e.target.value)} /><br/><br/>
                Alrady have an account? <Link to="/login">Login</Link><br/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
}


