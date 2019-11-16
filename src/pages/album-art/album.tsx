import * as React from "react"

interface Props {
  track: SpotifyApi.TrackObjectFull
}

export class Album extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      // <div>
      //   <p>Artist: {this.props.track.artists[0].name}</p>
      //   <p>Name: {this.props.track.name}</p>
      //   <p>Album: {this.props.track.album.name}</p>
      // </div>
      <img
        style={{
          maxWidth: "8rem",
          maxHeight: "8rem"
        }}
        src={this.props.track.album.images[0].url}
      />
    )
  }
}
