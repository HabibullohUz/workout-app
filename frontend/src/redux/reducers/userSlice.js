import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: { currentUser: null },
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.currentUser = null
            localStorage.removeItem('user')
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer