import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function AddWorkout() {
  const user = useSelector((state) => state.user.currentUser)
  const [workout, setWorkout] = useState({ userId: user._id })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(workout);

    axios.post('http://localhost:5001/workouts/add', workout)
      .then(() => {
        setWorkout({ userId: user._id })
        navigate('/')
      })
      .catch((err) => console.log(err))
  }


  return (
    <div className="wrapper d-flex align-items-center bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            <h2 className="text-center text-light mb-4">Add New Workout</h2>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <input type="text" name='name' required placeholder="Name" value={workout.name || ""} onChange={handleChange} />
                <input type="number" name='set' required placeholder="Set" value={workout.set || ""} onChange={handleChange} />
                <input type="number" name='rep' required placeholder="Rep" value={workout.rep || ""} onChange={handleChange} />
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddWorkout