import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    
   
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div class="container-fluid">
        <div class="row justify-content-md-center">
        
        <form className="form-inline">
        <div class="form-group row">
        <label for="inputUserName" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-6">
          <input
            value={this.state.usertName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="username"
          />
           </div>
        </div>
        <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-6">
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="password"
          />
          </div>
          </div>
          <div class="form-group row">
          <div class="col-sm-6">
          <button class="btn btn-primary" onClick={this.handleFormSubmit}>Login</button>
          </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Form;
