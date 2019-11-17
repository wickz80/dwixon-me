import * as React from "react"
import "./styles.scss"
import { TrackInfo } from "./track-info";

interface Props {
  track: SpotifyApi.TrackObjectFull
}

export class Album extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <a
        href={this.props.track.uri}
        className="album"
      >
        <TrackInfo track={this.props.track} />
        <img className="album-image"
          src={this.props.track.album.images[0].url}
        />
      </a>
    )
  }
}
