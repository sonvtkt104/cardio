import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "Son",
        age: 21
    }, 
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
        }
    }
})

export const { update } = userSlice.actions
export default userSlice.reducer