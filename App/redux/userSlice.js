import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    user: '',
    password: '',
    initialState: {
        user: '',
        isLogged: false,
    },
    
    reducers: {
        changeUser(state, { payload }) {
            return { ...state, isLogged: true, user: payload }

        },
        logout(state) {
            return { ...state, isLogged: false, name: undefined }
        }
    }
})
export const { changeUser, logout } = slice.actions
export const selectUser = state => state.user
export default slice.reducer

console.log("changeUser ----- " + changeUser)
console.log("logout ----- " + logout)


