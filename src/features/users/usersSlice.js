import { CreateSlice } from "@reduxjs/toolkit";


const initialState = {
    usersList: [],
}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        fetchUsers: (state,payload) =>{
            state.usersList=payload
        },
        createUser: (state,payload) => {
            state.usersList = [...state.usersList,payload]
        },
        deleteUser: (state, payload) => {
            state.usersList = state.usersList.filter(u => u!= payload)
        }
    }
})