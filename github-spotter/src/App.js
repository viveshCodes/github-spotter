/*_____Imports from React Library________*/
import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
/*______Import Custom Component_________*/
import Navbar from './components/layout/Navbar';
import User from './components/users/User';




/*_______Component : App_________________*/
class App extends Component {
  state = {
    users : [],
    loading : false
  }
  async componentDidMount(){
    this.setState({loading: true});
    
    const response = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);

    this.setState({loading : false, users : response.data})

  }
  render(){
  
    return (
      <Fragment>
         <Navbar title = "GitHub Spotter"  icon = "fab fa-github" />
        <div className="container">
           <User loading={this.state.loading} users = {this.state.users}/>
        </div>
      </Fragment>
    );

  } 
 
} 

export default App;



