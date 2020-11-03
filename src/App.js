import React from 'react';
import Axios from 'axios';
import './App.css';

//importing bootstrap
//import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//importing my nav bar component from componenets folder
import Nav_bar from './components/nav.jsx';
import Home from './components/home.jsx';

//Ant Design

class App extends React.Component {

  //Makning state object to store coords values longitude and latitude that helps to find location
  state = {
    coords: {
      longitude: 0,
      latitude: 0
    },
    data: {}
  }

  // For details of this component go to last of page
  componentDidMount() {
    //get the device location (to check if the device supports geo location go at the last of this page)
    if(navigator.geolocation) {
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

  render() {
    return(
      <div className="app"> 
        <div className="container">
          <Nav_bar />
          <Home weatherData = {this.state.data} />
          </div>
      </div>
    );
  }
}

export default App;

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
// Axios is a lightweight HTTP client based 
// on the $http service within Angular. js 
// v1. x and is similar to the native JavaScript Fetch API
//npm install axios