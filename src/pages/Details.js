import React from "react";
import Hero from "../Components/Hero";
//import Header from "../Components/Header";
//import Nav from "../Components/Nav";
import Navbar from "../Components/Navbar";
import $ from "jquery";



class Details extends React.Component {
    state = {
        movie: {}
    }

    getImdb = movieName => {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://www.omdbapi.com/?t=${movieName}&apikey=trilogy`,
            "method": "GET"
        }

        $.ajax(settings).done(response => {
            console.log(response);
            this.setState({ movie: response })
        });
    }

    componentDidMount() {
        this.getImdb(this.props.match.params.movieName);
    }

    render() {
        return (
            <div>
                <Navbar />
                {console.log("props.movieName: " + this.props.match.params.movieName + " " + this.props.match.params.streamingService)}
                <Hero backgroundImage="https://wallpaperplay.com/walls/full/b/4/4/2955.jpg#.XuBFlxP4OPw.link">
                <div className="card">
                        <img className="card-img-top" src={this.state.movie.Poster} style={{width: "400px", margin: "auto", paddingTop: "50px"}} alt="Movie Poster"></img>
                        
                            <div className="card-body">
                                <h5 className="card-title">Title: {this.state.movie.Title}</h5>
                                <h5 className="card-title">Director: {this.state.movie.Director}</h5>
                                <h5 className="card-title">Genre: {this.state.movie.Genre}</h5>
                                <h5 className="card-title">Year: {this.state.movie.Year}</h5>
                                <p className="card-text">{this.state.movie.Plot}</p>
                                {/* eslint-disable-next-line */}
                                <a href="#" className="btn btn-primary">Schedule on {this.props.match.params.streamingService}</a>
                            </div>
                    </div> 
                </Hero>
                

            </div>
        );
    }
}

export default Details;