import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import HomeBanner from "../components/HomeBanner";
import { setUserWorkouts } from "../redux/reducers/workoutSlice";

function Home() {
  const user = useSelector((state) => state.user.currentUser);
  const workouts = useSelector((state) => state.workouts.userWorkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5001/workouts/${user._id}`).then((res) => {
        dispatch(setUserWorkouts(res.data));
      });
    }
  }, []);

  return (
    <>
      {workouts && workouts.length > 0 ? (
        <div className="container wrapper mx-auto pb-5">
          <h1 className="text-center">Workouts</h1>
          <div className="row workouts mt-4">
            {workouts.map((workout) => {
              return <Card workout={workout} />;
            })}
            {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          </div>
        </div>
      ) : (
        <HomeBanner />
      )}
    </>
  );
}

export default Home;

{
  /* <div className="container wrapper mx-auto pb-5">
      <h1 className="text-center">Workouts</h1>
      <div className="row workouts mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div> */
}
