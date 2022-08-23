import {
  SET_ALBUMS,
  SET_ARTISTS,
  SET_PLAYLIST,
  ADD_ALBUMS,
  ADD_PLAYLIST,
  ADD_ARTISTS,
} from "../utils/constants";

import { get } from "../utils/api";

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums,
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums,
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists,
});

export const addArtist = (artists) => ({
  type: ADD_ARTISTS,
  artists,
});

export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists,
});
export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists,
});

export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;

      const results = await get(API_URL);
      console.log("Results", results);
      const { albums, artists, playlists } = results;
      dispatch(setAlbums(albums));
      dispatch(setPlayList(playlists));
      return dispatch(setArtists(artists));
    } catch (e) {
      console.log("Error", e);
    }
  };
};
