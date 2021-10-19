import React, { Component } from 'react';
import Navbar from './Navbar'
import test from '../Images/Secureway.png';
import './App.css';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="hero">
          <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>EtherCloud</b></h1>
          <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}><b>A Blockchain Based Cloud Storage Platform</b></h5>
          <br />
          <a class="button button2" href="/App"><b>Get Started </b><i class="arrow right"></i></a>

        </div>

        <Fade right>
          <div className="card mb-3 bg-dark" style={{width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
                <img src={test} width="250" height="300" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ fontFamily: "Arial" }}>
                  <h1><b>A Project Named BLAH</b></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial" }}>
                  <p>Blah blah blah blah blah</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
         
        <Fade left>
          <div className="card mb-3 bg-dark" style={{left:'23.5%', width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:10, marginRight:20, marginBottom:10 }}>
                <img src={test} width="250" height="300" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ fontFamily: "Arial" }}>
                  <h1><b>A Project Named BLAH</b></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial" }}>
                  <p>Blah blah blah blah blah</p>
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