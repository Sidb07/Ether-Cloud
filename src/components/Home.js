import React, { Component } from 'react';
import box from '../box.png';
import './Home.css';

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
                style={{fontFamily: "Arial"}}
                >
                <img src={box} width="30" height="30" className="align-top" alt="" />
                Group 13 Project : EtherCloud - Blockchain Based Cloud Storage
                </a>
            </nav>

            <div class="hero">
                <h1 class="hero-title"><b>EtherCloud</b></h1>
                <h5 class="hero-slogan"><b>A Blockchain Based Cloud Storage Platform</b></h5>
            </div>
            
            

          </div>
        );
    }
}

export default Home;