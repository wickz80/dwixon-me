import { client_id, client_secret } from "./credentials"

export class Spotify {
  public async Authorize() {
    const endpoint = "https://accounts.spotify.com/authorize?"
    const params = new URLSearchParams()

    params.append("client_id", client_id)
    params.append("client_secret", client_secret)
    params.append("response_type", "token")
    params.append("redirect_uri", "https://dwixon.me/spotify")
    params.append("scope", "playlist-read-collaborative playlist-read-private")

    const url = endpoint + params.toString()
    console.log("fetching ", url)
    const response = await fetch(url, {
      mode: "cors"
    }).then(resp => resp, () => console.log("Failure to hit endpoint"))

    if (response) {
      return response.url
    }
    return
  }
}

// https://accounts.spotify.com/login?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Dplaylist-read-collaborative%2Bplaylist-read-private%26response_type%3Dtoken%26client_secret%3Da0c7ce4ec0b44002b903b47616fe194e%26redirect_uri%3Dhttps%253A%252F%252Fdwixon.me%252Fspotify%26client_id%3D26d5ac8cc3fd43eb86455970eec361f2
