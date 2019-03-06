import axios from 'axios';

// const ROOT_URL = "nunki-music.appspot.com";

export function fetchSongs() {
    return axios.get('https://nunki-music.appspot.com/songs');
}

// testing for get song and playlist

export function fetchPlaylists() {
    return axios.get('https://nunki-music.appspot.com/playlists/');
}
export function fetchSongById(songId) {
    return axios.get('https://nunki-music.appspot.com/songs/' + songId);
}

export function fetchPlaylistById(playlistId) {
    return axios.get('https://nunki-music.appspot.com/playlists/' + playlistId);
}
export function deletePlaylistById(playlistId) {
    return axios.delete('https://nunki-music.appspot.com/playlists/' + playlistId);
}

export function postPlaylist(playlistName) {
    let data = JSON.stringify({
      name: playlistName
    });
    return axios.post("https://nunki-music.appspot.com/playlists", data, {
      headers: {"Content-Type": "application/json"}

    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("hit error");
      console.log(error);
    });
}
