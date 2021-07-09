import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'

export default function Todos ({ id, title, completed }) {
  const dispatch = useDispatch()

  const onComplete = () => {
    dispatch(
      toggleComplete({id: id, completed: !completed})
      )
  }

  const onDelete = () => {
    dispatch(
      deleteTodo({ id: id })
    )
  }

  // const onEdit = () => {
  //   dispatch(
  //     editTodo({ id: id })
  //   )
  // }

	return (
		<li>
			<div>
				<span>
					<input type='checkbox' checked={completed} onChange={onComplete}></input>
					{title}
				</span>
				<button>Edit</button>
        <button onClick={onDelete}>Delete</button>
			</div>
		</li>
	)
}
