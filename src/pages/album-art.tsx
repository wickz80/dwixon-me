import * as React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import { SpotifyAuth } from "./album-art/spotify-auth"
import SpotifyWebApi from "spotify-web-api-js"
import { PlaylistsSelector } from "./album-art/playlists-selector"
import { CenteredBox } from "../components/common/centered-box"
import { Playlist } from "./album-art/playlist"

interface Props {
  location?: any
}

interface State {
  authorized: boolean
  authorizationLink?: string
  token?: string
  playlists?: SpotifyApi.ListOfUsersPlaylistsResponse
  selectedPlaylist?: SpotifyApi.SinglePlaylistResponse
  selectedOptionId?: string
  album?: SpotifyApi.AlbumObjectFull
}

class AlbumArt extends React.Component<Props, State> {
  private spotify: SpotifyWebApi.SpotifyWebApiJs

  public constructor(props: Props) {
    super(props)
    this.state = {
      authorized: false
    }
    this.spotify = new SpotifyWebApi()
  }

  public componentDidMount() {
    const s = new SpotifyAuth()
    const token = s.Token(this.props.location.href)
    if (token) {
      return this.setState((prev: State) => ({ ...prev, token, authorized: true }),
        () => this.getPlaylists()
      )
    }
    this.setState({
      authorizationLink: s.Authorize(this.props.location.href)
    })
  }
  public render() {
    return (
      <Layout noMainContent={true}>
        <SEO title="album art generator" />
        <div className="row" style={{
          justifyContent: "center",
        }}>
          {!this.state.selectedPlaylist ?
            <CenteredBox>
              <h5>select a playlist to tile album art</h5>
              {!this.state.authorized &&
                <a href={this.state.authorizationLink}>
                  <p>Authorize with Spotify</p>
                </a>
              }
              {this.state.playlists && <PlaylistsSelector playlists={this.state.playlists} handleSelection={this.handleSelection} />}
            </CenteredBox>
            : <Playlist playlist={this.state.selectedPlaylist} getAlbum={this.getAlbum} />
          }
        </div>
      </Layout>
    )
  }

  private getAlbum = (id: string) => {
    return this.spotify.getAlbum(id).then(
      resp => resp,
      () => console.log("Failed to retrieve album info")
    )
  }

  private getPlaylists = () => {
    this.spotify.setAccessToken(this.state.token!)
    this.spotify.getUserPlaylists().then(
      playlists => this.setState({ playlists }),
      () => console.log("Failed to retrieve user playlists")
    )

  }
  private handleSelection = (selectedOption: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionId = selectedOption.target.value
    this.spotify.getPlaylist(selectedOptionId).then(
      (selectedPlaylist: SpotifyApi.SinglePlaylistResponse) =>
        this.setState({ selectedOptionId, selectedPlaylist },
          () => console.log(`Option selected:`, selectedOptionId)
        ),
      () => console.log("Failed to retrieve Spotify playlist with id: ", selectedOptionId)

    )
  }
}

export default AlbumArt