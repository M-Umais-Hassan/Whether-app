import React from 'react';
import Axios from 'axios';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Search_bar from './search-bar';
import Loader from 'react-loader-spinner';
import SaveLocation from './save-location';
import { motion } from 'framer-motion';

var api_key;

class WeatherData extends React.Component {
    
    api_key = "b8bded5189dcb274c8d1256ef4e62932";

    state = {
        apiSuccess: false,
        loading: false,
        coords: {
            longitude: null,
            latitude: null
        },
        data: {},
        inputData: "",
        error_msg: "",
        saveLoc: "",
    }

    componentDidMount() {
        Axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=lahore`)
        .then((res) => {
            if (res.data.success=false, res.data.error.info="Your monthly usage limit has been reached. Please upgrade your Subscription Plan.") {
                api_key = "b9543edbd9760109c497368df500290e";
            }
        })
        .catch(err => console.log(err));

        //get the device location (to check if the device supports geo location go at the last of this page)
        if(navigator.geolocation) {
            this.setState({loading:false})
            navigator.geolocation.getCurrentPosition((position) => {
                let newCoords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                this.setState({coords:newCoords});

                //Calling the weatherstack api
                Axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${this.state.coords.latitude}, ${this.state.coords.longitude}`)
                .then(res=>{
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
                    this.setState({data:weatherData, loading:true})
                })
                .catch ((err) => {
                    console.log(err);
                    this.setState({error_msg: "Sorry some error occur try again later or search for some location."})
                })
            })
            
        }
    }

    change = (value) => {
        this.setState({inputData:value})
    }

    changeWeather = (event) => {
        event.preventDefault();
        this.setState({loading:false})
        this.setState({error_msg:""});
        Axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${this.state.inputData}`)
        .then(res=>{
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
            let newCoords = {
                latitude: res.data.location.lat,
                longitude: res.data.location.lon
            }
            this.setState({coords:newCoords});
            this.setState({data:weatherData, loading:true})
        })
        .catch ((err) => {
            this.setState({error_msg: "Sorry we didn't found the location you are searching for."})
        })
    }

    render() {
        const {loading} = this.state;
        const alert_style = {
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px"
        };
        const search_box = {
            marginTop: "-50px"
        };
        if((this.state.coords.longitude != null && this.state.coords.latitude != null) || (this.state.error_msg == "Sorry we didn't found the location you are searching for.")) {
            if (this.state.error_msg == "") {
                if (!loading) {
                    return(
                        <div className="loading">
                            <Loader type="BallTriangle" color="crimson" height={100} width={100} />
                        </div>
                    );
                }
                return(
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
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
                        <SaveLocation loc={this.state.data.location} /> 
                    </motion.div>
                );
            } 
            else {
                return (
                    <div>
                        <Alert style={alert_style} variant='danger'>
                            <strong>{this.state.error_msg}</strong>
                        </Alert>
                        <Search_bar changeWeather = {this.changeWeather} changeRegion = {this.change} />
                    </div>
                );
            }
        }
        else {
            return (
                <div>
                    <Alert style={alert_style} variant='danger'>
                        <strong>Please allow your loation to view your weather data or search any location.</strong>
                    </Alert>
                    <Search_bar changeWeather = {this.changeWeather} changeRegion = {this.change} />
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