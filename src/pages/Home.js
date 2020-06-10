import React from "react";
import Hero from "../components/Hero";
//import Nav from "../components/Nav";
import Header from "../components/Header";
import Form from "../components/Form";
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
