import axios from 'axios';
import React, {useContext} from 'react';
import { FormCheck } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import UserContext from '../context/userContext';

export default function SaveLocation(props) {
    const {setuserData} = useContext(UserContext);
    const history = useHistory();
    let loc = props.loc;
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjNlNjU5ODAwMjJmMGY1ODU2NGJhYyIsImlhdCI6MTYwNzkzNTE3NX0.lPKxvsCB1NMKXbC8Z-qnNGSdnJUVqepS_nf2bqKZClI';
    
    const submit = async (e) => {
        e.preventDefault();
        axios.get('http://localhost:5000/saveLoc/all', {
            headers: {
                Authorization: `Bearer ${token}`,
            }, 
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log("Some Error Occur", err);
        });
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="submit" value="Save Loc" />
            </form>
        </div>
    )
}

// + localStorage.getItem('jwtToken')

// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjNlNjU5ODAwMjJmMGY1ODU2NGJhYyIsImlhdCI6MTYwNjQxMTUyMH0.tVIz95Kc3_2vrmbGmhhX5rGCQO8KQb3i_GUhYXpaIuY';
// axios.interceptors.request.use(
//     config => {
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )

// export default function SaveLocation(props) {
//     const {userData} = useContext(UserContext);
//     const history = useHistory();
//     let location = props.loc;

//     const submit = async (e) => {
//         e.preventDefault();
//         if(!userData.user){
//             history.push('/login');
//         }
//         else {
//             await axios.post('http://localhost:5000/saveLoc/');
//             // axios
//             //     .post("http://localhost:5000/saveLoc/", 
//             //     { 
//             //         location, 
//             //         headers: {"x-auth-token" : token} 
//             //     })
//             //     .then((response) => {
//             //         alert(location + " saved to your account");
//             //         e.preventDefault();
//             //     })
//             //     .catch((error) => {
//             //         console.log("error is :", error);
//             //     });
//             // try {
//             //     axios.post("http://localhost:5000/saveLoc/", location)
//             //     alert(location + " saved to your account");
//             //     e.preventDefault();
//             // } catch (err) {
//             //     console.log(err);
//             // }
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <input type="submit" value="Save Loc" />
//             </form>
//         </div>
//     )
// }
