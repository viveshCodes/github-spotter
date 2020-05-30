import React, { Component } from 'react';

class Search extends Component {
    state = {
        text : ''
    }
    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.text);
        this.setState({text :''});

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
            </div>
        );
    }
}

export default Search;
