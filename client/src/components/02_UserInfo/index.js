import React, { Component } from 'react'
import axios from 'axios';
class UserInfo extends Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {name,email} = this.state;
    const response = await axios.post('http://localhost:5000/api', {name, email})
    console.log({response})
  }
  render() {
    const {name, email} = this.state
    const {nextPage} = this.props
    console.log('state', this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={this.handleChange} value={name} />
        <input type="email" name="email" onChange={this.handleChange} value={email} />
        <button>Submit</button>
      </form>
    )
  }
}

export default UserInfo