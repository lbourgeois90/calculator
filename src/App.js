import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    value_one: '',
    value_two: '',
    operator: '',
    calc_total: '',
  }

  inputValue= (event) => {
    console.log(event.target.value);
  }
  
  render() {
    return (
      <div className="App">
        <div className="calculator-wrapper">
        <div className='calc-row'>
            <input></input>
          </div>
          <div className='calc-row'>
            <button value={7} onClick={this.inputValue}>7</button>
            <button value={8} onClick={this.inputValue}>8</button>
            <button value={9} onClick={this.inputValue}>9</button>
            <button>/</button> 
          </div>
          <div className='calc-row'>
            <button value={4} onClick={this.inputValue}>4</button>
            <button value={5} onClick={this.inputValue}>5</button>
            <button value={6} onClick={this.inputValue}>6</button>
            <button>*</button> 
          </div>
          <div className='calc-row'>
            <button value={1} onClick={this.inputValue}>1</button>
            <button value={2} onClick={this.inputValue}>2</button>
            <button value={3} onClick={this.inputValue}>3</button>
            <button>+</button> 
          </div>
          <div className='calc-row'>
            <button>.</button>
            <button value={0} onClick={this.inputValue}>0</button>
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
