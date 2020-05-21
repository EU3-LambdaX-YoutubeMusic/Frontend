import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";

import { GlobalContext } from "../context/GlobalState";
import PlaylistItem from "./PlaylistItem";
import "../Styles/Playlist.scss";

export default function Playlist() {
  const { playlist } = useContext(GlobalContext);
  const { addPlaylistItem } = useContext(GlobalContext);
  const [url, setUrl] = useState("");

  console.log("Hello");
  console.log("brenda");

  const videos = playlist.map(video => {
    const embedableVideo = video.url.replace("watch?v=", "embed/");
    return embedableVideo;
  });

  const [videoSrc, setVideoSrc] = useState(videos[0]);

  const onSubmit = event => {
    event.preventDefault();

    const newPlaylistItem = {
      url
    };

    addPlaylistItem(newPlaylistItem);
    setUrl("");
  };

  const next = () => {
    const currentlyPlaying = videoSrc;
    const currentlyPlayingIndex = videos.indexOf(currentlyPlaying);
    if (currentlyPlayingIndex !== videos.length - 1) {
      setVideoSrc(videos[currentlyPlayingIndex + 1]);
    }
  };

  const previous = () => {
    const currentlyPlaying = videoSrc;
    const currentlyPlayingIndex = videos.indexOf(currentlyPlaying);
    if (currentlyPlayingIndex !== 0) {
      setVideoSrc(videos[currentlyPlayingIndex - 1]);
    }
  };

  const onClick = id => {
    const video = playlist.find(item => item.id === id);
    const videoUrl = video.url;
    const embedableVideo = videoUrl.replace("watch?v=", "embed/");
    const selectedVideoIndex = videos.indexOf(embedableVideo);
    setVideoSrc(videos[selectedVideoIndex]);
  };

  return (
    <div className="dashboard">
      <div className="video-container">
        <ReactPlayer
          width="640px"
          height="360px"
          url={videoSrc}
          config={{
            youtube: {
              playerVars: { showinfo: 0 }
            }
          }}
          playing={false}
          onEnded={next}
        />
        <button onClick={next}>Next</button>
        <button onClick={previous}>Previous</button>
      </div>
      <div className="playlist-container">
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={url}
              onChange={event => setUrl(event.target.value)}
            />
            <input type="submit" value="Add Item" />
          </form>
        </div>
        <div className="playlists">
          {playlist.map(playlistItem => (
            <PlaylistItem
              key={playlistItem.id}
              playlistItem={playlistItem}
              onClick={() => onClick(playlistItem.id)}
              className={
                `${playlistItem.url.replace("watch?v=", "embed/")}` === videoSrc
                  ? "active"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
