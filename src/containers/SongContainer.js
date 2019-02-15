import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";


class SongsContainer extends Component {
    render() {
        // console.log("this.state: ", this.state);
        // if (!this.state) {
        //     console.log("loading...")
        //     return (<div>Loading...</div>);
        // }
        // listSongs()
        // console.log(listSongs());
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
                    <Link to="/">Home</Link>
                </Navigation>
                <div>
                    <h2>SONGS!!</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th><span class="glyphicon glyphicon-heart"></span> Favorite</th>
                                <th><span class="glyphicon glyphicon-headphones"></span> Title</th>
                                <th><span class="glyphicon glyphicon-user"></span> Artist</th>
                                <th><span class="glyphicon glyphicon-list-alt"></span> Album</th>
                                <th><span class="glyphicon glyphicon-calendar"></span> Date</th>
                                <th><span class="glyphicon glyphicon-time"></span> Duration</th>
                                <th><span class="glyphicon glyphicon-th-list"></span> Playlist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="waitlist in waitlists | filter:filter_name">
                                <td><button class="btn btn-default" type="submit" ng-click="send_text()"><Emoji symbol="❤️" /></button></td>
                                <td>song.title</td>
                                <td>song.artist</td>
                                <td>song.album</td>
                                <td>song.date</td>
                                <td>song.duration</td>
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
