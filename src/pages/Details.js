import React from "react";
import Hero from "../Components/Hero";
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

function Details(props) {

    return (
        <div>
            {console.log("props.movieName: " + props.match.params.movieName + " " + props.match.params.streamingService)}
            <Hero backgroundImage="https://wallpaperplay.com/walls/full/3/5/3/198525.jpg#.XuLOgzsDOxU.link">
              
           </Hero>
        </div>
    );
}

export default Details;