import React , {useReducer} from 'react';
import axios from 'axios';

/*_____Custom Imports_____*/
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERINFO,
    GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) =>{

    const initialState = {
        users : [],
        userInfo : {},
        repos : [],
        loading : false
    }

    // Dispatch to reducer
   const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers= async (text)=>{
        setLoading();
        
        const githubHandle = text;
    
        const response = await axios.get(`https://api.github.com/search/users?q=${githubHandle}&client_id=
        ${ githubClientId }&client_secret=
        ${githubClientSecret}
        `);
    
        dispatch({
            type : SEARCH_USERS,
            payload : response.data.items
        })
    }

    // Get User Info
    const getUserInfo = async (username) =>{
        setLoading();
        
        const githubHandle = username;
    
        const response = await axios.get(`https://api.github.com/users/${githubHandle}?client_id=
        ${ githubClientId }&client_secret=
        ${githubClientSecret}
        `);
    
        dispatch({
            type : GET_USERINFO,
            payload : response.data
        })
       
      }
    
    // Get Repos
    const getRepos = async (username) =>{
        setLoading();
        
        const githubHandle = username;
    
        const response = await axios.get(`https://api.github.com/users/${githubHandle}/repos?per_page=5&sort=created:asc&client_id=
        ${ githubClientId }&client_secret=
        ${githubClientSecret}
        `);
    
      dispatch({
        type : GET_REPOS,
        payload :response.data
      });
    
    }

    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS});

    // Set Loading
    const setLoading = () => dispatch({type : SET_LOADING});

    return <GithubContext.Provider
            value={{
                users : state.users,
                userInfo : state.userInfo,
                repos : state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUserInfo,
                getRepos

            }}
        >
            {props.children}
    </GithubContext.Provider>
    
}

export default GithubState;
