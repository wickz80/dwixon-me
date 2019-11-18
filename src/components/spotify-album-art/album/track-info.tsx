import * as React from "react"

interface Props {
  updatePlayer: (uri: string) => void
  track: SpotifyApi.TrackObjectFull
}

export const TrackInfo: React.FunctionComponent<Props> = ({ track, updatePlayer }) => (
  <div className="track-info">
    <div className="track-info-data">
      <p>
        <strong>track: </strong> {track.name}
      </p>
      <p>
        <strong>{`artist${track.artists.length === 1 ? "" : "s"}: `}</strong>
        {mapArtists(track.artists)}
      </p>
      <p>
        <strong>album: </strong>
        {track.album.name}
      </p>
      <div className="spotify-link" onClick={() => updatePlayer(track.uri)}>
        Open in Spotify
      </div>
    </div>
  </div>
)

function mapArtists(artists: SpotifyApi.ArtistObjectSimplified[]) {
  const names = artists.map(a => a.name)
  return names.join(" - ")
}
