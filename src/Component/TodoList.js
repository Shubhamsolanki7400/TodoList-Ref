import React, { useState } from 'react'
import { myTodo } from './context'
import TodoRef from './TodoRef'

const TodoList = () => {
  const [todo, setTodo] = useState([])
  return (
    <>
      <div className='container' style={{ textAlign: 'center' }}>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3 className='animate-charcter'>TodoList</h3>
          </div>
        </div>
      </div>

      <myTodo.Provider value={{ todo, setTodo }}>
        <TodoRef />
      </myTodo.Provider>
    </>
  )
}

export default TodoList
