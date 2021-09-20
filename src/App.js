
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      firstName :"",
      lastName :"",
      
    }
    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" 
        name= "firstName"
        value={this.state.firstName}
        placeholder="First Name"
        onChange={this.handleChange}
        />
        <br />
        <br />
        <input type="text" 
        name= "lastName"
        value={this.state.lastName}
        placeholder="Last Name"
        onChange={this.handleChange}
        />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}
