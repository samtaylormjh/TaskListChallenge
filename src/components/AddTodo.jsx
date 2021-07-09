import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

export default function AddTodo () {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({
      title: value
    }))
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Add todo...' required value={value} onChange={(e) => setValue(e.target.value)} /> 
      <button positive type='submit'>Submit</button>
    </form>
  )
}
