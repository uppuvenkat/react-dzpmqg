import React, { Component } from 'react';
import { render } from 'react-dom';

class GridDisp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Venkat',
    };
  }
    render() {
    return (
      <div>
       <div className = 'gridDisp'>
                 <table>
                 {this.props.arr.map((el,id)=>
                  <tr key = {id}>
                    {el.map((e,idx)=> 
                    <td key = {idx}>{e}</td>
                    )}
                  </tr>
                 )}
                 </table>
            </div>
      </div>
      )
    }
}

export default GridDisp;