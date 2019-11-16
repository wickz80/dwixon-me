import * as React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import { SpotifyAuth } from "./album-art/spotify-auth"
// playlist ID as input

// (auth)
// fetch songs 

// fetch album art for X songs

// tile album art with some level of interaction


interface Props {
  location?: any
}

interface State {
  authorizationLink?: string
  token?: string;
}

class AlbumArt extends React.Component<Props, State> {
  public constructor() {
    super({})
    this.state = {}
  }
  public componentDidMount() {
    const s = new SpotifyAuth()
    const token = s.Token(this.props.location.href)
    if (!token) {
      s.Authorize((url: string) => { console.log("authorize: ", url); this.setState({ authorizationLink: url }) },
        this.props.location.href
      )
    }
    console.log("current page", this.props.location.href)
    console.log("TOKEN: ", token)
  }

  public render() {
    return (
      <Layout>
        <SEO title="album art generator" />
        <h2>this is spotify</h2>

        {this.state.authorizationLink ?
          <a href={this.state.authorizationLink}>
            <p>Authorize with Spotify</p>
          </a>
          : null
        }
      </Layout>
    )
  }
}

export default AlbumArt