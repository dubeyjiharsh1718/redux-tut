// store.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import CounterReducer from "./reducer";
import UseReducer from './UseReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Reducer } from "./Redux/Img/Reducer";

const store = configureStore({
  reducer: {
    users: UseReducer,
    counter: CounterReducer,
    imglist:Reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger), 
});

export default store;
