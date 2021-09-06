import React, { Component } from 'react'

class ToDo extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <li className='list-group-item'>

        {this.props.i}
        <button
        className='badge bg-danger'
        onClick={()=>{
            this.props.deleteItem(this.props.todoId)
        }}> X </button>
        
      </li>
    )
  }
}

export default ToDo
