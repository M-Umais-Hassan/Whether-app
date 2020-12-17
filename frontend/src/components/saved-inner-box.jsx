import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

export default function Saved_inner_box() {
    const [location, setLocation] = useState([])

    useEffect(() => {
        const getLoc = async (e) => {
            let token = localStorage.getItem("auth-token");
            if(token != "") {
                await Axios.get(
                    "http://localhost:5000/saveLoc/all",
                    { headers: {"x-auth-token": token} }
                )
                .then((res) => {
                    console.log(res.data[0]);
                    console.log(res.data.length);
                })
                .catch((err) => console.log(err));
            }
        }
        getLoc();
    }, []);
    
    return (
        <div className="saved-box">
            <Row>
                <Col md={6}>
                    <Col md={12}><h1>100 C</h1></Col>
                    <Col md={12}><h2>Sunny</h2></Col>
                </Col>
                <Col md={6}>
                    Icon
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4>Sundar Road</h4>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h5>Raiwind, Pakistan</h5>
                </Col>
            </Row>
            <Row>
                <button>Show More</button>
                <button>Delete</button>
            </Row>
        </div>
    )
}