import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Saved_inner_box from '../components/saved-inner-box';
import Nav_bar from '../components/nav';
import Axios from 'axios';

export default function Saved() {
    const history = useHistory();
    
    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            const tokenRes = await Axios.post(
              "http://localhost:5000/users/tokenIsValid",
              null,
              { headers: {"x-auth-token": token} }
            );
            if(tokenRes.data == false) {
                history.push('/login');
            }
        };
      
        checkLoggedIn();
    }, []);

    return (
        <div>
            <div className="container">
                <Nav_bar />
                <Saved_inner_box /> 
            </div>
        </div>
    )
}
