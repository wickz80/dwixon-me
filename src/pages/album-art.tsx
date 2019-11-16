import * as React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import { SpotifyAuth } from "./album-art/spotify-auth"
import SpotifyWebApi from "spotify-web-api-js"
import { Playlists } from "./album-art/playlists"

// todo get typings
// const SpotifyWebApi = require("spotify-web-api-js")

interface Props {
  location?: any
}

interface State {
  authorizationLink?: string
  token?: string;
  playlists?: SpotifyApi.ListOfUsersPlaylistsResponse
}

class AlbumArt extends React.Component<Props, State> {
  private spotify: SpotifyWebApi.SpotifyWebApiJs

  public constructor(props: Props) {
    super(props)
    this.state = {}
    this.spotify = new SpotifyWebApi()
  }

  public componentDidMount() {
    console.log("current page", this.props.location.href)
    const s = new SpotifyAuth()
    const token = s.Token(this.props.location.href)
    if (!token) {
      s.Authorize((url: string) => { console.log("authorize: ", url); this.setState({ authorizationLink: url }) },
        this.props.location.href
      )
      return
    }
    console.log("TOKEN: ", token)

    this.spotify.setAccessToken(token)
    this.spotify.getUserPlaylists().then(
      playlists => this.setState({ playlists }),
      () => console.log("Failed to retrieve user playlists")
    )

  }

  public render() {
    return (
      <Layout noMainContent={true}>
        <SEO title="album art generator" />
        {this.state.authorizationLink ?
          <a href={this.state.authorizationLink}>
            <p>Authorize with Spotify</p>
          </a>
          : null
        }

        {this.state.playlists ?
          <Playlists playlists={this.state.playlists} spotify={this.spotify} />
          : null
        }
      </Layout>
    )
  }
}

export default AlbumArt