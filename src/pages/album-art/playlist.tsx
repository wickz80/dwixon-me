import * as React from "react"
import { Album } from "./album";

// todo get typings
// const SpotifyWebApi = require("spotify-web-api-js")

interface Props {
  playlist: SpotifyApi.SinglePlaylistResponse
  getAlbum: (id: string) => Promise<SpotifyApi.AlbumObjectFull | void>
}

export class Playlist extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render() {
    return this.props.playlist.tracks.items.map(item => <Album track={item.track} key={item.track.id} getAlbum={this.props.getAlbum} />)
  }
}
