import React from 'react'
import Todos from './Todos'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Index () {
  const todos = useSelector((state) => state.todos)

  return (
    <ul>
      {todos.map((todo) => (
				<Todos id={todo.id} title={todo.title} completed={todo.completed} />
			))}
    </ul>
  )
}
