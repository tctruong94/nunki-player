import React, { Component } from "react";
import Navigation from "../components/Navigation";
import '../css/DashboardContainer.css'
import { uploadSong } from '../actions';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      artist: '',
      album: '',
      order: null,
      source: null,
      artwork: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    if (target.type === "text") {
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    } else {
      if (event.target.name === "artwork"){
        this.setState({
          [event.target.name]: event.target.files[0]
        });
      } else {
        this.setState({
          [event.target.name]: event.target.files[0]
        });
      }
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    uploadSong(this.state.name, this.state.artist, this.state.album, this.state.order, this.state.source, this.state.artwork);
    // this.state = {
    //   name: '',
    //   artist: '',
    //   album: '',
    //   order: null,
    //   source: null,
    //   artwork: null
    // };
  }



  render() {
    return (
      <div>
        <Navigation>
        </Navigation>
        <div>
          <div className="jumbotron">
            <h2>Welcome to Nunki music player!</h2>
            <h2>Ninki is music streaming web application.</h2>
            <br />
            <p>From Home, you can add a music file to your steam.</p>
            <p>From Stream, you can litsen your music anywhere.</p>
            <p>From Song, you can view and edit your music list.</p>
            <p>From Playlist, you can edit your music playlist.</p>
          </div>
          <form className="uploadform" onSubmit={this.handleSubmit}>
            <p>Add a music to my stream</p>
            <div className="form-group">
              <label for="name">Name</label>
              <br />
              <br />
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-music" aria-hidden="true"></i></div>
                <input name="name" type="text" placeholder="Enter Name of Music" value={this.state.name} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Artist</label>
              <br />
              <br />
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></div>
                <input name="artist" type="text" placeholder="Enter Artist Name" value={this.state.artist} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Album</label>
              <br />
              <br />
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-id-badge" aria-hidden="true"></i></div>
                <input name="album" type="text" placeholder="Enter Name of Album" value={this.state.album} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Order</label>
              <br />
              <br />
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-folder" aria-hidden="true"></i></div>
                <input name="order" type="text" placeholder="Enter Order" value={this.state.order} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Source</label>
              <br />
              <br />
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-volume-up" aria-hidden="true"></i></div>
                <input name="source" type="file" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="name">Artwork</label>
              <br />
              <br />
              <div className="input-group">
                <div className="input-group-addon"><i className="fa fa-file-image" aria-hidden="true"></i></div>
                <input name="artwork" type="file" onChange={this.handleInputChange} />
              </div>

              <button type="submit" value="Submit" className="btn btn-default">Upload</button>
            </div>
          </form>
        </div>
        </div>
    );
  }
}

export default DashboardContainer;
