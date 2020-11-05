import React from 'react';
//Calling CSS files
import './App.css';
import './style/style.css'
//importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//importing Home page from pages folder
import Home_page from './pages/home'


class App extends React.Component {
  render() {
    return(
      <div className="app"> 
        <div className="container">
          <Home_page />
        </div>
      </div>
    );
  }
}

export default App;
