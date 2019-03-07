import axios from 'axios';

// const ROOT_URL = "nunki-music.appspot.com";

export function fetchSongs() {
    return axios.get('https://nunki-music.appspot.com/songs');
}

export function uploadSong(name, artist, album, order, duration, source, artwork) {
    return axios.post('https://nunki-music.appspot.com/songs', {
        name: name,
        artist: artist,
        album: album,
        order: order,
        duration: duration,
        source: source,
        artwork: artwork
    });
}