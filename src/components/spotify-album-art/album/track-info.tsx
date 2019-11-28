import * as React from "react";
import { PlayButton } from "./play-button";
import { QueueButton } from "./queue-button";
import { FocusedViewButton } from "./focused-view-button";

interface Props {
  updatePlayer: (uri: string) => void;
  queueTrack: (uri: string) => void;
  openFocusedView: () => void;
  track: SpotifyApi.TrackObjectFull;
}

export const TrackInfo: React.FunctionComponent<Props> = ({ track, updatePlayer, queueTrack, openFocusedView }) => (
  <div className="track-info">
    <div className="track-info-data">
      <p className="content">
        <span className="metadata">track: </span>
        <span className="content">{track.name}</span>
      </p>

      <p className="content">
        <span className="metadata">{`artist${track.artists.length === 1 ? "" : "s"}: `}</span>
        <span>{mapArtists(track.artists)}</span>
      </p>

      <p className="content">
        <span className="metadata">album: </span>
        <span className="content">{track.album.name}</span>
      </p>

      <div className="album-button play" onClick={() => updatePlayer(track.uri)}>
        <PlayButton />
      </div>

      <div className="album-button focused" onClick={() => openFocusedView()}>
        <FocusedViewButton />
      </div>

      <div className="album-button queue" onClick={() => queueTrack(track.uri)}>
        <QueueButton />
      </div>
    </div>
  </div>
);

function mapArtists(artists: SpotifyApi.ArtistObjectSimplified[]) {
  const names = artists.map(a => a.name);
  return names.join(" - ");
}
