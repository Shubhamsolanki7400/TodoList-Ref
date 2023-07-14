import React, { useContext, useRef, useState } from 'react'
import { myTodo } from './context'

const TodoRef = () => {
  const { todo, setTodo } = useContext(myTodo)
  const [toggleSubmit, settoggleSubmit] = useState(true)
  const [editedItem, setEditedItem] = useState(null)
  const ref = useRef()
  console.log(todo)
  const HandleADD = () => {
    if (ref.current.value === '') {
      alert('plz Fill some Data')
      settoggleSubmit(true)
    } else {
      console.log(ref.current.value)
      setTodo([...todo, { text: ref.current.value }])
      console.log(todo)
      ref.current.value = ''
    }
  }
  const HandleDelete = (index) => {
    console.log(index, 'qhgd')
    const deleteItem = todo.filter((ele, del) => index !== del)
    setTodo(deleteItem)
  }

  const HandleUpdate = () => {
    if (ref.current.value === '') {
      alert('Please fill in some data')
      return
    }

    const updatedTodo = [...todo]
    updatedTodo[editedItem].text = ref.current.value
    console.log(editedItem, 'key')
    setTodo(updatedTodo)
    ref.current.value = ''
    setEditedItem(null)
    settoggleSubmit(true)
  }

  //  const handleEdit = (index) => {
  //     const newText = prompt('Enter the new text:');
  //     if (newText !== null) {
  //       console.log(newText)
  //       const updatedTodo = [...todo];
  //       updatedTodo[index].text = newText;
  //       setTodo(updatedTodo);
  //     }
  //   };

  const handleEdit = (list, index) => {
    ref.current.value = list.text
    setEditedItem(index)
    settoggleSubmit(false)
    ref.current.focus()
    console.log(ref.current.focus())
  }

  return (
    <div className='input'>
      <input type='text' ref={ref} />
      {toggleSubmit ? (
        <button className='glow-on-hover' type='button' onClick={HandleADD}>
          ADD TODO
        </button>
      ) : (
        <button className='glow-on-hover' type='button' onClick={() => HandleUpdate()}>
          Update Value
        </button>
      )}
      {todo?.map((list, index) => {
        return (
          <div key={index}>
            <div className='text'>
              {list.text}
              <button className='glow-on-hover' type='button' onClick={() => HandleDelete(index)}>
                Remove
              </button>
              <button className='glow-on-hover' type='button' onClick={() => handleEdit(list, index)}>
                Edit
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default TodoRef
