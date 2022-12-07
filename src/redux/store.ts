import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { getPersistConfig } from "redux-deep-persist";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// reducer
import googleAuthReducer from "./slices/authSlice";
import { cartReducer } from "./slices/cartSlices";
// middleware
import logger from "redux-logger";

const authReducer = combineReducers({
  user: googleAuthReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "google-auth",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: [thunk, logger],
});
export const persistor = persistStore(store);
