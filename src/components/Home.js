import React, { Component } from 'react';
import box from '../box.png';
import './Home.css';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/Sidb07/Ether-Cloud"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Arial" }}
          >
            <img src={box} width="30" height="30" className="align-top" alt="" />
            Group 13 Project : EtherCloud - Blockchain Based Cloud Storage
          </a>
        </nav>

        <div class="hero">
          <h1 class="hero-title"><b>EtherCloud</b></h1>
          <h5 class="hero-slogan"><b>A Blockchain Based Cloud Storage Platform</b></h5>
          <br />
          <a class="button button2" href="/App"><b>Get Started </b><i class="arrow right"></i></a>

        </div>

        <br/>

        <Fade right>
          <div className="card mb-3 bg-dark" style={{ position: 'fixed', left: 10, width:'auto', minWidth:'750px', minHeight:'300px', color: 'white', boxShadow: '5px 5px 10px rgb(80, 190, 202)' }}>
            <div class="container-row">
              <div class="hero-image">
                <img src={box} width="75" height="100" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title">
                  <h1><b>A Project Named BLAH</b></h1>
                </div>
                <div class="slogan_catchphrase">
                  Blah blah blah blah blah
                </div>
              </div>
            </div>
          </div>
        </Fade>

      </div>
    );
  }
}

export default Home;