import React from "react";
import { postPlaylist } from '../actions';

class PostNewPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    postPlaylist(this.state.value).then(() => {
      window.location.reload(false);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Add a playlist 
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="new playlist name"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
      

export default PostNewPlaylist;
