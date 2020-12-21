import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import Loader from 'react-loader-spinner';

var api_key = "b8bded5189dcb274c8d1256ef4e62932";

export default function Saved_inner_box() {
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);

    let loc = [];
    useEffect(() => {
        const getLoc = async (e) => {
            setLoading(true);
            let token = localStorage.getItem("auth-token");
            if(token) {
                await Axios.get(
                    "http://localhost:5000/saveLoc/all",
                    { headers: {"x-auth-token": token} }
                )
                .then((res) => {
                    for(var i=0; i<res.data.length; i++) {
                        loc.push(res.data[i].location);
                    }
                })
                .catch((err) => console.log(err));
            }
            setLocation(loc);
            setLoading(false);
        }
        getLoc();
    }, []);

    function showMore(value) {
        console.log(value);
        // Axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${value}`)
        // .then(res=>{
        //     console.log(res);
        // })
        // .catch ((err) => {
        //     console.log(err);
        // });
    }

    const deleteLoc = async (Location) => {
        let token = localStorage.getItem("auth-token");
        await Axios.delete(`http://localhost:5000/saveLoc/delete/${Location}`, { headers: {"x-auth-token": token} });
        await Axios.get(
            "http://localhost:5000/saveLoc/all",
            { headers: {"x-auth-token": token} }
        )
        .then((res) => {
            for(var i=0; i<res.data.length; i++) {
                loc.push(res.data[i].location);
            }
        })
        .catch((err) => console.log(err));
        setLocation(loc);
    }

    return (
        <div>
            {loading==true ? (
                        <div className="saved-loader">
                            <Loader type="Oval" color="crimson" height={50} width={50} />
                        </div>  
                    ) : null }
            <Row>
                {location.map((value, index) => {
                    return (
                        <Col md={4}>
                            <div className="saved-box">
                                <h1 className="location" id={index}>{value}</h1>
                                <button id={index} className="btn btn-lg btn-info show-more">Show More</button>
                                <button id={value} onClick={(e) => deleteLoc(e.target.id)} className="btn btn-lg btn-danger remove">Remove</button>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    )
}



{/* <Col md={4}>
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
                            <Col md={12}>
                                <h4>{value}</h4>
                            </Col>
                            <Col md={12}>
                                <h5>Raiwind, Pakistan</h5>
                            </Col>
                            <button>Remove</button>
                        </div>
                    </Col>  */}