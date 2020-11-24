import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/userContext';
import ErrorNotice from '../../misc/ErrorNotice';
import { Link } from 'react-router-dom';
import Nav_bar from '../nav';

export default function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [error, setError] = useState();
    const {setuserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = {email, password};
            const loginRes = await Axios.post("http://localhost:5000/users/login", loginUser);
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
            <Nav_bar />
            <h1>Login</h1>
            { error && <ErrorNotice message={error} clearError={()=>setError(undefined)} /> }
            <form onSubmit={submit}>
                <input type="email" id="login-email" onChange={(e) => setemail(e.target.value)} /><br/><br/>
                <input type="password" id="login-password" onChange={(e) => setpassword(e.target.value)} /><br/><br/>
                Don't have an account? <Link to="/register">Register here</Link><br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
