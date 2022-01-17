import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
// import profile1 from '../Images/profile1.png';
// import connect from '../Images/connect.gif';
import bg2 from '../Images/Homebg2.png';
import './App.css';

class Home extends Component {
  render() {
  
    return (
      <div>

        <div class="hero">
          <div class="container-row">
            <div class="hero2" style={{flex:1}}>
              <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>EtherCloud</b></h1>
              <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}><b>A Blockchain Based Cloud Storage Platform</b></h5>
              <br />
              <a class="buttonHome button2"  style={{ fontFamily: "Arial", marginLeft: "350px" }} href="/App"><b>Get Started </b><i class="arrow right"></i></a>                 
            </div>
            {/* <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
              <img src={connect} width="500" height="500" alt="" />
            </div> */}
          </div>
        </div>

        <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
          <img src={bg2} width="1920" height="1080" alt="" />
        </div>
        {/* <Fade right>
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
        </Fade> */}
      </div>
    );
  }
}

export default Home;