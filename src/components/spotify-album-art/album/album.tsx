import * as React from "react";
import { TrackInfo } from "./track-info";
import { AlbumFocused } from "./album-focused";

interface Props {
  track: SpotifyApi.TrackObjectFull;
  getAlbum: (id: string) => Promise<SpotifyApi.AlbumObjectFull | void>;
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
      <div className="album" onClick={this.toggleModal}>
        <TrackInfo track={this.props.track} />
        <img className="album-image" src={this.props.track.album.images[0].url} />
        {this.state.modalOpen && (
          <AlbumFocused getAlbum={this.props.getAlbum} track={this.props.track} open={this.state.modalOpen} close={this.toggleModal} />
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
