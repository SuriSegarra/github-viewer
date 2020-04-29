import React, { Component } from 'react';
import UserInfo from '../../components/User/UserInfo';
import { fetchUser } from '../../services/github';

export default class User extends Component {
  state = {
    user: '',
    userState: {}
  }

  componentDidMount() {
    fetchUser()
    .then(user => this.setState({
      userState: user,
      
    }))
  }
  render() {
    return (
      <div>
        <UserInfo login={this.userState.login} followers={this.userState.followers} following={this.userState.} />
      </div>
    );
  }
}
