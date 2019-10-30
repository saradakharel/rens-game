import React, { Component } from 'react'

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

  handleSubmit = (e) => {
    e.preventDefault()
    const {name,email} = this.state;
    console.log({name,email})
  }
  render() {
    const {name, email} = this.state
    const {nextPage} = this.props
    console.log('state', this.state)
    return (
      <form onCli={this.handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={this.handleChange} value={name} />
        <input type="email" name="email" onChange={this.handleChange} value={email} />
        <button onClick={nextPage}>Submit</button>
      </form>
    )
  }
}

export default UserInfo