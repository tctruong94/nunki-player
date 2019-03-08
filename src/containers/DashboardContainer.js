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
      order: 1,
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
  }



  render() {

    return (
      <div>
        <Navigation>
        </Navigation>
        <div>
          <div class="jumbotron">
            <h2 class="welcome">Welcome to ((username))'s Nunki player!</h2>
            <h2 class="welcome">Ninki is music streaming web application</h2>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>
              Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>
          <div class="form-group">
            <label>
              Artist:
            <input name="artist" type="text" value={this.state.artist} onChange={this.handleInputChange} />
            </label>
          </div>
          <div class="form-group">
            <label>
              Album:
            <input name="album" type="text" value={this.state.album} onChange={this.handleInputChange} />
            </label>
          </div>
          <div class="form-group">
            <label>
              Order:
            <input name="order" type="text" value={this.state.order} onChange={this.handleInputChange} />
            </label>
          </div>
          <div class="form-group">
            <label>
              Source:
            <input name="source" type="file" onChange={this.handleInputChange} />
            </label>
          </div>
          <div class="form-group">
            <label>
              Artwork:
            <input name="artwork" type="file" onChange={this.handleInputChange} />
            </label>
            <button type="submit" value="Submit" class="btn btn-default">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DashboardContainer;
