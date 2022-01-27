import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import bg1 from '../Images/Aboutus.png';
import profile1 from '../Images/profile1.jpeg';
import profile2 from '../Images/profile2.jpg';
import profile3 from '../Images/profile3.jpeg';
import './App.css';

class About extends Component {
  render() {
    return (
      <div>

        <img src={bg1} width="100%" height="900px" alt="" />

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
                    PRN: 71909229K <br/>
                    <a href="https://www.linkedin.com/in/yash-dantale-7a0415179" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }} >Linkedin</a>
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
                <img src={profile2} width="180" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial" }}>
                  <h1><b>Siddharth Bawane</b><h6><b>BE Electronics and Telecommunications</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: 42009 <br/>
                    PRN: 71909186B <br/>
                    <a href="https://www.linkedin.com/in/siddharthbawane/" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }} >Linkedin</a>
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
                    PRN: 71909593L <br/>
                    <a href="https://www.linkedin.com/in/rutvijhadap/" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }} >Linkedin</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div class="footerc">
					<div class="container-row">
            <div class="A3L_Slogan">
              <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial", color:"white" }}>
                <h1><b>EtherCloud</b><h6> BE Final Year Project 2021-22 </h6></h1>
              </div>
              <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20, color:"white" }}>
                <p>
                  <h6 style={{ fontWeight: "bold" }}>
                    <a href='https://github.com/Sidb07/Ether-Cloud' style={{ fontWeight: "bold", textDecoration: "none", color: "white" }}>GitHub  </a>
                    |  Group ID 13
                  </h6>
                </p>
              </div>
            </div>
          </div>
				</div> 

      </div>
    );
  }
}

export default About;