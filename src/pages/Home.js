import React from "react";
import Hero from "../Components/Hero";
//import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Form from "../Components/Form";
function Home() {
  return (
    <div>
     <Hero backgroundImage="https://wallpaperplay.com/walls/full/4/4/e/51812.jpg#.Xt7fVFQ4qhQ.link">
      <Header/>
      <Form/>
      </Hero>
    </div>
  );
}

export default Home;
