import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedSection: 'home'
}
export const navbarSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectHome: (state) => {
      state.selectedSection = 'home'
    },
    selectAbout: (state) => {
      state.selectedSection = 'about'
    },
    selectContact: (state) => {
      state.selectedSection = 'contact'
    }
  }
})

export const { selectHome, selectAbout, selectContact } = navbarSlice.actions

export default navbarSlice.reducer
