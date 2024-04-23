const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
    }= require('../controllers/workoutController')

const router = express.Router()
//all workouts
router.get('/',getWorkouts)
//single workout
router.get('/:id',getWorkout)
//new workout
router.post('/',createWorkout)
//delete workout
router.delete('/:id',deleteWorkout)
//update workout
router.patch('/:id',updateWorkout)
module.exports = router