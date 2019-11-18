export class SpotifyAuth {
  public Authorize(redirect: string) {
    const clientId = "26d5ac8cc3fd43eb86455970eec361f2"
    const endpoint = "https://accounts.spotify.com/authorize?"
    const params = new URLSearchParams()

    if (redirect.endsWith("/")) {
      redirect = redirect.substring(0, redirect.length - 1)
    }
    console.log(redirect)
    params.append("client_id", clientId)
    // params.append("client_secret", clientSecret)
    params.append("response_type", "token")
    params.append("redirect_uri", redirect)
    params.append("scope", "playlist-read-collaborative playlist-read-private")

    return endpoint + params.toString()
  }

  public Token(uri: string) {
    if (!uri.match("access_token")) {
      return
    }
    const hash = uri.split("#")[1]
    const tokenKey = hash.split("&")[0]
    return tokenKey.split("=")[1]
  }
}
