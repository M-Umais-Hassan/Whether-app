import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/userContext';
import ErrorNotice from '../../misc/ErrorNotice';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default function Register() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [passwordCheck, setpasswordCheck] = useState();
    const [displayName, setdisplayName] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(null);

    const {setuserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            setLoading(false);
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
            setLoading(true);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
        
    };

    return (
        <div className="register-page">
            <div className="container">
                <div className="nav">
                    <h1 className="brand">
                        <Link to='/'><span className="outer-span">Weath<span className="inner-span">er-Gu</span>ider</span></Link>
                    </h1>
                </div>
                <div className="main">
                    <p className="sign">Sign up</p>
                    { error && <ErrorNotice message={error} /> }
                    <form className="form1" onSubmit={submit}>
                        <input className="email" placeholder="Enter email here" type="email" id="register-email" onChange={(e) => setemail(e.target.value)} />
                        <input className="registerpass"  placeholder="Enter password here" type="password" id="register-password" onChange={(e) => setpassword(e.target.value)} />
                        <input className="cpass" type="password"  placeholder="Confirm password" id="verify-password" onChange={(e) => setpasswordCheck(e.target.value)} />
                        <input className="registerun" type="text"  placeholder="Enter username here" id="register-display-name" onChange={(e) => setdisplayName(e.target.value)} />
                        <span>Already have account? <Link to="/login">Login here</Link></span><br/><br/>
                        <input type="submit" className="register-btn" value="Register"/>
                    </form>
                    {loading==false && !error ? (
                        <div className="register-loader">
                            <Loader type="Oval" color="crimson" height={50} width={50} />
                        </div>  
                    ) : null }
                </div>
            </div>
        </div>
    );
}


