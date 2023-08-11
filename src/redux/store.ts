import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './features/languageSlice'
import themeReducer from './features/themeSlice'
import navbarReducer from './features/navbarSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { spotifyApi, weatherApi } from './services'

export const store = configureStore({
  reducer: {
    languageReducer,
    themeReducer,
    navbarReducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([spotifyApi.middleware, weatherApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
