/*_____Imports from React Library________*/
import React, { Component, Fragment } from 'react';
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


/*_______Component : App_________________*/
class App extends Component {
  state = {
    users : [],
    userInfo :{},
    loading : false,
    alert : null
  }
 
  searchUsersFromGithub = async (text)=>{
    this.setState({loading: true});
    
    const githubHandle = text;

    const response = await axios.get(`https://api.github.com/search/users?q=${githubHandle}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);

    this.setState({loading : false, users : response.data.items})
  }

  getUserInfo = async (username) =>{
    this.setState({loading: true});
    
    const githubHandle = username;

    const response = await axios.get(`https://api.github.com/users/${githubHandle}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);

    this.setState({userInfo : response.data, loading:false})
  }

  clearUsers = () =>{

    this.setState({users:[], loading:false});
  }

  setAlertForEmptyUsername = (message , type ) =>{
    this.setState({alert:{msg : message, type : type}});

    setTimeout( () =>{
      this.setState({alert:null})
    },2000);

  }

  render(){
  
    return (
        <Router>
        <Fragment>
         <Navbar title = "GitHub Spotter"  icon = "fab fa-github" />
         <Alert alert={this.state.alert} />
      
          <Switch>

            <Route exact path = '/' render={props=>(
              <Fragment>
                <Search 
                      searchUsers={this.searchUsersFromGithub}
                      clearUsers = {this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert = {this.setAlertForEmptyUsername}
                  />
                <div className="container">
                  <User loading={this.state.loading} users = {this.state.users} />
                </div>
              </Fragment>
          
            )}/>
           
            <Route exact path = '/about' component={About} />

             <Route exact path = '/userinfo/:login' render={props =>(
                <UserInfo {...props} getUserInfo={this.getUserInfo} userInfo = {this.state.userInfo} loading = {this.state.loading}/>
             )} />

          </Switch>
        
      </Fragment>
      </Router> 
    );

  } 
 
} 

export default App;



