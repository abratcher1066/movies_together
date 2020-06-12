import React from "react";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import $ from "jquery";

const getImdb = movieName => {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://www.omdbapi.com/?t=${movieName}&apikey=trilogy`,
        "method": "GET"
    }

    $.ajax(settings).done(response => {
        //console.log(response);
        this.setState({ movies: response.results })
    });
}

class Details extends React.Component {
    render() {
        return (
            <div>
                {console.log("props.movieName: " + this.props.match.params.movieName + " " + this.props.match.params.streamingService)}
                <Hero backgroundImage="https://wallpaperplay.com/walls/full/b/4/4/2955.jpg#.XuBFlxP4OPw.link">
                    <Header />
                    <Nav />
                </Hero>

            </div>
        );
    }
}

export default Details;