import React, { Component } from 'react'

/*______Import Custom Component________*/
import UserItem from './UserItem';

class User extends Component {
    
    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
                
            </div>
        )
    }
 
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1rem'
}

export default User


