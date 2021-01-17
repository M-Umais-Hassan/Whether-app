import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

var api_key = "b9543edbd9760109c497368df500290e";
// b8bded5189dcb274c8d1256ef4e62932
// b9543edbd9760109c497368df500290e
export default function Saved_inner_box() {
    const [location, setLocation] = useState([]);
    const [temprature, setTemprature] = useState();
    const [description, setDescription] = useState();
    const [modalLoc, setmodalLoc] = useState();
    const [icon, setIcon] = useState();
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState(6);

    let loc = [];
    let i = 0;

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

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    function showMore(value) {
        setLoading(true);
        setModal(true);
        Axios.get(`http://api.weatherstack.com/current?access_key=b9543edbd9760109c497368df500290e&query=${value}`)
        .then((res) => {
            setTemprature(res.data.current.temperature);
            setDescription(res.data.current.weather_descriptions[0]);
            setmodalLoc(res.data.location.name);
            setIcon(res.data.current.weather_icons);
            setLoading(false);
        })
        .catch ((err) => {
            console.log(err);
        });
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

    const alert_style = {
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "20px"
    };

    return (
        <div>
            {loading==false && location.length == 0 ? (
                <div style={alert_style}>
                    <strong>No Location Found</strong>
                </div>
            ) : null }
            {loading==true ? (
                <div className="saved-loader">
                    <Loader type="Oval" color="crimson" height={50} width={50} />
                </div>  
            ) : null }
            <Row>
                {location.slice(0, visible).map((value, index) => {
                    return (
                        <Col md={4}>
                            <motion.div 
                                id={index} className="saved-box"
                                whileHover = {{ scale: 1.1 }}
                                transition = {{ duration: 1 }}    
                            >
                                <motion.div 
                                    class="del-btn text-right"
                                    initial = {{ opacity: 0, x: "-100vw"}}
                                    animate={{ x: 0 }}
                                    whileHover = {{ opacity: 1 }} 
                                >
                                    <button id={value} onClick={(e) => showMore(e.target.id)} className="btn btn-lg eye">👁️</button>
                                    <button id={value} onClick={(e) => deleteLoc(e.target.id)} className="btn btn-lg remove">✖️</button>
                                </motion.div>
                                <h1 className="location" id={index}>{value}</h1>
                                <Modal isOpen={modal}>
                                    {loading==true ? (
                                        <div className="saved-loader">
                                            <Loader type="Oval" color="crimson" height={50} width={50} />
                                        </div>  
                                    ) : 
                                    <div>
                                        <div class="text-right">
                                            <button onClick={() => setModal(false)} className="close"><AiOutlineClose /></button>
                                        </div> 
                                        <div className="model-text">
                                            <h2>{ modalLoc }</h2>
                                            <h1>{ temprature } &#8451;</h1>
                                            <h3>{ description }</h3>
                                            <img src={ icon } alt="icon" height="150px" />
                                        </div>
                                    </div>
                                    }
                                </Modal>
                            </motion.div>
                        </Col>
                    );
                })}
            </Row>
            {loading==false && location.length != 0 ? (
                <div className="load-more">
                    <button onClick={showMoreItems}>Load More</button>
                </div>
            ) : null }
        </div>
    );
}

