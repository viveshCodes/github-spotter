/*_____Imports from React Library________*/
import React, { useState, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*______Import Custom Component_________*/
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import UserInfo from './components/users/UserInfo';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
/*_______Component : App_________________*/
const App =(props)=> {

  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

 
  

  const getUserInfo = async (username) =>{
    setLoading(true);
    
    const githubHandle = username;

    const response = await axios.get(`https://api.github.com/users/${githubHandle}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);

    setUserInfo(response.data); 
    setLoading(false);
  }

  const getRepos = async (username) =>{
    setLoading(true);
    
    const githubHandle = username;

    const response = await axios.get(`https://api.github.com/users/${githubHandle}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);

    setRepos(response.data);
    setLoading(false);

  }

  const setAlertForEmptyUsername = (message , type ) =>{
    setAlert({msg : message, type : type});

    setTimeout( () =>{
      setAlert(null)
    },2000);

  }
  
    return (
      <GithubState>
        <Router>
        <Fragment>
         <Navbar title = "GitHub Spotter"  icon = "fab fa-github" />
         <Alert alert={alert} />
      
          <Switch>

            <Route exact path = '/' render={props=>(
              <Fragment>
                <Search 
                      setAlert = {setAlertForEmptyUsername}
                  />
                <div className="container">
                  <User loading={loading} users = {users} />
                </div>
              </Fragment>
          
            )}/>
           
            <Route exact path = '/about' component={About} />

             <Route exact path = '/userinfo/:login' render={props =>(
                <UserInfo 
                  {...props} 
                  getUserInfo={getUserInfo} 
                  userInfo = {userInfo} 
                  loading = {loading}
                  getRepos = {getRepos}
                  repos = {repos}
                />
             )} />

          </Switch>
        
      </Fragment>
      </Router> 
    </GithubState>  
    );

 
} 

export default App;



