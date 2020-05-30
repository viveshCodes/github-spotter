import React, { Component } from 'react'

/*______Import Custom Component________*/
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';


const User = (props) => {
    if(props.loading){
        return <Spinner />
    }else {
        return (
            <div style={userStyle}>
                {props.users.map(user =>(
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


