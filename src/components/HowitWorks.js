import React, { Component } from 'react';
import db from '../Images/blockchainDatabase.gif';
import bg1 from '../Images/HIW1.png';
import bg2 from '../Images/HIW2.png';
import bg3 from '../Images/HIW3.gif';
import bg4 from '../Images/HIW4.gif';
import bg5 from '../Images/HIW5.gif';
import bg6 from '../Images/HIW6.png';
import bg7 from '../Images/HIW7.gif';
import bg8 from '../Images/HIW8.png';
import bg9 from '../Images/HIW9.png';
import bg10 from '../Images/HIW10.png';
import bg11 from '../Images/HIW11.png';
import bg12 from '../Images/HIW12.png';
import './App.css';

class HowitWorks extends Component {
  render() {
    return (
      <div>
        {/* <h1>How it Works Page</h1> */}
        <div style={{ alignItems:"center" }}>
          <img src={db} width="100%" height="75%" alt="" />
        </div>

        <img src={bg1} width="100%" height="100%" alt="" />
        <img src={bg2} width="100%" height="100%" alt="" />
        <img src={bg3} width="100%" height="100%" alt="" />
        <img src={bg4} width="100%" height="100%" alt="" />
        <img src={bg5} width="100%" height="100%" alt="" />
        <img src={bg6} width="100%" height="100%" alt="" />
        <img src={bg7} width="100%" height="100%" alt="" />
        <img src={bg8} width="100%" height="100%" alt="" />
        <img src={bg9} width="100%" height="100%" alt="" />
        <img src={bg10} width="100%" height="100%" alt="" />
        <img src={bg11} width="100%" height="100%" alt="" />
        <img src={bg12} width="100%" height="100%" alt="" />
        

        <div class="footerc">
					<div class="container-row">
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

export default HowitWorks;