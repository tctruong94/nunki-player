import React, { Component } from "react";
import Navigation from "../components/Navigation";
import data from "../tracks.json";

class SongsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { tracks: [] }
    }
    componentDidMount() {
        //fetch data for a track here (i.e. from Spotify or Soundcloud)s
        this.setState({ tracks: data.tracks });
    }
    render() {
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
                            <tr ng-repeat="waitlist in waitlists | filter:filter_name">
                                <td><button class="btn btn-default" type="submit" ng-click="send_text()"><Emoji symbol="❤️" /></button></td>
                                <td></td>
                                <td>{data.artist}</td>
                                <td>{data.album}</td>
                                <td></td>
                                <td>
                                    <select class="form-control" ng-model='waitlist.status' ng-change='change_status(waitlist._id, waitlist.status)'>
                                        <option ng-repeat='status in statuses track by $index'>Add to playlist</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SongsContainer;
