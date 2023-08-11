import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: false
}
export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    language: (state) => {
      state.language = !state.language
    }
  }
})

export const { language } = languageSlice.actions

export default languageSlice.reducer
