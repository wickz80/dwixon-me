import React from "react";
import play from "src/icons/svg/menu.svg";

export const FocusedViewButton: React.FunctionComponent = () => (
  <div className="player-button focused">
    <img className="player-button-icon focused" src={play} />
  </div>
);
