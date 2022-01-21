import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// import logo from '../Images/EC.png';
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
              <a class="buttonHome button2"  style={{ fontFamily: "Arial", marginLeft: "350px", textDecoration: "none", color: "white"}} href="/App"><b>Get Started </b><i class="arrow right"></i></a>                 
            </div>
          </div>
        </div>

        <div class="hero3" >
            <div class="intro" style={{flex:1}}>
              <Fade left>
                <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>Why Blockchain?</b></h1>
                <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}>
                  <ul>
                    <li>Blockchain is a reliable technology for providing security and privacy for constrained IoT devices.</li> <br/> <p>&nbsp;</p>
                    <li>Blockchain focuses on the protection of data themselves, providing immutability and authentication.</li> <br/> <p>&nbsp;</p>
                    <li>In this project, the complexity of storing, managing, and moving data is converted to a few simple and familiar commands.</li> <br/> <p>&nbsp;</p>
                    <li>Files are encrypted, split into pieces, and stored on geographically diverse nodes.</li> <p>&nbsp;</p>
                  </ul>  
                </h5>
              </Fade>
            </div>
        </div>
        
        <div class="hero4" >  
          <div class="objective" style={{flex:1}}>
            <Fade right>
              <h1 class="hero-title" style={{ fontFamily: "Arial" }}><b>Objectives</b></h1>
              <h5 class="hero-slogan" style={{ fontFamily: "Arial" }}>
                <ul>
                  <li>To enable users to interact and exchange files directly in a peer-to-peer fashion.</li> <br/> <p>&nbsp;</p>
                  <li>To remove the role of centralized platforms as middlemen that may tamper with user’s data.</li> <br/> <p>&nbsp;</p>  
                  <li>To introduce modern data encryption and authentication in IoT services.</li> <br/> <p>&nbsp;</p>                    
                  <li>To provide security to IoT devices.</li> <br/> <p>&nbsp;</p>
                  <li>To help normalize the use of secure IoT devices in day to day applications.</li> <br/> <p>&nbsp;</p>
                  <li>To make data storage and retrieval expedite.</li> <br/> <p>&nbsp;</p>
                </ul>  
              </h5>
            </Fade>
          </div>
        </div>

        <div class="footerc">
					<div class="container-row">
            {/* <div class="hero-image" style={{ left:0, marginTop:20, marginBottom:10 }}>
              <img src={logo} width="200" height="100" alt="" />
            </div> */}
            <div class="A3L_Slogan">
              <div class="slogan_title" style={{ marginTop:10, fontFamily: "Arial", color:"white" }}>
                <h1><b>BE Final Year Project</b><h6> <b>Group ID 13</b></h6></h1>
              </div>
              <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20, color:"white" }}>
                <p>
                  Yash Dantale<br/>
                  Rutvij Hadap<br/>
                  Siddharth Bawane<br/>
                  PES Modern College Of Engineering
                </p>
              </div>
            </div>
          </div>
				</div> 
        
      </div>
    );
  }
}

export default Home;