import { combineSlices, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authReducer } from "./auth/slice";
import { contactReducer } from "./contact/slice";
import { filterReducer } from "./contact/filter";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineSlices({
  auth: persistReducer(persistConfig, authReducer),
  contact: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);