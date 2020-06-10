import React from "react";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer"
function Movies() {
  return (
    <div>
      
      <Hero backgroundImage="https://wallpaperplay.com/walls/full/c/1/2/109045.jpg#.XuBK_Xe4FaQ.link">
      <Header/>
      <Nav/>
      <MainContainer/>
      </Hero>
      
    </div>
  );
}

export default Movies;