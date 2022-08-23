import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/album";
import artistsReducer from "../reducers/artists";
import playlistReducer from "../reducers/playlist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    album: albumReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
