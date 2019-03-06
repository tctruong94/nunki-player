import _ from 'lodash';
import React, { Component } from "react";
import Navigation from "../components/Navigation";
import PostNewPlaylist from "../components/PostNewPlaylist";
import { fetchPlaylists } from '../actions';


class PlaylistsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { playlists: null }
    }

    componentDidMount() {
        fetchPlaylists().then(data => {
            console.log(data);
            this.setState({ playlists: data.data.items })
        });
    }

    renderListItem(playlist) {
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
                <td>{playlist.name}</td>
                <td><a href={"/playlists/" + playlist.id}>View/Edit</a></td>
            </tr>

        );
    }

    renderList() {
        return _.map(this.state.playlists, this.renderListItem.bind(this));
    }


    render() {
        console.log("this.state.playlists: ", this.state.playlists);
        if (!this.state.playlists) {
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
                                <th><span className="glyphicon glyphicon-list-alt"></span> Playlist Name</th>
                                <th><span className="glyphicon glyphicon-music"></span> Songs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
              <PostNewPlaylist>
              </PostNewPlaylist>
            </div>
        );
    }
}

export default PlaylistsContainer;
