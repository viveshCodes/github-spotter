/*_____Imports from React Library________*/
import React, { Component, Fragment } from 'react';
import './App.css';

/*______Import Custom Component_________*/
import Navbar from './components/layout/Navbar';
import User from './components/users/User';




/*_______Component : App_________________*/
class App extends Component {

  render(){
  
    return (
      <Fragment>
         <Navbar title = "GitHub Spotter"  icon = "fab fa-github" />
        <div className="container">
           <User />
        </div>
      </Fragment>
    );

  } 
 
} 

export default App;



