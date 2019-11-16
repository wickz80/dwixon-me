import * as React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/utils/seo"
import { Spotify } from "./album-art/spotify"
import { forEach } from "async"
// playlist ID as input

// (auth)
// fetch songs 

// fetch album art for X songs

// tile album art with some level of interaction


interface Props {
  location?: any
}

class AlbumArt extends React.Component<Props> {
  componentDidMount() {
    if (this.props) {
      console.log(this.props.location.href)
      const params = new URLSearchParams(this.props.location.href.split("?")[1])
      console.log(params.get("code"))
    }
    const s = new Spotify()
    s.Authorize()
  }

  public render() {
    return (
      <Layout>
        <SEO title="album art generator" />
        <h2>this is spotify</h2>
      </Layout>
    )
  }
}

export default AlbumArt