import Axios from 'axios';
import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../context/userContext';

export default function SaveLocation(props) {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    let location = props.loc;

    const submit = async (e) => {
        e.preventDefault();
        if(!userData.user){
            history.push('/login');
        }
        else {
            try {
                await Axios.post("http://localhost:5000/saveLoc/", location);
                alert("Saved");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input type="submit" value="Save Loc" />
            </form>
        </div>
    )
}
