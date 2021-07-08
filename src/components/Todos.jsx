import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete } from '../redux/todoSlice'

export default function Todos ({ id, title, completed }) {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(
      toggleComplete({id: id, completed: !completed})
      )
  }

	return (
		<li>
			<div>
				<span>
					<input type='checkbox' checked={completed} onChange={onClick}></input>
					{title}
				</span>
				<button>Edit</button>
        <button>Delete</button>
			</div>
		</li>
	)
}
