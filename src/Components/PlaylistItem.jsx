import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "../Styles/Playlistitem"

export default function PlaylistItem({ playlistItem, onClick, className }) {
  const { deletePlaylistItem } = useContext(GlobalContext);

  return (
    <div>
      <li className={className}>
        <div>
          <Button onClick={() => deletePlaylistItem(playlistItem.id)}>
          
          
          <div className="list-item" onClick={onClick}>
            <img src={playlistItem.imageThumbnail} alt={playlistItem.title} />
            <p>{playlistItem.title}</p>
          </div>
          <i class="fas fa-trash-alt"></i>
          </Button>
        </div>
      </li>
    </div>
  );
}
