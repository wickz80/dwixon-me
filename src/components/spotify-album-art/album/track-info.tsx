import * as React from "react";
import { PlayButton } from "../player/play-button";
import "./styles.scss";

interface Props {
  updatePlayer: (uri: string) => void;
  queueTrack: (uri: string) => void;
  track: SpotifyApi.TrackObjectFull;
}

export const TrackInfo: React.FunctionComponent<Props> = ({ track, updatePlayer }) => (
  <div className="track-info">
    <div className="track-info-data">
      <p>
        <span className="metadata">track: </span>
        <span className="content">{track.name}</span>
      </p>

      <p className="content">
        <span className="metadata">{`artist${track.artists.length === 1 ? "" : "s"}: `}</span>
        <span>{mapArtists(track.artists)}</span>
      </p>

      <p>
        <span className="metadata">album: </span>
        <span className="content">{track.album.name}</span>
      </p>

      <div className="album-play" onClick={() => updatePlayer(track.uri)}>
        <PlayButton />
      </div>
    </div>
  </div>
);

function mapArtists(artists: SpotifyApi.ArtistObjectSimplified[]) {
  const names = artists.map(a => a.name);
  return names.join(" - ");
}
