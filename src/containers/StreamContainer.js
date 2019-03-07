import React, { Component } from 'react';
import Controls from "../components/Controls";
import TrackList from "../components/TrackList";
import Navigation from "../components/Navigation";
import { fetchSongs } from '../actions';

class StreamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            currentTrackIndex: 0,
            songs: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.selectTrackNumber = this.selectTrackNumber.bind(this);
    }
    componentDidMount() {
        fetchSongs().then(data => {
            this.setState({ songs: data.data.items })
        });
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
                    console.log("currentTrackIndex :", currentTrackIndex)
                    if (currentTrackIndex === 0) {
                        currentTrackIndex = 0;
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
                    console.log("PRE")
                    if (currentIndex <= -1) {
                        return null;
                    } else {
                        return { playing: true, currentTrackIndex: currentIndex };
                    }
                }, this.playAudio);
                break;
            case "next":
                this.setState((state, props) => {
                    let currentIndex = state.currentTrackIndex + 1;
                    if (currentIndex > state.songs.length) {
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
        // console.log("this.state.songs: ", this.state.songs);
        if (!this.state.songs) {
            console.log("loading...")
            return (<div>Loading...</div>);
        }
        if (this.state.songs[this.state.currentTrackIndex] !== undefined) {
            console.log("SOURCE2 ", this.state.songs[this.state.currentTrackIndex].source);
            return (
                <div className="row">
                    <Navigation>
                    </Navigation>
                    <div className="col-md-6 col-md-offset-3">
                        <div className="App">
                            <div
                                className="Artwork"
                                style={{ backgroundImage: "url(" + this.state.songs[this.state.currentTrackIndex].artwork + ")" }}
                            >
                                <Controls onClick={this.handleClick} playing={this.state.playing} />
                                <audio ref={(audio) => { this.audioElement = audio }} src={this.state.songs[this.state.currentTrackIndex].source} />
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

        return (
            <div className="row">
                <Navigation>
                </Navigation>
                <div className="col-md-6 col-md-offset-3">
                    <div className="App">
                        <div
                            className="Artwork"
                            // style={{ backgroundImage: "url(" + this.state.songs[this.state.currentTrackIndex].artwork + ")" }}
                        >
                            <Controls onClick={this.handleClick} playing={this.state.playing} />
                            {/* <audio ref={(audio) => { this.audioElement = audio }} src={this.state.songs[this.state.currentTrackIndex].source} /> */}
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