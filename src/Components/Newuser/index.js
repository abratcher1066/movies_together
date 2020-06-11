import React from "react";
import { Redirect } from 'react-router-dom';
import "./style.css";
import $ from "jquery";

export default class Newuser extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    formComplete: false
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    //this.props.onSubmit(this.state);
    
    $.ajax(process.env.REACT_APP_API_URL + "/api/createuser", {
      type: "POST",
      data: this.state
    });

    this.setState({formComplete: true});
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    if(this.state.formComplete){
      return <Redirect to='/' />;
    } else {
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
                  onChange={event => this.change(event)}
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
                  onChange={event => this.change(event)}
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
                  onChange={event => this.change(event)}
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="username" class="col-form-label">Choose a Username:</label>
              <div class="col-sm-6">
                <input
                  name="username"
                  placeholder="New Username"
                  value={this.state.username}
                  onChange={event => this.change(event)}
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
                  onChange={event => this.change(event)}
                />
              </div>
            </div>


            <div class="form-group row">
              <div class="col-sm-6">
                <button class="btn btn-primary" onClick={event => this.onSubmit(event)}>Create Account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
    }
  }
}
