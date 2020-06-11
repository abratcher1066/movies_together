import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import User from "./pages/User";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Register from "./pages/Register";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/User" component={User} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Details/:movieName/:streamingService" component={Details} />
          <Footer />
        </Wrapper>
      </div>
    </Router>



  );
}

export default App;
