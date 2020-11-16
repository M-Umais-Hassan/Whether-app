import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Calling CSS files
import './App.css';
import './style/style.css';
//importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//importing pages from pages folder
import Home_page from './pages/home';
import About_page from './pages/about';
import login from './components/auth/login';
import register from './components/auth/register';
import Nav_bar from './components/nav';
//importing cotext
import userContext from './context/userContext';
//importing axios
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userData: {
         token: undefined,
         user: undefined,
       }
    }
  }

  componentDidMount() {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: {"x-auth-token": token} }
      );
      if(tokenRes.data == true) {
        const userRes = await Axios.get("http://localhost:5000/users/", { headers: {"x-auth-token": token}, });
        let data = {
          token,
          user: userRes,
        }
        this.setState({userData: data});
      }
    }

    checkLoggedIn();
  }

  render() {
    return(
      <Router>
        <userContext.Provider value={{ userData: this.state.userData }}>
          <div className="app"> 
            <div className="container">
              <Nav_bar />
              <Switch>
                <Route path="/" exact component={Home_page} />
                <Route path="/about" component={About_page} />
                <Route path="/login" component={login} />
                <Route path="/register" component={register} />
              </Switch>
            </div>
          </div>
        </userContext.Provider>
      </Router>
    );
  }
}

export default App;
