import React, { useEffect } from 'react'
import Todos from './Todos'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../redux/todoSlice'

export default function Index () {
  const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch])

  return (
    <>
    <ul>
      {todos.map((todo) => (
				<Todos id={todo.id} title={todo.title} completed={todo.completed} />
			))}
    </ul>
    </>
  )
}
