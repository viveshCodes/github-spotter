import React, { useState, useContext } from 'react';


import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext';

const Search = (props) => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    const [text, setText] = useState('');

    
    const onSubmit = (event) =>{
        event.preventDefault();
        if(text === ''){
             alertContext.setAlert(' Enter GitHub Handle ', 'danger');
        }else{
            githubContext.searchUsers(text);  // props up
            setText('');
        }
        

    }
    const onChange = (event) =>{
        setText(event.target.value);
    }
        return (
            <div>
                <form action="" className="form" onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users"
                        onChange= {onChange}
                        value = {text}
                    />
                    <input type = "submit" value = "Search" className="btn btn-dark btn-block" />
                </form>
                {
                    githubContext.users.length > 0
                    &&  
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear Screen</button>
                }
              
               
            </div>
        );
}


export default Search;
