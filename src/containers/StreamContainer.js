import React, { Component } from 'react';
import Controls from "../components/Controls";
import TrackList from "../components/TrackList";
import Breadcrumb from "../components/Navigation";
import { Link } from "react-router-dom";
// import { fetchObjects } from "../actions";
import data from "../tracks.json";

class StreamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            currentTrackIndex: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.selectTrackNumber = this.selectTrackNumber.bind(this);
    }

    playAudio() {
        this.audioElement.load();
        this.audioElement.play();
    }
    pauseAudio() {
        this.audioElement.pause();
    }
    selectTrackNumber(trackId) {
        this.setState({ currentTrackIndex: trackId, playing: true }, this.playAudio);
    }
    handleClick(e) {
        switch (e.target.id) {
            case "play":
                this.setState((state, props) => {
                    let currentTrackIndex = state.currentTrackIndex;
                    if (currentTrackIndex === 0) {
                        currentTrackIndex = 1;
                    }
                    return {
                        playing: true,
                        currentTrackIndex: currentTrackIndex
                    };
                }, this.playAudio);
                break;
            case "pause":
                this.setState({ playing: false }, this.pauseAudio);
                break;
            case "prev":
                this.setState((state, props) => {
                    let currentIndex = state.currentTrackIndex - 1;
                    if (currentIndex <= 0) {
                        return null;
                    } else {
                        return { playing: true, currentTrackIndex: currentIndex };
                    }
                }, this.playAudio);
                break;
            case "next":
                this.setState((state, props) => {
                    let currentIndex = state.currentTrackIndex + 1;
                    if (currentIndex > data.tracks.length) {
                        return null;
                    } else {
                        return { playing: true, currentTrackIndex: currentIndex };
                    }
                }, this.playAudio);
                break;
            default:
                break;
        }
    }

    render() {
        console.log("loading...");
        
        return (
            <div class="row">
                <div>
                <Breadcrumb>
                    <Link to="/">Home</Link>
                    <h5>((username)) is logged in</h5>
                    <button type="button" class="btn btn-warning pull-right" ng-click="logout()">
                        Logout
                    </button>
                </Breadcrumb>
                </div>
                <div class="col-md-6 col-md-offset-3">
                    <div className="App">
                        <div
                            className="Artwork"
                            style={{ backgroundImage: "url(" + data.artwork + ")" }}
                        >
                            <Controls onClick={this.handleClick} playing={this.state.playing} />
                            <audio ref={(audio) => { this.audioElement = audio }} src={"/songs/" + this.state.currentTrackIndex + ".mp3"} />
                        </div>
                        <TrackList
                            currentTrackIndex={this.state.currentTrackIndex}
                            selectTrackNumber={this.selectTrackNumber}
                        />
                        <div className="nunkiplayer">
                            Nunki Player
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StreamContainer;