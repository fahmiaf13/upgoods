import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// reducer
import authReducer from "./slices/authSlice";
import { cartReducer } from "./slices/cartSlices";

// middleware
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: authReducer,
  cart: cartReducer,
});

const persistConfig = getPersistConfig({
  key: "root",
  storage,
  whitelist: ["user"],
  rootReducer: rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: [thunk, logger],
});
export const persistor = persistStore(store);
