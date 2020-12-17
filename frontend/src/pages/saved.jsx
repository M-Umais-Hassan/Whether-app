import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../context/userContext';
import Saved_inner_box from '../components/saved-inner-box';
import { Row, Col } from 'react-bootstrap';
import Nav_bar from '../components/nav';
import Pagination from '../components/pagination';
import Axios from 'axios';

export default function Saved() {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    
    useEffect( async () => {
        let token = localStorage.getItem("auth-token");
        const tokenRes = await Axios.post(
            "http://localhost:5000/users/tokenIsValid",
            null,
            { headers: {"x-auth-token": token} }
        );
        if(!token || tokenRes==false){
            history.push('/login');
        }
    });

    return (
        <div>
            <Nav_bar />
            <Row>
                <Col md={4}>
                    <Saved_inner_box />    
                </Col>
            </Row>
            <Pagination />
        </div>
    )
}
