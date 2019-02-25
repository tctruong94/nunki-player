import React, { Component } from "react";
import { fetchSongs } from '../actions';
import { convertMS } from '../helpers';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = { songs: [] }
        this.renderListItem = this.renderListItem.bind(this);
    }
    componentDidUpdate() {
        if (this.activeTrack) {
            let topOfTrackList = this.trackList.scrollTop;
            let bottomOfTrackList =
                this.trackList.scrollTop + this.trackList.clientHeight;
            let positionOfSelected = this.activeTrack.offsetTop;
            if (
                topOfTrackList > positionOfSelected ||
                bottomOfTrackList < positionOfSelected
            ) {
                this.trackList.scrollTop = positionOfSelected;
            }
        }
    }
    componentDidMount() {
        fetchSongs().then(data => {
            this.setState({ songs: data.data.items })
        });
    }

    renderListItem(song, i) {
        let trackClass = this.props.currentTrackIndex === i
            ? "selected"
            : "";
        return (
            <li
                key={i}
                className={trackClass}
                ref={cur => {
                    if (this.props.currentTrackIndex === i) {
                        this.activeTrack = cur;
                    }
                }}
                onClick={() => { this.props.selectTrackNumber(i) }}
            >
                <div className="number">{i}</div>
                <div className="title">{song.name}</div>
                <div className="duration">{convertMS(song.duration)}</div>
            </li>
        );
    }
    render() {
        let songs = this.state.songs.map(this.renderListItem);
        return (
            <ul
                className="TrackList"
                ref={input => {
                    this.trackList = input;
                }}
            >
                {songs}
            </ul>
        );
    }
}

export default TrackList;