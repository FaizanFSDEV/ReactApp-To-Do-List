import React, { Component } from 'react'
import ToDo from './ToDo'
import NewItem from './NewItem'


class ToDoApp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list: [
         'Get Milk',
         'Finish Homework',
         'Code a website'
       ]
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  
  addItem(item){
      let newList = this.state.list
      newList.push(item)
      this.setState({
        list: newList
      })
  }

  deleteItem(index){
      let newList = this.state.list
      newList.splice(index,1)
      this.setState({
        list: newList
      })
  }



  render() {
    return (
      <div>

        <h3 className='text-center'>Todo List App</h3>

            <NewItem addItem={this.addItem}/>
            
            <br/>

            <ul className='list-group'>

                {this.state.list.map((item,index)=>{
                  return <ToDo
                            deleteItem={this.deleteItem}
                            todoId={index}
                            key={index}
                            i={item}/>
                })}
            </ul>

        
      </div>
    )
  }
}

export default ToDoApp
