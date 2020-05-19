import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PlaylistItem from "./PlaylistItem";
import "../Styles/Playlist.scss";

export default function Playlist() {
  const { playlist } = useContext(GlobalContext);
  const { addPlaylistItem } = useContext(GlobalContext);
  const [url, setUrl] = useState("");

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
    // get currently playing
    const currentlyPlaying = videoSrc;
    // get the idx of currently playing
    const currentlyPlayingIndex = videos.indexOf(currentlyPlaying);
    // set video src to the next item
    setVideoSrc(videos[currentlyPlayingIndex + 1]);
  };

  const previous = () => {
    // get currently playing
    const currentlyPlaying = videoSrc;
    // get the idx of currently playing
    const currentlyPlayingIndex = videos.indexOf(currentlyPlaying);
    // set videoSrc to the previous video in the array of videos
    setVideoSrc(videos[currentlyPlayingIndex - 1]);
  };

  return (
    <div className="dashboard">
      <div className="video-container">
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={videoSrc}
          frameBorder="0"
          title="hello world"
          onEnded={() => next()}
          onLoad={() => {}}
          onstate
        ></iframe>
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
            <PlaylistItem key={playlistItem.id} playlistItem={playlistItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
