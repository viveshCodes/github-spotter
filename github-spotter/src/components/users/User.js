import React, { Component } from 'react'

/*______Import Custom Component________*/
import UserItem from './UserItem';

class User extends Component {
    state = {
        users:[
            {
                id : 1,
                login : 'viveshCodes',
                avatar_url :  "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url : "https://github.com/mojombo"
            },
            {
                id : 2,
                login : 'viveshCodes1',
                avatar_url :  "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url : "https://github.com/mojombo"
            },
            {
                id : 3,
                login : 'viveshCodes2',
                avatar_url :  "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url : "https://github.com/mojombo"
            }
            
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user =>(
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


