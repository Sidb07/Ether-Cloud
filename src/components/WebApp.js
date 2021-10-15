import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App'
import Home from './Home'
import './App.css';


class WebApp extends Component {
    render() {
        return (
          <div>
            <Router>
                <nav class="navbar navbar-dark bg-dark">
                    <a
                        className="navbar-brand col-sm-3 col-md-2 mr-0"
                        href="https://github.com/Sidb07/Ether-Cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{fontFamily: "Arial"}}
                    >
                        <div>
                            <a class="button button2" href="/Home">Home</a>
                            <a class="button button2" href="/App">App</a>
                        </div>
                    </a>
                </nav>
                <Switch>
                    <Route exact path="/App" component={App} />
                    <Route exact path="/Home" component={Home} />
                </Switch>
            </Router>
          </div>
        );
    }
}

export default WebApp;