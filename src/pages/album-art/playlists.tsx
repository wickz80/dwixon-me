import * as React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import { SpotifyAuth } from "./album-art/spotify-auth"
import SpotifyWebApi from "spotify-web-api-js"
import { Playlist } from "./playlist"

// todo get typings
// const SpotifyWebApi = require("spotify-web-api-js")

interface Props {
  playlists: SpotifyApi.ListOfUsersPlaylistsResponse
  spotify: SpotifyWebApi.SpotifyWebApiJs
}

interface State {
  selectedOptionId: string;
  selectedPlaylist?: SpotifyApi.SinglePlaylistResponse

}

export class Playlists extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    console.log("rendering playlist selector");
    this.state = {
      selectedOptionId: ""
    }
  }

  public render() {
    return (
      <div className="row" style={{
        marginLeft: "3rem"
      }}>

        <select
          onChange={this.handleChange}
        >
          {this.props.playlists.items.map(playlist =>
            <option value={playlist.id} key={playlist.id}>
              {playlist.name}
            </option>)}
        </select>
        {this.state.selectedPlaylist ?
          <Playlist playlist={this.state.selectedPlaylist} />
          : null
        }
      </div>
    )
  }
  private handleChange = (selectedOption: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionId = selectedOption.target.value
    this.props.spotify.getPlaylist(selectedOptionId).then(
      (selectedPlaylist: SpotifyApi.SinglePlaylistResponse) =>
        this.setState({ selectedOptionId, selectedPlaylist },
          () => console.log(`Option selected:`, selectedOptionId)
        ),
      () => console.log("Failed to retrieve Spotify playlist with id: ", selectedOptionId)

    )
  };
}
