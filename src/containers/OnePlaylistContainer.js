import _ from 'lodash';
import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { fetchPlaylistById } from '../actions';
import { fetchSongById } from '../actions';
import { fetchPlaylists } from '../actions';
import { convertMS } from '../helpers';

class OnePlaylistContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { playlistSongs: null }
        this.playlistId = this.props.location.pathname.split('/')[2];
    }

    componentDidMount() {
        fetchPlaylistById(this.playlistId).then(data => {
            this.setState({ playlistSongs: data.data[0].songs })
            console.log(this); 
        });
    }

    renderListItem(playlistSong) {
        const Emoji = props => (
            <span
                className="emoji"
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
        return (
            <tr>
                <td>{playlistSong.order}</td>
                <td>{playlistSong.songInfo.name}</td>
                <td>{playlistSong.songInfo.artist}</td>
                <td>{playlistSong.songInfo.album}</td>
                <td>{convertMS(playlistSong.songInfo.duration)}</td>
            </tr>
              );
    }

    renderList() {
        console.log("meow");
        console.log( _.map(this.state.playlistSongs, this.renderListItem.bind(this)));
        return _.map(this.state.playlistSongs, this.renderListItem.bind(this));
    }


    render() {
        console.log("this.state.playlistSongs: ", this.state.playlistSongs);
        if (!this.state.playlistSongs) {
            console.log("loading...")
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <Navigation>
                </Navigation>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th><span className="glyphicon glyphicon-sort"></span> Order</th>
                                <th><span className="glyphicon glyphicon-headphones"></span> Title</th>
                                <th><span className="glyphicon glyphicon-user"></span> Artist</th>
                                <th><span className="glyphicon glyphicon-list-alt"></span> Album</th>
                                <th><span className="glyphicon glyphicon-time"></span> Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default OnePlaylistContainer;
