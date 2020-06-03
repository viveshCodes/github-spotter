/*_____Imports from React Library________*/
import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/*______Import Custom Component_________*/
import Navbar from './components/layout/Navbar';
import UserInfo from './components/users/UserInfo';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';


/*_______Component : App_________________*/
const App =()=> {
  
    return (
      <GithubState>
        <AlertState>
          <Router>
            <Fragment>

            <Navbar title = "    GitHub Spotter"  icon = "fab fa-github" />
            <div className = "continer" >
            <Alert />

              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={UserInfo} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router> 
      </AlertState>
    </GithubState>  
    );

 
} 

export default App;



