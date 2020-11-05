import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home_inner(props) {  
    return (
        <div className="box">
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <div id="inner">
                            <Row>
                                <Col md={6}><h1>{props.weatherData.temprature} &#8451; , {props.weatherData.description}</h1></Col>
                                <Col md={4}><img src={props.weatherData.icon} alt="icon" height="100px" /></Col>
                                <Col md={2}></Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <h3>{props.weatherData.location}</h3>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <h4>{props.weatherData.region}, {props.weatherData.country}</h4>    
                                </Col>
                            </Row>
                            <Row className="lower">
                                <Col md={4}>Wind Speed : {props.weatherData.windSpeed} km/h</Col>
                                <Col md={4}>Pressure : {props.weatherData.pressure} mm</Col>
                                <Col md={4}>Humidity : {props.weatherData.humidity} %</Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    );
  
}

