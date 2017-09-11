import React, { Component, button } from 'react';
import {connect} from 'react-redux'
import * as addActions from './actions/addActions'
import Buttons from './button'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0, buttons: []}

    this.testCount = this.testCount.bind(this)
    this.testCountDown = this.testCountDown.bind(this)

  }

  testCount(){
    this.props.dispatch(addActions.addItem(this.state.count))
    this.setState((prevState) => {
      return{ count: prevState.count + 1}
  })
      var numberButton = this.state.buttons
      numberButton.push(<Buttons name={this.state.count} />)
      this.setState({buttons: numberButton})
      console.log(this.state.buttons)


  }

testCountDown(){
  this.props.dispatch(addActions.removeItem(this.state.count))
  this.setState((prevState) => {
    return{ count: prevState.count - 1}
})


}
  render() {
    return (
      <div className="body">
    <button onClick={this.testCount}>Click me</button>

    <h1>{this.state.count}</h1>
    <button onClick={this.testCountDown}>Click me</button>
    <div>{this.state.buttons}</div>
      </div>
    );
  }
}
function mapStatetoProps(state, ownProps){
  return {
    count: state.count
  }
}

export default connect (mapStatetoProps) (App);
