import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import profile1 from '../Images/profile1.png';
import profile2 from '../Images/profile2.jpeg';
import profile3 from '../Images/profile3.gif';
import './App.css';

class About extends Component {
  render() {
    return (
      <div>

        <div class="aboutProj">
          <h5 class="aboutProj-slogan" style={{ fontFamily: "Arial" }}><b>Group ID 13</b></h5>
          <h1 class="aboutProj-title" style={{ fontFamily: "Arial" }}><b>EtherCloud</b></h1>
          <h5 class="aboutProj-slogan" style={{ fontFamily: "Arial" }}><b>A Blockchain Based Cloud Storage Platform</b></h5>

          <br />
          {/* <a class="button button2" href="/App"><b>Get Started </b><i class="arrow right"></i></a> */}

        </div>

        <Fade right>
          <div className="card mb-3" style={{width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
                <img src={profile1} width="200" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:10, fontFamily: "Arial" }}>
                  <h1><b>Yash Dantale</b><h6> <b>BE Electronics and Telecommunications</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: 42023 <br/>
                    PRN: 71909XXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
         
        <Fade left>
          <div className="card mb-3" style={{left:'23.5%', width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:10, marginRight:20, marginBottom:10 }}>
                <img src={profile2} width="200" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial" }}>
                  <h1><b>Siddharth Bawane</b><h6><b>BE Electronics and Telecommunications</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: 42009 <br/>
                    PRN: 71909XXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="card mb-3" style={{width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
                <img src={profile3} width="200" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:10, fontFamily: "Arial" }}>
                  <h1><b>Rutvij Hadap</b><h6><b>BE Electronics and Telecommunications</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: 42043 <br/>
                    PRN: 71909XXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;