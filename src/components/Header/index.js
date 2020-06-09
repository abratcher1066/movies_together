import React, { Component } from 'react';
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div id="jumbotronMain" class="container-fluid">
      <h1>Welcome to Movie Together</h1>
        <div class="blurb">
          <p>Bring friend and family have a best experience together</p>
        </div>
      </div>
      
    )
  }
}
