import React, { Component } from 'react';
import { render } from 'react-dom';

class ButtonComp extends Component {
  constructor(props) {
    super(props);
  }
    render() {
    return (
      <div>
      <div className = 'button'>
              <table>
                <tr><td></td><td><button onClick = {this.props.onTop}>T</button></td><td></td></tr>
                <tr><td><button onClick = {this.props.onLeft}>L</button></td><td></td><td><button onClick = {this.props.onRight}>R</button></td></tr>
                <tr><td></td><td><button onClick = {this.props.onDown}>D</button></td><td></td></tr>
              </table>
            </div>
      </div>
      )
    }
}

export default ButtonComp;