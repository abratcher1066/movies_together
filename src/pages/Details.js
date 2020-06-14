import React from "react";
import Hero from "../Components/Hero";
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
                <Hero backgroundImage="https://wallpaperplay.com/walls/full/6/f/b/137808.jpg#.XuWZqZdzXB8.link">
                {console.log("props.movieName: " + this.props.match.params.movieName + " " + this.props.match.params.streamingService)}
                <div className="container-fluid">
                <div className="row justify-content-md-center">   
                <div className="card col-md-7"  >
                <div className="row no-gutters">
                        <div className="col-md-7">
                        <img className="card-img-top" src={this.state.movie.Poster} style={{width: "300px", margin: "auto", paddingTop: "30px", paddingBottom: "30px"}} alt="Movie Poster"></img>
                        </div> 
                        <div className="col-md-4">
                            <div className="card-body ">
                                <h5 className="card-title">Title: {this.state.movie.Title}</h5>
                                <h5 className="card-title">Director: {this.state.movie.Director}</h5>
                                <h5 className="card-title">Genre: {this.state.movie.Genre}</h5>
                                <h5 className="card-title">Year: {this.state.movie.Year}</h5>
                                <p className="card-text">{this.state.movie.Plot}</p>
                                {/* eslint-disable-next-line */}
                                <a href={`/schedule/${this.props.match.params.movieName}/${this.props.match.params.streamingService}`} className="btn btn-primary">Schedule on {this.props.match.params.streamingService}</a>
                            </div>
                        </div>    
                </div>  
                </div>
                </div>
                </div> 
                </Hero>
                

            </div>
        );
    }
}

export default Details;