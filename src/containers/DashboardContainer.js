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
      order: '',
      source: '',
      artwork: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
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
        console.log(event.target.files)
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
    alert('A name was submitted: ' + this.state.name);
    uploadSong(this.state.name, this.state.artist, this.state.album, this.state.order, this.state.duration, this.state.source, this.state.artwork);
    event.preventDefault();
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
          <label>
            Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Artist:
          <input name="artist" type="text" value={this.state.artist} onChange={this.handleInputChange} />
          </label>
          <label>
            Album:
          <input name="album" type="text" value={this.state.album} onChange={this.handleInputChange} />
          </label>
          <label>
            Order:
          <input name="order" type="text" value={this.state.order} onChange={this.handleInputChange} />
          </label>
          <label>
            Source:
          <input name="source" type="file" ref={this.fileInput} onChange={this.handleInputChange} />
          </label>
          <label>
            Artwork:
          <input name="artwork" type="file" ref={this.fileInput} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DashboardContainer;
