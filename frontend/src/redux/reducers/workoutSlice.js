import {createSlice} from "@reduxjs/toolkit"

const workoutSlice = createSlice({
    name: "workouts",
    initialState: { userWorkouts: [] },
    reducers: {
        setUserWorkouts: (state, action) => {
            state.userWorkouts = action.payload
        }
    }
})

export const {setUserWorkouts} = workoutSlice.actions

export default workoutSlice.reducer