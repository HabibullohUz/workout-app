const WorkOut = require("../models/workoutModel");

const getAllWorkout = async (req, res) => {
  try {
    const workouts = await WorkOut.find({ userId: req.params.userId });
    res.status(200).json(workouts);
    console.log(req.params.userId);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addWorkout = async (req, res) => {
  const newWorkout = new WorkOut(req.body);
  newWorkout
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err.message });
    });
};

const deleteWorkout = async (req, res) => {
  const workoutId = req.params.id;
  WorkOut.deleteOne({ _id: workoutId })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

const editWorkout = async (req, res) => {
  const workoutId = req.params.id;
  WorkOut.findOne({ _id: workoutId }).then((data) => {
    console.log(data);
    data.name = req.body.name || "Amal Tanlanmadi";
    data.set = req.body.set || 0;
    data.rep = req.body.rep || 0;
    data
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ msg: err.message });
      });
  });
};

module.exports = { getAllWorkout, addWorkout, deleteWorkout, editWorkout };
