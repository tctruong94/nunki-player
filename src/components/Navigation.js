import React from 'react';
import '../css/Navigation.css';

const Navigation = () => {

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Nunki Music</a>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/stream">Stream</a></li>
                    <li><a href="/songs">Songs</a></li>
                    <li><a href="/playlists">Playlists</a></li>
                </ul>

                <div className="nav navbar-nav navbar-right">
                    <a href="#">Hello, user!</a>
                    <button type="submit" className="btn btn-default">Log out</button>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;
