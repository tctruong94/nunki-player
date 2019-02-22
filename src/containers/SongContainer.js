import _ from 'lodash';
import React, { Component } from "react";
import Navigation from "../components/Navigation";
// import data from "../tracks.json";
import { fetchSongs } from '../actions';

class SongsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { songs: null }
    }

    componentDidMount() {
        fetchSongs().then(data => {
            this.setState({ songs: data.data.items })
        });
    }

    renderListItem(song) {
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
            <tr ng-repeat="waitlist in waitlists | filter:filter_name">
                <td><button class="btn btn-default" type="submit" ng-click="send_text()"><Emoji symbol="❤️" /></button></td>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.duration}</td>
                <td>
                    <select class="form-control" ng-model='waitlist.status' ng-change='change_status(waitlist._id, waitlist.status)'>
                        <option ng-repeat='status in statuses track by $index'>Add to playlist</option>
                    </select>
                </td>
            </tr>

        );
    }

    renderList() {
        return _.map(this.state.songs, this.renderListItem.bind(this));
    }


    render() {
        console.log("this.state.songs: ", this.state.songs);
        if (!this.state.songs) {
            console.log("loading...")
            return (<div>Loading...</div>);
        }

        return (
            <div>
                <Navigation>
                </Navigation>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th><span class="glyphicon glyphicon-heart"></span> Favorite</th>
                                <th><span class="glyphicon glyphicon-headphones"></span> Title</th>
                                <th><span class="glyphicon glyphicon-user"></span> Artist</th>
                                <th><span class="glyphicon glyphicon-list-alt"></span> Album</th>
                                <th><span class="glyphicon glyphicon-time"></span> Duration</th>
                                <th><span class="glyphicon glyphicon-th-list"></span> Playlist</th>
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

export default SongsContainer;