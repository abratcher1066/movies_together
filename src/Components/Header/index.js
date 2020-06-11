import React, { Component } from 'react';
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div id="jumbotronMain" className="container-fluid">
      <h1>Welcome to Movies Together</h1>
        <div className="blurb">
          <p>Bringing friends and family together to share movie experiences.</p>
        </div>
      </div>
      
    )
  }
}
