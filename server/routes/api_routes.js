const express = require('express');
let User = require("../models/User");
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router();

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //

router.post("/createuser", function(req, res) {
    db.User.create(req.body);
});

router.get("/passwordcheck/:username/:password", function(req, res){
    User.findOne({username: req.params.username}).then(user => {
        if(user.password == req.params.password){
            res.json(true);
        } else{
            res.json(false);
        }
    });
});


/*router.get("/exercise", function (req, res) {
    db.Exercise.find({}).then(function (results) {
        res.json(results);
    });
});

router.post("/workout", function (req, res) {
    db.Workout.create(req.body).then(function (results) {
        res.json(results);
    });
});

router.get("/workout", function(req, res){
    db.Workout.find({}).then(function(results){
      res.json(results);
    });
  });

  router.post("/activity", function(req, res){
    console.log("workoutId: " + req.query.workoutId);
    db.Activity.create({
      duration: req.body.duration,
      weight: req.body.weight,
      reps: req.body.reps,
      sets: req.body.sets,
      distance: req.body.distance,
      exerciseId: req.body.ExerciseId
    }).then((results) => db.Workout.findOneAndUpdate(
      {_id: req.query.workoutId },
      {
        $push: {activities: results._id }
      },
      { new: true }
    ));
  });

  router.get("/getActivities/:workoutId", function(req, res){
    //Return all activities associated with a workout
    db.Workout.find({_id: req.params.workoutId})
    .populate({
      path: "activities",
      populate: {
        path: "exerciseId",
        model: "Exercise"
      }
    })
    .then(results => {
      res.json(results);
    })
  });
  */

module.exports = router;

