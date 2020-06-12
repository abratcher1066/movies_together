import React from "react";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Navbar from "../Components/Navbar";



function Movies(props) {
  return (
    <>
      { props.loginSuccessful === true && (
        <div>
          <Navbar />
          <Hero backgroundImage="https://wallpaperplay.com/walls/full/c/1/2/109045.jpg#.XuBK_Xe4FaQ.link">
            <Nav/>
        
          </Hero>
      </div>
      )}
    </>
  );
}

export default Movies;