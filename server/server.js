// -- BRING IN OUR PROJECT REQUIREMENTS -- //
const express = require("express")
const path = require("path")
const mongoose = require("mongoose");

// -- Requiring our Routes -- //
const api_routes = require("./routes/api_routes");

// -- CREATE AN `EXPRESS` INSTANCE -- //
const app = express();
// -- DEFINE A PORT -- //
const PORT = process.env.PORT || 5000;

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieshare", { useNewUrlParser: true });

// -- PARSE FORM (CLIENT-SIDE) INPUTS -- //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -- TELL EXPRESS WHERE OUR STATIC FILES ARE LOCATED -- //
app.use(express.static("public"));

// ================================== // 
// -- Activity Syntax -> Passing App INSTANCE to Route -- //
//require("./routes/html_routes")(app);

// -- Example ROUTES using EXPRESS ROUTER (https://expressjs.com/en/guide/routing.html) -- //

// -- Use express router to register routes as middleware -- //
app.use('/api', api_routes);

/*
const axios = require("axios");
axios({
    "method":"GET",
    "url":"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key":"a50fe69162msh4772ceec7a55679p119c2bjsn44c7c8b89d29",
    "useQueryString":true
    },"params":{
    "term":"Mad Max",
    "country":"uk"
    }
    })
    .then((response)=>{
      console.log(response.data.results[0])
    })
    .catch((error)=>{
      console.log(error)
    })
*/

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});


