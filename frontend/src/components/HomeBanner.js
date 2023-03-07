import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HomeBanner() {
  const user = useSelector((state) => state.user.currentUser)
  const navigate = useNavigate()

  const startWorkout = () => {
    if(user) {
      return navigate('/addWorkout')
    }
    navigate('/login')
  }

  return (
    <section className="banner-area position-relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-start">
          <div className="banner-content col-lg-12 col-md-12">
            <h1 className="text-uppercase">
              You have no workouts
            </h1>
            <button onClick={startWorkout} className="btn btn-outline-dark bg-dark text-white mt-3 px-3 py-2 text-uppercase">Start workout</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
