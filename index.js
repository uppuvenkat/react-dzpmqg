import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ButtonComp from './buttonComp'
import GridDisp from './gridDisp'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Venkat',
      row:3,
      col:3,
      i:0,
      j:0,
      arr: []
    };
  }
  rowChange = (e) =>{
    // console.log('row',e.target.value)
    this.setState({row:e.target.value})
  }
   columnChange = (e) =>{
    this.setState({col:e.target.value})
  }
  formMatrix = ()=>{
    let arr = []
    for(let i=0; i<this.state.row;i++){
      arr[i] = []
      for(let j=0; j<this.state.col;j++){
        if( i==0 && j==0) 
         arr[i][j] = 'X' 
         else
         arr[i][j] = 0;
      }
    }
    this.setState({arr:arr})
  }

  modifyArr = ()=>{
    console.log('modifyArr..', this.state.i,this.state.j,this.state.arr)
    let arr = [];
     for(let i=0; i<this.state.row;i++){
      arr[i] = []
      for(let j=0; j<this.state.col;j++){
        if( i==this.state.i && j==this.state.j) 
         arr[i][j] = 'X' 
         else
         arr[i][j] = 0;
      }
    }
    this.setState({arr:arr})
  }

  onRight = ()=>{
    if(this.state.j<this.state.row-1){
      this.setState({j:this.state.j+1})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }else{
      this.setState({j:0, i:0})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }
  }

  onTop = ()=>{
    if( this.state.i>0){
      this.setState({i:this.state.i-1})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }else{
      this.setState({j:0, i:0})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }
  }
  onDown = ()=>{
    if( this.state.i<this.state.col-1){
      this.setState({i:this.state.i+1})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }else{
      this.setState({j:0, i:0})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }
  }
  onLeft = ()=>{
     if(this.state.j>0){
      this.setState({j:this.state.j-1})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }else{
      this.setState({i:0, j:2})
      var self = this;
      setTimeout(function(){self.modifyArr()},0)
    }
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Enter rows and columns of the grid</p>
        <div className = 'sample'>
          Row &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<input type = 'text' value = {this.state.row} onChange = {this.rowChange}/><br/><br/>
          Column :&nbsp;<input type = 'text' value = {this.state.col} onChange = {this.columnChange}/><br/><br/>
          <button onClick = {this.formMatrix}>SubmitR_C</button>
        </div>
        <br/>
        <div className = 'main' >
              <ButtonComp 
                onRight = {this.onRight}
                onLeft = {this.onLeft}
                onTop = {this.onTop}
                onDown = {this.onDown}
              />
            <GridDisp arr = {this.state.arr}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
