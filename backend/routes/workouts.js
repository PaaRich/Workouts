const express = require("express");
const router = express.Router();

//importing controllers
const {
  homeController,
  postWorkoutController,
  getSingleWorkout,
} = require("../controllers/workoutControllers");

//GET all workouts
router.get("/", homeController);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST workout
router.post("/", postWorkoutController);

//DELETE single workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "deleting a single post" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "updating a post" });
});

module.exports = router;
