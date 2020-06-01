import React, { Component } from 'react'

class UserInfo extends Component {
    componentDidMount(){
        this.props.getUserInfo(this.props.match.params.login);
    }
  
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.userInfo;
    
        const {loading} = this.props;
        return (
            <div>
                {name}
            </div>
        )
    }
}
export default UserInfo
