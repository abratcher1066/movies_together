import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import "./style.css";
import $ from "jquery";


class Form extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
    loginAttempted: false,
    loginSuccessful: false
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

    $.ajax(process.env.REACT_APP_API_URL + "/api/passwordcheck", {
      type: "POST",
      data: this.state
    }).then(result => {
      this.setState({ loginAttempted: true });
      if (result) {
        this.props.setLogin(true)
        // this.setState({ loginSuccessful: true });
        // this.props.loginSuccessful();
      } else {
        this.setState({ loginSuccessful: false });
        this.props.setLogin(false)
      }
    });



  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    if (this.props.loginSuccessful) {
      return <Redirect to="/movies" />;
    } else {
      return (
        <div className="container-fluid">
          <div className="row justify-content-md-center">

            <form className="form-inline">
              <div className="form-group row">
                <label htmlFor="inputUserName" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-6">
                  <input
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-6">
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6">
                  <button className="btn btn-primary" onClick={this.handleFormSubmit}>Login</button>
                </div>
              </div>
            </form>
          </div>
          <div style={{ color: "red" }}>
            {(this.state.loginAttempted && !this.props.loginSuccessful) ? "Your username/password is incorrect." : ""}
          </div>
          <div style={{ paddingTop: "20px" }}>
            <a href="/Register">Create a new account.</a>
          </div>
        </div>
      );
    }
  }
}

export default Form;
