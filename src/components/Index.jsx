import React, { useEffect } from 'react'
import Todos from './Todos'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../redux/todoSlice'
import { Grid } from 'semantic-ui-react'

export default function Index () {
  const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch])

  return (
    <Grid className="ui centered list">
    <div className="item">
      {todos.map((todo) => (
				<Todos id={todo.id} title={todo.title} completed={todo.completed} />
			))}
   </div>
    </Grid>
  )
}
