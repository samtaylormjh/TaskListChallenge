import React, { useState } from 'react'

function AddTodo () {
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Add todo...' value={value} onChange={(e) => setValue(e.target.value)} /> 
      <button positive type='submit'>Submit</button>
    </form>
  )
}

export default AddTodo
