import axios from 'axios';

// const ROOT_URL = "nunki-music.appspot.com";

export function fetchSongs() {
    return axios.get('https://nunki-music.appspot.com/songs');
}