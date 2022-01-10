import React, { Component } from 'react';
import './App.css';


class Home extends Component {
  render() {
    return (
      <div>
        <div class="hero">
          <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>EtherCloud</b></h1>
          <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}><b>A Blockchain Based Cloud Storage Platform</b></h5>
          <br />
          <a class="button button2" href="/App"><b>Get Started </b><i class="arrow right"></i></a>

        </div>
      </div>
    );
  }
}

export default Home;