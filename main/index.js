import React from 'react'
import ReactDOM from 'react-dom'
import ToDoApp from '../components/ToDoApp'

function App () {
  return (
    <div className='container'>
      <ToDoApp></ToDoApp>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)