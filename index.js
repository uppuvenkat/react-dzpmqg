import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Venkat'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div className = 'main' >
            <div className = 'button'>
              <table>
                <tr><td></td><td><button>T</button></td><td></td></tr>
                <tr><td><button>L</button></td><td></td><td><button>R</button></td></tr>
                <tr><td></td><td><button>D</button></td><td></td></tr>

              </table>
            </div>
            <div className = 'gridDisp'>
                 <table>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>

              </table>
            </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
