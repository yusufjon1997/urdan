import { createStore , applyMiddleware } from "redux";
import { persistStore , persistReducer } from 'redux-persist';
import { composeWithDevTools } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'

import { rootReducer } from "./rootReducer";


const persistConfig = {
    key: 'root',
    storage, 
    blacklist : ['user', 'carts' , 'categories']
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

/// root reducers 

// middleWares when action dispatched before action hits the reducers  it hits the middleware first
// const middleWares = [logger , thunk];

const composedEnhencer = composeWithDevTools(applyMiddleware(thunk));// this pass every middlewares .

export const store = createStore(persistedReducer, undefined , composedEnhencer);

export const persistor = persistStore(store);