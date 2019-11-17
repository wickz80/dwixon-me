import * as React from "react"

interface Props {
  track: SpotifyApi.TrackObjectFull
}

export const TrackInfo: React.FunctionComponent<Props> = ({ track }) => (
  <div className="track-info">
    <div className="track-info-data">
      <p><strong>track: </strong> {track.name}</p>
      <p><strong>{`artist${track.artists.length === 1 ? "" : "s"}: `}</strong>{mapArtists(track.artists)}</p>
      <p><strong>album: </strong>{track.album.name}</p>
    </div>
  </div>
)

function mapArtists(artists: SpotifyApi.ArtistObjectSimplified[]) {
  let names = artists.map(a => a.name)
  return names.join(" - ")
}