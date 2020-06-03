/*_____Imports from React Library________*/
import React, { useState, Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*______Import Custom Component_________*/
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import UserInfo from './components/users/UserInfo';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

/*_______Component : App_________________*/
const App =(props)=> {
  
    return (
      <GithubState>
        <AlertState>
        <Router>
        <Fragment>
         <Navbar title = "GitHub Spotter"  icon = "fab fa-github" />
         <Alert />
      
          <Switch>

            <Route exact path = '/' render={props=>(
              <Fragment>
                <Search />

                <div className="container">
                  <User />
                </div>

              </Fragment>
          
            )}/>
           
            <Route exact path = '/about' component={About} />

             <Route exact path = '/userinfo/:login' component={UserInfo} />

          </Switch>
        
      </Fragment>
      </Router> 
      </AlertState>
    </GithubState>  
    );

 
} 

export default App;



