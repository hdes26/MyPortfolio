import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './features/languageSlice'
import themeReducer from './features/themeSlice'
import navbarReducer from './features/navbarSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    languageReducer,
    themeReducer,
    navbarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
