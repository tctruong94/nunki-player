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

export function uploadSong(name, artist, album, order, source, artwork) {
    var formData = new FormData();
    formData.append("source", source);
    formData.append("artwork", artwork);
    formData.append("name", name);
    formData.append("artist", artist);
    formData.append("album", album);
    formData.append("order", order);
    console.log(formData);
    return axios.post('https://nunki-music.appspot.com/songs', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(function (response) {
        console.log(response);
        alert(response);
    });
}

