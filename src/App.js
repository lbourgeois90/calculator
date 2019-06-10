import React, {Component} from 'react';
import {connect} from 'react-redux';
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

  componentDidMount () {
    this.props.dispatch({type:'GET_CALCULATIONS'})
    let setIntervalGetCalculations = setInterval(this.getCalculations, 5000);
    this.setState({ setIntervalGetCalculations: setIntervalGetCalculations })
  }

  getCalculations = () =>{
    this.props.dispatch({type:'GET_CALCULATIONS'})
  }

  inputValue = (event) => {
    console.log(event.target.value);
    if(this.state.value_one !=='' && this.state.operator !=='' && this.state.value_two !==''  && this.state.toggle_decimal_two !==false){
      this.setState({
        value_two: (this.state.value_two +'.'+ event.target.value)
      })
    }
    else if (this.state.value_one !=='' && this.state.operator !== '' && this.state.value_two !== ''){
      console.log('in else if value two');
      this.setState({
        value_two: (this.state.value_two + event.target.value)
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
    else if (this.state.value_one !=='' && this.state.operator === ''){
      this.setState({
        value_one: (this.state.value_one + event.target.value)
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

  calculate = (event) =>  {
    let result = '';
    if(this.state.operator === '+'){
      result= (Number(this.state.value_one) + Number(this.state.value_two))
      this.setState({
        calc_total: result,
      })
      this.props.dispatch({type: 'POST_CALCULATIONS', payload: {state: this.state, calculation: result }})
    }
    else if(this.state.operator === '-'){
      result= (Number(this.state.value_one) - Number(this.state.value_two))
      this.setState({
        calc_total: result
      })
      this.props.dispatch({type: 'POST_CALCULATIONS', payload: {state: this.state, calculation: result }})
    }
    else if(this.state.operator === '*'){
      result= (Number(this.state.value_one) * Number(this.state.value_two))
      this.setState({
        calc_total: result
      })
      this.props.dispatch({type: 'POST_CALCULATIONS', payload: {state: this.state, calculation: result }})
    }
    else if(this.state.operator === '/'){
      result= (Number(this.state.value_one) / Number(this.state.value_two))
      this.setState({
        calc_total: result
      })
      this.props.dispatch({type: 'POST_CALCULATIONS', payload: {state: this.state, calculation: result }})
    }
  }

  displayInput = () => {
    if(this.state.calc_total !== ''){
      return (
        <div>{this.state.calc_total}</div>
      )
    }
    else if(this.state.value_one !== ''){
      return(
        <div>{this.state.value_one} {this.state.operator} {this.state.value_two}</div>
      )
    }
    else{
      return(
        <div>0</div>
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
          <div className='input-row'>
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
          <div className='clear-row'>
            <button onClick={this.clearValue}>Clear</button>
          </div>
        </div>
        <div className='calculationhistory'>
          <h4>User Calculations</h4>
          <p>Shows last 10 user calculations</p>

          <table className='table'>
            <tbody>
              {this.props.reduxState.calculationsReducer.map( (calculations) => 
                <tr key={calculations.id} className='tableRow'>
                  <td className='tabletd'>{calculations.value_one} {calculations.operator} {calculations.value_two} = {calculations.calc_total}</td>
                </tr> 
              )}
            </tbody>
          </table>
         
        </div>
      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(App);
