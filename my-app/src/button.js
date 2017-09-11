import React from 'react'
import {Component, button} from 'react'

export default class Buttons extends Component{
  constructor(props){
    super(props)
    this.changeButton = this.changeButton.bind(this)
  }
  changeButton(){

  }
render(){
  let number = 0
  let newNumber = number + 1
  return(
    <div>
    <button>{this.props.name }</button>
    </div>
  )
}

}
