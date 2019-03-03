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
