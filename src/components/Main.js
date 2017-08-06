import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import UserInfo from './UserInfo';
const URL = 'https://api.github.com/users/';
const client_id = 'cd276167eade15e7fe83';
const client_secret = '031eba14400b8b2458afef88d7cb646ea62dc0cc';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: []
    }

  }

  getfolders = (e) => {
    let user = e.target.value;
    if (!e.target.value) {
      this.setState({
        username: []
      })
    }
    axios.get(`${URL}${user}?client_id=${client_id}&client_secret=${client_secret}`)

      .then((response) => {
        this.setState({
          username: response.data
        }, () => {
          console.log(this.state.username);
        })

      })
      .catch((err) => {
        console.log(err);
      })

  }
  render() {
    return (
      <div>
        <div className="container">
          <input className="form-control" onChange={this.getfolders} />

          <User value={this.state.username} />
          <UserInfo value={this.state.username} />

        </div>
      </div>
    );
  }
}

export default Main;








