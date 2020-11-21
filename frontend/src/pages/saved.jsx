import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom';
import UserContext from '../context/userContext';

export default function Saved() {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    
    useEffect(() => {
        if(!userData.user){
            history.push('/login');
        }
    });

    return (
        <div>
            Saved
        </div>
    )
}
