import React from "react";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Header from "../Components/Header";

function Details(props) {
  return (
    <div>
      {console.log(props.movieName)}
      <Hero backgroundImage="https://wallpaperplay.com/walls/full/b/4/4/2955.jpg#.XuBFlxP4OPw.link">
      <Header/>
      <Nav/>
      </Hero>
      
    </div>
  );
}

export default Details;