import React from "react";
import play from "src/icons/play.svg";

export const PlayButton: React.FunctionComponent = () => (
  <div className="player-button">
    <img className="player-button-icon" src={play} />
  </div>
);
