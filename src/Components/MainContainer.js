import React, { Component } from "react";
import $ from "jquery";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";

class MainContainer extends Component {
  state = {
    movies: [],
    search: ""
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getMovie(this.state.search);
    //API.getDogsOfBreed(this.state.search)
    //.then(res => this.setState({dogsArr: res.data.message}));
  }

  getMovie = movieName => {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieName}&country=us`,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "a50fe69162msh4772ceec7a55679p119c2bjsn44c7c8b89d29"
      }
    }
    
    $.ajax(settings).done(response => {
      //console.log(response);
      this.setState({movies: response.results})
    });
  }

  // componentDidMount() {
  //   this.getMovie("Mad Max");
  // }

  render() {
    return (
      <div>
        <SearchForm 
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <SearchResults movies={this.state.movies}/>
      </div>
    )
  }
}

export default MainContainer