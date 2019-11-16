import { clientId, clientSecret } from "./credentials"

export class Spotify {
  public Authorize(callback: (url: string) => void, redirect: string) {
    const endpoint = "https://accounts.spotify.com/authorize?"
    const params = new URLSearchParams()

    params.append("client_id", clientId)
    params.append("client_secret", clientSecret)
    params.append("response_type", "token")
    params.append("redirect_uri", redirect)
    params.append("scope", "playlist-read-collaborative playlist-read-private")

    this.getAuthorization(endpoint + params.toString(), callback)
  }

  public Token(uri: string) {
    if (!uri.match("access_token")) {
      return
    }
    const hash = uri.split("#")[1]
    console.log("HASH", hash)
    const tokenKey = hash.split("&")[0]
    return tokenKey.split("=")[1]
  }

  private getAuthorization = async (url: string, callback: (url: string) => void) => {
    const response = await fetch(url, {
      mode: "cors"
    }).then(resp => resp, () => console.log("Failure to hit endpoint"))

    if (response) {
      callback(response.url)
    }
  }
}
