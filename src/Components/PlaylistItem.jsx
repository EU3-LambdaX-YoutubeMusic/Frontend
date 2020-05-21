import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../Styles/Playlist.scss";

export default function PlaylistItem({ playlistItem, onClick, className }) {
  const { deletePlaylistItem } = useContext(GlobalContext);

  return (
    <div>
      <li className={className}>
        <div>
          <button onClick={() => deletePlaylistItem(playlistItem.id)}>
            <i className="fas fa-minus-circle"></i>
          </button>
          <div className="list-item" onClick={onClick}>
            <img src={playlistItem.imageThumbnail} alt={playlistItem.title} />
            <p>{playlistItem.title}</p>
          </div>
        </div>
      </li>
    </div>
  );
}
