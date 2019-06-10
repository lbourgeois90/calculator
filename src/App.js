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

  inputValue = (event) => {
    console.log(event.target.value);
    if(this.state.value_one !==''){
      this.setState({
        value_two: event.target.value,
      })
    }
    else{
      this.setState({
        value_one: event.target.value,
      })
    }
  }

  operatorValue = (event) =>{
    this.setState({
      operator: event.target.value,
    })
  }

  clearValue = (event) => {
    this.setState({
      value_one: '',
      value_two: '',
      operator: '',
      calc_total: '',
    })
  }

  calculate = (event) => {
    if(this.state.operator === '+'){
      this.setState({
        calc_total: (Number(this.state.value_one) + Number(this.state.value_two))
      })
    }
  }

  displayInput = () => {
    if(this.state.calc_total !== ''){
      return (
        <div>{this.state.calc_total}</div>
      )
    }
    else{
      return(
        <div>{this.state.value_one} {this.state.operator} {this.state.value_two}</div>
      )
    }
  }
  
  render() {
    console.log('value one is:', this.state.value_one, 'value two is:', this.state.value_two, 'total is:', this.state.calc_total)
    return (
      <div className="App">
        <div className="calculator-wrapper">
          <div className='calc-row'>
            {this.displayInput()}
          </div>
          <div className='calc-row'>
            <button value={7} onClick={this.inputValue}>7</button>
            <button value={8} onClick={this.inputValue}>8</button>
            <button value={9} onClick={this.inputValue}>9</button>
            <button value={'/'} onClick={this.operatorValue}>/</button> 
          </div>
          <div className='calc-row'>
            <button value={4} onClick={this.inputValue}>4</button>
            <button value={5} onClick={this.inputValue}>5</button>
            <button value={6} onClick={this.inputValue}>6</button>
            <button value={'*'} onClick={this.operatorValue}>*</button> 
          </div>
          <div className='calc-row'>
            <button value={1} onClick={this.inputValue}>1</button>
            <button value={2} onClick={this.inputValue}>2</button>
            <button value={3} onClick={this.inputValue}>3</button>
            <button value={'+'} onClick={this.operatorValue}>+</button> 
          </div>
          <div className='calc-row'>
            <button>.</button>
            <button value={0} onClick={this.inputValue}>0</button>
            <button onClick={this.calculate}>=</button>
            <button value={'-'} onClick={this.operatorValue}>-</button> 
          </div>
          <div className='calc-row'>
            <button onClick={this.clearValue}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
