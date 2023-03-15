import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {cartSlice} from "@/store/cart/cart.slice";
import {userSlice} from "@/store/user/user.slice";
import {carouselSlice} from "@/store/carousel/carousel.slice";

const persistConfig = {
  key: 'amazon-v2',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  carousel: carouselSlice.reducer,
  user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>