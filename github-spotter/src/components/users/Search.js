import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Search = (props) => {
    const [text, setText] = useState('');

    
    const onSubmit = (event) =>{
        event.preventDefault();
        if(text === ''){
             props.setAlert(' Enter GitHub Handle ', 'danger');
        }else{
            props.searchUsers(text);  // props up
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
                    props.showClear
                    &&  
                    <button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear Screen</button>
                }
              
               
            </div>
        );
}

Search.propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired
}

export default Search;
