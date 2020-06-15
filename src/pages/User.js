import React from "react";
import Hero from "../Components/Hero";
import MainContainer from "../Components/MainContainer";
import Header from "../Components/Header";

function User(props) {
  return (
    <>
      { props.loginSuccessful === true && (
        <div>
          
          <Hero backgroundImage="https://wallpaperplay.com/walls/full/b/4/4/2955.jpg#.XuBFlxP4OPw.link">
            <Header/>
            <MainContainer />
          </Hero>
          
        </div>
      )}
    </>
  );
}

export default User;