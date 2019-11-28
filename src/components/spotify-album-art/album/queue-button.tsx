import React from "react";
import queue from "src/icons/svg/plus.svg";

export const QueueButton: React.FunctionComponent = () => (
  <div className="player-button queue">
    <img className="player-button-icon queue" src={queue} />
  </div>
);
