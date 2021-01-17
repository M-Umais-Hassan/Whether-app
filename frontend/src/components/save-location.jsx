import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

export default function SaveLocation(props) {
    const history = useHistory();
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);
    let getloc = [];
    let loc = props.loc;
    const submit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "http://localhost:5000/users/tokenIsValid",
            null,
            { headers: {"x-auth-token": token} }
        );
        if (tokenRes.data == true) {
            setLoading(true);
            await Axios.get(
                "http://localhost:5000/saveLoc/all",
                { headers: {"x-auth-token": token} }
            )
            .then((res) => {
                for(var i=0; i<res.data.length; i++) {
                    getloc.push(res.data[i].location);
                }
            })
            .catch((err) => console.log(err));

            if(getloc.includes(loc)) {
                toast.warn(loc + " is already in your saved locations.");
                setLoading(false);
            }
            else {
                Axios({
                    method: 'post',
                    url: 'http://localhost:5000/saveLoc/',
                    headers: {"x-auth-token": token}, 
                    data: {
                        "location": loc, 
                    }
                });
                toast.success(loc + " Added to your saved locations");
                setLoading(false);
            }
        }
        else {
            toast.error("Cannot add location please login first");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <button class="saveBtn" type="submit">
                    {loading==true ? (
                        <div className="saveLoc-loader">
                            <Loader type="Oval" color="crimson" height={20} width={20} />  
                        </div>
                    ) : "Save Location" }
                </button>
                <ToastContainer />
            </form>
        </div>
    )
}
