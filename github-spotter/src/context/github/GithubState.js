import React , {useReducer} from 'react';
import axios from 'axios';

/*_____Custom Imports_____*/
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

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
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        `);
    
        dispatch({
            type : SEARCH_USERS,
            payload : response.data.items
        })
    }

    // Get User Info

    // Get Repos

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
                clearUsers

            }}
        >
            {props.children}
    </GithubContext.Provider>
    
}

export default GithubState;
