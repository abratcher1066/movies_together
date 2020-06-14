import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import User from "./pages/User";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Schedule from "./pages/Schedule";

class App extends React.Component {
  state = {
    loginSuccessful: false
  }

  //[ user, setUser ] = useState({name: "gary"})

  componentDidMount(){
    // check for cookie, if it's there, update loginSuccessful to true
  }

  setLogin = (val) => {
    // if val is true, set the cookie; if not delete cookie

    this.setState({ loginSuccessful: val });
  }

  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={() => <Home setLogin={this.setLogin} loginSuccessful={this.state.loginSuccessful} />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/movies" component={() => <Movies loginSuccessful={this.state.loginSuccessful} />} />
            <Route exact path="/user" component={() => <User loginSuccessful={this.state.loginSuccessful} />} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/details/:movieName/:streamingService/" component={Details} />
            <Route exact path="/schedule/:movieName/:streamingService/" component={Schedule} />
            <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  
  }
}

export default App;
