import _ from 'lodash';
import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { fetchSongs } from '../actions';
import { convertMS } from '../helpers';

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
            <tr>
                <td><button className="btn btn-default" type="submit" ng-click="send_text()"><Emoji symbol="❤️" /></button></td>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{convertMS(song.duration)}</td>
                <td>
                    <select className="form-control">
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th><span className="glyphicon glyphicon-heart"></span> Favorite</th>
                                <th><span className="glyphicon glyphicon-headphones"></span> Title</th>
                                <th><span className="glyphicon glyphicon-user"></span> Artist</th>
                                <th><span className="glyphicon glyphicon-list-alt"></span> Album</th>
                                <th><span className="glyphicon glyphicon-time"></span> Duration</th>
                                <th><span className="glyphicon glyphicon-th-list"></span> Playlist</th>
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