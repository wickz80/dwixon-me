import * as React from "react"

interface Props {
  album: SpotifyApi.AlbumObjectFull
}

export const AlbumInfo: React.FunctionComponent<Props> = ({ album }) => (
  <div className="album-info">
    <a href={album.uri}>
      <h4>{album.name}</h4>
    </a>
    {album.tracks.items.map((track, i) => (
      <p className="album-info__track" key={track.id}>
        <strong>{i + 1}</strong>
        <a href={track.uri}>{track.name}</a>
      </p>
    ))}
  </div>
)
