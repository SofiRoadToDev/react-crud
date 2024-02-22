import { CreateSlice } from "@reduxjs/toolkit";

const initialState = {
    isEdition: false,
}


export const guiSlice = createSlice({
    name: 'guiSlice',
    initialState,
    reducers: {
        makeEditable: (state) => { state.isEdition = true},
        makeNotEditable: (state) => {state.isEdition = false}
    }
})

export const {makeEditable,makeNotEditable} = guiSlice.actions
 export default guiSlice.reducers