import React from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Search_bar from './search-bar'
import SaveLocation from '../components/save-location';

var check = false;

class WeatherData extends React.Component {

    state = {
        coords: {
            longitude: 0,
            latitude: 0
        },
        data: {},
        inputData: "",
    }

    componentDidMount() {
        //get the device location (to check if the device supports geo location go at the last of this page)
        if(navigator.geolocation) {
            check = true;
            navigator.geolocation.getCurrentPosition((position) => {
                let newCoords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                this.setState({coords:newCoords});

                //Calling the weatherstack api
                Axios.get(`http://api.weatherstack.com/current?access_key=17bc98bc8b74dd85d858ce8f1302c8d7&query=${this.state.coords.latitude}, ${this.state.coords.longitude}`).then(res=>{
                
                    let weatherData = {
                        location: res.data.location.name,
                        region: res.data.location.region, 
                        country: res.data.location.country,
                        temprature: res.data.current.temperature,
                        description: res.data.current.weather_descriptions[0],
                        windSpeed: res.data.current.wind_speed,
                        pressure: res.data.current.pressure,
                        humidity: res.data.current.humidity,
                        icon: res.data.current.weather_icons
                    }
                    this.setState({data:weatherData})
                })
            })
        }
    }

    change = (value) => {
        this.setState({inputData:value})
    }

    changeWeather = (event) => {
        event.preventDefault();
        Axios.get(`http://api.weatherstack.com/current?access_key=17bc98bc8b74dd85d858ce8f1302c8d7&query=${this.state.inputData}`).then(res=>{
            let weatherData = {
                location: res.data.location.name,
                region: res.data.location.region, 
                country: res.data.location.country,
                temprature: res.data.current.temperature,
                description: res.data.current.weather_descriptions[0],
                windSpeed: res.data.current.wind_speed,
                pressure: res.data.current.pressure,
                humidity: res.data.current.humidity,
                icon: res.data.current.weather_icons
            }
            this.setState({data:weatherData})
        })
    }

    render() {
        const alert_style = {
            color: "red",
            fontWeight: "bold"
        };
        if(check == true) {
            return(
                <div>
                    <Search_bar changeWeather = {this.changeWeather} changeRegion = {this.change} />
                    <div className="box">
                        <Container>
                            <Row>
                                <Col md={1}></Col>
                                <Col md={10}>
                                    <div id="inner">
                                        <Row>
                                            <Col md={6}><h1>{this.state.data.temprature} &#8451; , {this.state.data.description}</h1></Col>
                                            <Col md={4}><img src={this.state.data.icon} alt="icon" height="100px" /></Col>
                                            <Col md={2}></Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <h3>{this.state.data.location}</h3>
                                            </Col>
                                            
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <h4>{this.state.data.region}, {this.state.data.country}</h4>    
                                            </Col>
                                        </Row>
                                        <Row className="lower">
                                            <Col md={4}>Wind Speed : {this.state.data.windSpeed} km/h</Col>
                                            <Col md={4}>Pressure : {this.state.data.pressure} mm</Col>
                                            <Col md={4}>Humidity : {this.state.data.humidity} %</Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                        </Container>
                    </div>
                    <SaveLocation loc = {this.state.data.location} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <Search_bar changeWeather = {this.changeWeather} changeRegion = {this.change} />
                    <div className="box">
                        <Container>
                            <h1 style={alert_style}>We cannot find your location please allow location or search any location</h1>
                        </Container>
                    </div>
                </div>
            );
        }
    }
    
}

export default WeatherData;

/*-----------------Navigator geolocation---------------------*/
/*The Navigator. geolocation read-only property 
  returns a Geolocation object that gives Web 
  content access to the location of the device. 
  This allows a Web site or app to offer customized 
  results based on the user's location */

//Check if my device support geo location

// if(navigator.geolocation) {
//   console.log("supported")
// }
// else {
//   console.log("Not supported")
// }

/*-----------------componentDidMount---------------------*/
/* This is a react component helps to mount and 
mounting means putting elements into DOM
DOM = Document Object Modeling 
This is where you run statements that requires
that the component is already placed in the DOM.*/

/*---------------Axios--------------*/
// Use to call get api
// Axios is a lightweight HTTP client based 
// on the $http service within Angular. js 
// v1. x and is similar to the native JavaScript Fetch API
//npm install axios