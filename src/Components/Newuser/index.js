import React, { Component } from "react";
import "./style.css";

class Newuser extends Component{
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };

  change = ( event) => {
    this.setState({
      [ event.target.name]:  event.target.value
    });
  };

  onSubmit = ( event) => {
     event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div class="container-fluid">
        <div class="row justify-content-md-center">
        
        <form className="form">
        <div class="form-group row">
        <label for="firstName" class="col-form-label">First Name:</label>
        <div class="col-sm-6">
          <input
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={ event => this.change( event)}
          />
          </div>
          </div>

        
        <div class="form-group row">
        <label for="lastName" class="col-form-label">Last Name:</label>
        <div class="col-sm-6">
          <input
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={ event => this.change(event)}
          />
          </div>
          </div>

        <div class="form-group row">
        <label for="email" class="col-form-label">Email:</label>
        <div class="col-sm-6">
          <input
            name="email"
            placeholder="Email address"
            value={this.state.email}
            onChange={ event => this.change(event)}
          />
          </div>
          </div>

        <div class="form-group row">
        <label for="userName" class="col-form-label">Choose a Username:</label>
        <div class="col-sm-6">
          <input
            name="userName"
            placeholder="New Username"
            value={this.state.userName}
            onChange={ event => this.change( event)}
          />
          </div>
          </div>

        <div class="form-group row">
        <label for="password" class="col-form-label">Enter a strong Password:</label>
        <div class="col-sm-6">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={ event => this.change(event)}
          />
          </div>
          </div>


          <div class="form-group row">
          <div class="col-sm-6">
          <button class="btn btn-primary" onClick={ event => this.onSubmit( event)}>Create Account</button>
          </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
export default Newuser;