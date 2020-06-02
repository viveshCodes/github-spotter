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

    // Get User

    // Get Repos

    // Clear Users

    // Set Loading

    return <GithubContext.Provider
            value={{
                users : state.users,
                userInfo : state.userInfo,
                repos : state.repos,
                loading: state.loading
            }}
        >
            {props.children}
    </GithubContext.Provider>
    
}

export default GithubState;
