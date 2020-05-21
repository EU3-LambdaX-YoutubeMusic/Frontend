import { DELETE_PLAYLIST_ITEM, ADD_PLAYLIST_ITEM } from "./types";

export default (state, action) => {
  switch (action.type) {
    case DELETE_PLAYLIST_ITEM:
      return {
        ...state,
        playlist: state.playlist.filter(
          playlistItem => playlistItem.id !== action.payload
        )
      };

    case ADD_PLAYLIST_ITEM:
      return {
        ...state,
        playlist: [...state.playlist, action.payload]
      };
    default:
      return state;
  }
};
