import React, { Component } from "react";
import Navigation from "../components/Navigation";
import '../css/DashboardContainer.css'

class DashboardContainer extends Component {
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
      </div>
    );
  }
}

export default DashboardContainer;
