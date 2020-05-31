import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text : ''
    }

    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired,
        setAlert : PropTypes.func.isRequired
    }

    onSubmit = (event) =>{
        event.preventDefault();
        if(this.state.text === ''){
             this.props.setAlert(' Enter GitHub Handle ', 'danger');
        }else{
            this.props.searchUsers(this.state.text);  // props up
            this.setState({text :''});
        }
        

    }
    onChange = (event) =>{
        this.setState({[event.target.name] :  event.target.value});
    }
    render() {
        return (
            <div>
                <form action="" className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search Users"
                        onChange= {this.onChange}
                        value = {this.state.text}
                    />
                    <input type = "submit" value = "Search" className="btn btn-dark btn-block" />
                </form>
                {
                    this.props.showClear
                    &&  
                    <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear Screen</button>
                }
              
               
            </div>
        );
    }
}

export default Search;
