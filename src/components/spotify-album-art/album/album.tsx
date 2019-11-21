import * as React from "react";
import { TrackInfo } from "./track-info";
import { AlbumFocused } from "./album-focused";

interface Props {
  track: SpotifyApi.TrackObjectFull;
  getAlbum: (id: string) => Promise<SpotifyApi.AlbumObjectFull | void>;
  updatePlayer: (uri: string) => void;
}

interface State {
  modalOpen: boolean;
}

export class Album extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  public render() {
    return (
      <div className="album col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" onClick={this.toggleModal}>
        <TrackInfo track={this.props.track} updatePlayer={this.props.updatePlayer} />
        <img className="album-image " src={this.props.track.album.images[0].url} />
        {this.state.modalOpen && (
          <AlbumFocused
            getAlbum={this.props.getAlbum}
            track={this.props.track}
            open={this.state.modalOpen}
            close={this.toggleModal}
            updatePlayer={this.props.updatePlayer}
          />
        )}
      </div>
    );
  }

  private toggleModal = () => {
    this.setState((prev: State) => ({
      modalOpen: !prev.modalOpen
    }));
  };
}
