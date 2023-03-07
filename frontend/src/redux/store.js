import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import workoutSlice from "./reducers/workoutSlice";

export const store = configureStore({
    reducer: {
        workouts: workoutSlice,
        user: userSlice,
    }
})