import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post(`https://devapi.rupyo.in/users/login`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            password:
            <input type="password" name="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}