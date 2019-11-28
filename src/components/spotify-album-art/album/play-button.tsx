import React from "react"
import play from "src/icons/svg/caret-right.svg"

export const PlayButton: React.FunctionComponent = () => (
  <div className="player-button play">
    <img className="player-button-icon play" src={play} />
  </div>
)
