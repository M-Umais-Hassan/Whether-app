import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Calling CSS files
import './App.css';
import './style/style.css';
//importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//importing pages from pages folder
import Home_page from './pages/home';
import About_page from './pages/about';
import Saved_page from './pages/saved';
import login from './components/auth/login';
import register from './components/auth/register';
import AskBot from './components/askbot/AskBot';
//importing cotext
import userContext from './context/userContext';
//importing axios
import Axios from 'axios';

export default function App() {
  const [userData, setuserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
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
        setuserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

    return(
      <>
        <Router>
          <userContext.Provider value={{ userData, setuserData }}> 
            <div className="app"> 
              <div className="container">
                <Switch>
                  <Route path="/" exact component={Home_page} />
                  <Route path="/about" component={About_page} />
                  <Route path="/saved" component={Saved_page} />
                  <Route path="/login" component={login} />
                  <Route path="/register" component={register} />
                  <Route path="/askBot" component={AskBot} />
                </Switch>
              </div>
            </div>
          </userContext.Provider>
        </Router>
      </>
    );
}

