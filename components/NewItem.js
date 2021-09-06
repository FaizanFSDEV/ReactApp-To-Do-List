import React, { Component } from 'react'

class NewItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       text: ''
    }

    this.updateText = this.updateText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateText(event){
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(preventrefresh){
    preventrefresh.preventDefault()
    if (this.state.text === ""){
      return
    }
    this.props.addItem(this.state.text)
    this.setState({text:""})
  }
  
  render() {
    return (
      <form className='input-group'>

        <input
                className='form-control'
                value={this.state.text}
                onChange={this.updateText}
                type="text"/>

        <span className='input-group-btn'>

            <input
                className='btn btn-primary'
                type="submit"
                value="Add Item"
                onClick={this.handleSubmit}
            />
        </span>
        
      </form>
    )
  }
}

export default NewItem
