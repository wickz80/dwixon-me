import * as React from "react"
import Layout from "../layouts/layout"
import SEO from "../utils/seo"
import { SpotifyAuth } from "./spotify-auth"
import SpotifyWebApi from "spotify-web-api-js"
import { PlaylistsSelector } from "./playlists-selector"
import { CenteredBox } from "../common/centered-box"
import { Album } from "./album/album"
import "./styles.scss"
import spotifyLogo from "src/icons/Spotify_Icon_RGB_Green.png"
import rightArrow from "src/icons/right.svg"
import { Player } from "./player/player"

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
  playerUrl?: string
  currentTracks: number
  nowPlaying?: SpotifyApi.CurrentlyPlayingResponse
  playQueue: string[]
}

class AlbumArt extends React.Component<Props, State> {
  private spotify: SpotifyWebApi.SpotifyWebApiJs

  public constructor(props: Props) {
    super(props)
    this.state = {
      authorized: false,
      currentTracks: 0,
      playQueue: []
    }
    this.spotify = new SpotifyWebApi()
  }

  public componentDidMount() {
    const s = new SpotifyAuth()
    const token = s.Token(this.props.location.href)
    if (token) {
      return this.setState(
        (prev: State) => ({ ...prev, token, authorized: true }),
        () => {
          this.getPlaylists()
          this.getCurrentTrack()
        }
      )
    }
    this.setState({
      authorizationLink: s.Authorize(this.props.location.href)
    })
  }
  public render() {
    return (
      <Layout
        noMainContent={true}
        containerClass={this.state.authorized && this.state.selectedPlaylist ? "container nomax tiled" : "container nomax"}
      >
        <SEO title="album art generator" />
        <div
          className="row mx-0"
          style={{
            justifyContent: "center"
          }}
        >
          {!this.state.selectedPlaylist ? (
            <CenteredBox>
              <img className="spotify-icon" src={spotifyLogo} />
              <h5>select a playlist to tile album art</h5>
              {!this.state.authorized && (
                <a href={this.state.authorizationLink}>
                  <p>Authorize with Spotify</p>
                </a>
              )}
              {this.state.playlists && <PlaylistsSelector playlists={this.state.playlists} handleSelection={this.handleSelection} />}
            </CenteredBox>
          ) : (
            <div className="row album-view">
              <a
                className="next-tracks-arrow"
                onClick={() => this.setState((prev: State) => ({ ...prev, currentTracks: prev.currentTracks + 30 }))}
              >
                <img src={rightArrow} />
              </a>
              {this.state.selectedPlaylist.tracks.items.slice(this.state.currentTracks, this.state.currentTracks + 30).map(item => (
                <Album
                  track={item.track}
                  key={item.track.id}
                  getAlbum={this.getAlbum}
                  updatePlayer={this.updatePlayer}
                  queueTrack={this.queueTrack}
                />
              ))}
            </div>
          )}
          {this.state.selectedPlaylist && <Player nowPlaying={this.state.nowPlaying} />}
        </div>
      </Layout>
    )
  }

  public componentDidUpdate(): void {
    if (this.state.nowPlaying && !this.state.nowPlaying.is_playing && this.state.playQueue.length > 0) {
      const nextTrack = this.state.playQueue.pop()
      this.spotify.play({
        uris: [nextTrack!]
      })
    }
  }

  private getCurrentTrack = () => {
    setInterval(async () => {
      this.spotify
        .getMyCurrentPlayingTrack()
        .then(track => this.setState((prev: State) => ({ ...prev, nowPlaying: track })), () => console.log("Failed to get current track"))
    }, 1000)
  }

  private parseSpotifyUri = (spotifyUri: string) => {
    const split = spotifyUri.split(":")
    const type = split[1]
    const id = split[2]
    return `https://open.spotify.com/embed/${type}/${id}`
  }

  private updatePlayer = (spotifyUri: string) => {
    this.setState({
      playerUrl: this.parseSpotifyUri(spotifyUri)
    })
    this.spotify.play({
      uris: [spotifyUri]
    })
  }

  private queueTrack = (spotifyUri: string) => {
    this.state.playQueue.push(spotifyUri)
  }

  private getAlbum = (id: string) => {
    return this.spotify.getAlbum(id).then(resp => resp, () => console.log("Failed to retrieve album info"))
  }

  private getPlaylists = () => {
    this.spotify.setAccessToken(this.state.token!)
    this.spotify.getUserPlaylists().then(playlists => this.setState({ playlists }), () => console.log("Failed to retrieve user playlists"))
  }
  private handleSelection = (selectedOption: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionId = selectedOption.target.value
    this.spotify
      .getPlaylist(selectedOptionId)
      .then(
        (selectedPlaylist: SpotifyApi.SinglePlaylistResponse) =>
          this.setState({ selectedOptionId, selectedPlaylist }, () => console.log(`Option selected:`, selectedOptionId)),
        () => console.log("Failed to retrieve Spotify playlist with id: ", selectedOptionId)
      )
  }
}

export default AlbumArt
