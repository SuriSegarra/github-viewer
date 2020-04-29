import React, { Component } from 'react';
import UserSearch from '../components/User/UserSearch';
import UserInfo from '../components/User/UserInfo';
import Repos from '../components/Repos/Repos';
import { fetchUser, fetchRepos } from '../services/github';

export default class Gitviewer extends Component {
    state = {
      username: '',
      user: {
        login: '',
        followers: 0,
        following: 0,
        html_url: ''
      },
      repos: [],
      search: false
    }
    handleUserChange = ({ target }) => {
      this.setState({ username: target.value });
    };

    handleUserSubmit = () => {
      fetchUser(this.username)
        .then(user => this.setState({ user }));
      fetchRepos(this.state.username)
        .then(repos => this.setState({ repos, search: true }));
    }
    render() {
      let searchedUser = '';
      if(this.state.search) {
        searchedUser = 
            <>
              <UserInfo {...this.state.user}/>
              <Repos repos={this.state.repos}/>
            </>;
      }
      return (
        <>
          <UserSearch username={this.state.username}
            onUserChange={this.handleUserChange}
            onUserSubmit={this.handleUserSubmit}/>   
          {searchedUser}
        </>
      );
    }
}
