import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserTypeReducer from './Slices/UserType';
import UtiltitiesReducer from './Slices/Utiltities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import AuthSlice from './Slices/Auth';


const reducer = combineReducers({
  UserType: UserTypeReducer,
  utiltities: UtiltitiesReducer,
  Auth: AuthSlice,

});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);