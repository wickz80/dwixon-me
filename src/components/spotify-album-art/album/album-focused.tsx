import * as React from "react"
import Modal from "react-modal"
import { AlbumInfo } from "./album-info"

interface Props {
  track: SpotifyApi.TrackObjectFull
  open: boolean
  getAlbum: (id: string) => Promise<SpotifyApi.AlbumObjectFull | void>
  updatePlayer: (uri: string) => void
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
    console.log("requesting album")
    this.props.getAlbum(this.props.track.album.id).then(album => album && this.setState({ album }))
  }
  public render() {
    console.log(this.state)
    return (
      <Modal isOpen={this.props.open} shouldCloseOnEsc={true} onRequestClose={this.props.close}>
        <div className="row mx-0">
          <div className="col-12 col-md-6 album-focused art">
            <img className="album-focused-image" src={this.props.track.album.images[0].url} />
          </div>
          <div className="col-12 col-md-6 album-focused tracklist">
            {this.state.album && <AlbumInfo album={this.state.album} updatePlayer={this.props.updatePlayer} />}
          </div>
        </div>
      </Modal>
    )
  }
}
