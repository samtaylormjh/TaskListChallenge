import React, { useState } from 'react'

export default function AddTodo () {
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Edit todo...' value={value} onChange={(e) => setValue(e.target.value)} /> 
      <button positive type='submit'>Submit</button>
    </form>
  )
}
