import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="calculator-wrapper">
        <div className='calc-row'>
            <input></input>
          </div>
          <div className='calc-row'>
            <button value={7} onClick={this.inputValue}>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button> 
          </div>
          <div className='calc-row'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button> 
          </div>
          <div className='calc-row'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button> 
          </div>
          <div className='calc-row'>
            <button>.</button>
            <button>0</button>
            <button>=</button>
            <button>-</button> 
          </div>
          <div className='calc-row'>
            <button>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
