import axios from 'axios';
import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../context/userContext';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjNlNjU5ODAwMjJmMGY1ODU2NGJhYyIsImlhdCI6MTYwNjQxMTUyMH0.tVIz95Kc3_2vrmbGmhhX5rGCQO8KQb3i_GUhYXpaIuY';
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

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
            await axios.post('http://localhost:5000/saveLoc/');
            // axios
            //     .post("http://localhost:5000/saveLoc/", 
            //     { 
            //         location, 
            //         headers: {"x-auth-token" : token} 
            //     })
            //     .then((response) => {
            //         alert(location + " saved to your account");
            //         e.preventDefault();
            //     })
            //     .catch((error) => {
            //         console.log("error is :", error);
            //     });
            // try {
            //     axios.post("http://localhost:5000/saveLoc/", location)
            //     alert(location + " saved to your account");
            //     e.preventDefault();
            // } catch (err) {
            //     console.log(err);
            // }
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
