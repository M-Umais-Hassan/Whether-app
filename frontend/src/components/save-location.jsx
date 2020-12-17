import Axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SaveLocation(props) {
    const history = useHistory();
    let loc = props.loc;
    const submit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "http://localhost:5000/users/tokenIsValid",
            null,
            { headers: {"x-auth-token": token} }
        );
        console.log(tokenRes);
        if (tokenRes.data == true) {
            Axios({
                method: 'post',
                url: 'http://localhost:5000/saveLoc/',
                headers: {"x-auth-token": token}, 
                data: {
                    "location": loc, 
                }
            });
            toast.success(loc + " Added to your saved locations");
        }
        else {
            toast.error("Cannot add location please login first");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="submit" value="Save Loc" />
                <ToastContainer />
            </form>
        </div>
    )
}
