import * as React from "react"

interface Props {
  playlists: SpotifyApi.ListOfUsersPlaylistsResponse
  handleSelection: any
}

export const PlaylistsSelector: React.FunctionComponent<Props> = (props: Props) =>
  <>
    <select
      onChange={props.handleSelection}
    >
      <option>Pick a playlist...</option>
      {props.playlists.items.map(playlist =>
        <option value={playlist.id} key={playlist.id}>
          {playlist.name}
        </option>)}
    </select>
  </>