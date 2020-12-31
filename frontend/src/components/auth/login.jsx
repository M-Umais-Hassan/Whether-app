import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/userContext';
import ErrorNotice from '../../misc/ErrorNotice';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import bg from '../../assets/about-bg1.jpg';
import {motion} from 'framer-motion';

export default function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(null);
    const {setuserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            setLoading(false);
            const loginUser = {email, password};
            const loginRes = await Axios.post("http://localhost:5000/users/login", loginUser);
            setuserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            setLoading(true);
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="nav">
                    <h1 className="brand">
                        <Link to='/'><span className="outer-span">Weath<span className="inner-span">er-Gu</span>ider</span></Link>
                    </h1>
                </div>
                <motion.div className="main"
                    initial={{ y: -350 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                    <p className="sign">Sign in</p>
                    { error && <ErrorNotice message={error} /> }
                    <form className="form1" onSubmit={submit}>
                        <input className="un" placeholder="Enter Email here" type="email" id="login-email" onChange={(e) => setemail(e.target.value)} /><br/>
                        <input className="pass" placeholder="Enter Password here" type="password" id="login-password" onChange={(e) => setpassword(e.target.value)} /><br/>
                        <span>Don't have an account? <Link to="/register">Register here</Link></span><br/><br/>
                        <input type="submit" className="login-btn" value="Login"/>
                    </form> 
                    {loading==false && !error ? (
                        <div className="login-loader">
                            <Loader type="Oval" color="crimson" height={50} width={50} />
                        </div>  
                    ) : null }
                </motion.div>
            </div>
        </div>
    )
}
