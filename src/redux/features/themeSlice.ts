import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: true
}
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    theme: (state) => {
      state.theme = !state.theme
    },
    dayTheme: (state) => {
      state.theme = true
    },
    nightTheme: (state) => {
      state.theme = false
    }
  }
})

export const { theme, dayTheme, nightTheme } = themeSlice.actions

export default themeSlice.reducer
