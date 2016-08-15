import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';


class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Travis' React Express Bootstrap Webpack Boilerplate</h1>
          <p>All the configuration taken care of for both development and production</p>
          <Link to="/About">
            <Button bsStyle="info" bsSize="large">Learn more</Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Welcome;
