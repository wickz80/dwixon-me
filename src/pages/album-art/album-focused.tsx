import * as React from "react"
import Modal from "react-modal";

interface Props {
  track: SpotifyApi.TrackObjectFull
  open: boolean
  getAlbum: (id: string) => Promise<SpotifyApi.AlbumObjectFull | void>
  close: () => void
}

interface State {
  album?: SpotifyApi.AlbumObjectFull
}

Modal.setAppElement("#___gatsby")

export class AlbumFocused extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {}
  }

  public componentDidMount() {
    console.log('requesting album')
    this.props.getAlbum(this.props.track.album.id).then(album => album && this.setState({ album }))
  }
  public render() {
    console.log(this.state)
    return (
      <Modal
        isOpen={this.props.open}
        shouldCloseOnEsc={true}
        onRequestClose={this.props.close}
        style={{
          overlay: {
            zIndex: "10",
            maxWidth: "99vw",
          },
          content: {
            left: "10px",
            right: "10px",
            bottom: "unset"

          }
        }}
      >
        <div className="row">

          <div className="col-12 col-md-6 album-focused art">
            <img src={this.props.track.album.images[0].url} />
          </div>
          <div className="col-12 col-md-6 album-focused tracklist">
            {this.state.album && <>
              <h4>{this.state.album.name}</h4>
              {this.state.album.tracks.items.map(track => <p>{track.name}</p>)}
            </>}
          </div>
        </div>
      </Modal>
    )
  }
}
