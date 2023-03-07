const express = require('express');
const { getAllWorkout, addWorkout, deleteWorkout, editWorkout } = require('../controller/workoutController');

const router = express.Router();
router.get('/:userId', getAllWorkout);
router.post('/add', addWorkout);
router.delete('/:id', deleteWorkout);
router.put('/edit/:id', editWorkout);

module.exports = router;