import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../Styles/Playlist.scss";

export default function PlaylistItem({ playlistItem, onClick }) {
  const { deletePlaylistItem } = useContext(GlobalContext);

  return (
    <div>
      <li onClick={onClick}>
        <div className="list-item">
          <button onClick={() => deletePlaylistItem(playlistItem.id)}>
            <i className="fas fa-minus-circle"></i>
          </button>
          <img src={playlistItem.imageThumbnail} alt={playlistItem.title} />
          <p>{playlistItem.title}</p>
        </div>
      </li>
    </div>
  );
}
