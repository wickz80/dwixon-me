import * as React from "react"

interface Props {
  updatePlayer: (uri: string) => void
  album: SpotifyApi.AlbumObjectFull
}

export const AlbumInfo: React.FunctionComponent<Props> = ({ album, updatePlayer }) => (
  <div className="album-info">
    <div className="spotify-link" onClick={() => updatePlayer(album.uri)}>
      <h4 className="content">{album.name}</h4>
    </div>
    {album.tracks.items.map(track => (
      <div className="album-info__track" key={track.id}>
        <div className="spotify-link" onClick={() => updatePlayer(track.uri)}>
          <p className="content">{track.name}</p>
        </div>
      </div>
    ))}
  </div>
)
