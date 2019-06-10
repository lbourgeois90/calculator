import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    value_one: '',
    value_two: '',
    operator: '',
    calc_total: '',
    toggle_decimal_one: false,
    toggle_decimal_two: false,
  }

  inputValue = (event) => {
    console.log(event.target.value);
    if(this.state.value_one !=='' && this.state.operator !=='' && this.state.value_two !==''  && this.state.toggle_decimal_two !==false){
      console.log('in else if decimal two');
      this.setState({
        value_two: (this.state.value_two +'.'+ event.target.value)
      })
    }
    else if(this.state.value_one !=='' && this.state.operator !==''){
      this.setState({
        value_two: event.target.value,
      })
    }
    else if (this.state.value_one !=='' && this.state.toggle_decimal_one !== false){
      this.setState({
        value_one: (this.state.value_one +'.'+ event.target.value)
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
      toggle_decimal_one: false,
      toggle_decimal_two: false,
    })
  }

  calculate = (event) => {
    this.props.dispatch({type: 'POST_CALCULATIONS', payload: this.state})
    // if(this.state.operator === '+'){
    //   this.setState({
    //     calc_total: (Number(this.state.value_one) + Number(this.state.value_two))
    //   })
    //   if(this.state.calc_total){
    //     this.props.dispatch({type: 'POST_CALCULATIONS', payload: this.state})
    //   }
    // }
    // else if(this.state.operator === '-'){
    //   this.setState({
    //     calc_total: (Number(this.state.value_one) - Number(this.state.value_two))
    //   })
    //   this.props.dispatch({type: 'POST_CALCULATIONS', payload: this.state })
    // }
    // else if(this.state.operator === '*'){
    //   this.setState({
    //     calc_total: (Number(this.state.value_one) * Number(this.state.value_two))
    //   })
    //   this.props.dispatch({type: 'POST_CALCULATIONS', payload: this.state })
    // }
    // else if(this.state.operator === '/'){
    //   this.setState({
    //     calc_total: (Number(this.state.value_one) / Number(this.state.value_two))
    //   })
    //   this.props.dispatch({type: 'POST_CALCULATIONS', payload: this.state })
    // }
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

  toggleDecimal = () => {
    if(this.state.toggle_decimal_one !== false){
      this.setState({
        toggle_decimal_two: true,
      })
    }
    else{
      this.setState({
        toggle_decimal_one: true,
      })
    }
  }
  
  render() {
    console.log('value one is:', this.state.value_one, 'value two is:', this.state.value_two, 'total is:', this.state.calc_total)
    console.log('decimal toggle  one is:', this.state.toggle_decimal_one, 'decimal toggle  two is:', this.state.toggle_decimal_two)
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
            <button onClick={this.toggleDecimal}>.</button>
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

export default connect()(App);
