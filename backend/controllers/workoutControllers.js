const mongoose = require("mongoose");

const Workout = require("../models/workoutModel");
//GET all workouts
const homeController = (req, res) => {
  Workout.find()
    .then((results) => res.status(200).json(results))
    .catch((err) => res.status(400).json({ msg: "Not Found" }));
  //res.json({ msg: "getting all the workouts" });
};

//POST workout
const postWorkoutController = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//GET single workout
const getSingleWorkout = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "Incorrect path" });
  }
  Workout.findById(id)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => res.status(400).json({ msg: "Not Found" }));
  //res.json({ msg: "getting single response" });
};

//DELETE single workout
const deleteSingleWorkout = (req, res) => {
  const { id } = req.params;
  Workout.findByIdAndDelete(id)
    .then((results) => res.json({ msg: "Workout deleted" }))
    .catch((err) => res.json({ msg: err }));
  //res.json({ msg: "deleting a single workout" });
};
module.exports = {
  homeController,
  postWorkoutController,
  getSingleWorkout,
  deleteSingleWorkout,
};
