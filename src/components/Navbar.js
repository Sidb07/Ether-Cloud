import React, { Component } from 'react';
import Identicon from 'identicon.js';
import './App.css';

class Navbar extends Component {
  render() {
    const isAccount = this.props.account;
    return (
        <div style={{ top: "53px" }}>
          {isAccount ?
            <ul style={{ height: "53px", listStyle:"none" }}>
              <li>
                <small id="account">
                  <a target="_blank"
                    alt=""
                    className="text-white"
                    rel="noopener noreferrer"
                    href={"https://etherscan.io/address/" + this.props.account}>
                    {this.props.account.substring(0, 6)}...{this.props.account.substring(38, 42)}
                  </a>
                </small>
              </li>
              <li>
                  <img
                      alt=""
                      className='ml-2'
                      width='35'
                      height='40'
                      style={{paddingTop: "10px"}}
                      src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                  />
              </li>
            </ul> : <div></div>
          }
        </div>
    );
  }
}

export default Navbar;