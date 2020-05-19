import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { DELETE_PLAYLIST_ITEM, ADD_PLAYLIST_ITEM } from "./types";
import { getVideoData } from "../Helpers/Axios";

// Initial state

const initialState = {
  playlist: [
    {
      id: 1,
      title:
        "Bitcoin | Chainlink | LINK BTC | Price Prediction Today | NEWS & Market Analysis | May 2020 🏮",
      url: "https://www.youtube.com/watch?v=IchG1CLI3I8",
      imageThumbnail: "https://i.ytimg.com/vi/IchG1CLI3I8/default.jpg"
    },
    {
      id: 69,
      title: "What Can $10 Get in LAGOS, NIGERIA? (craziest city)",
      url: "https://www.youtube.com/watch?v=YrRLCoKmLLA",
      imageThumbnail: "https://i.ytimg.com/vi/YrRLCoKmLLA/default.jpg"
    },
    {
      id: 25,
      title:
        "President Obama Speaks to the Class of 2020 | The Daily Social Distancing Show",
      url: "https://www.youtube.com/watch?v=0XjuPV8HtU8",
      imageThumbnail: "https://i.ytimg.com/vi/0XjuPV8HtU8/default.jpg"
    }
  ]
};
