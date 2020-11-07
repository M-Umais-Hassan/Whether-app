import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Calling CSS files
import './App.css';
import './style/style.css';
//importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//importing Home page from pages folder
import Home_page from './pages/home';
import About_page from './pages/about';
import ask from './pages/ask'

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="app"> 
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home_page} />
              <Route path="/about" component={About_page} />
              <Route path="/ask" component={ask} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
