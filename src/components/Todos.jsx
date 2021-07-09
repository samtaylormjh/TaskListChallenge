import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'
import { Button } from 'semantic-ui-react'

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

	return (
			<div className="ui clearing segment">
		<li>
				<span>
          <div className="ui column left floated">
            <div className="ui checkbox" >
					<input type='checkbox' checked={completed} onChange={onComplete}></input>
          <label></label>
            </div>
          </div>
          <div className="ui left floated">
					{title}
          </div>
				</span>
        <div className="ui column right floated">
				<Button className="ui small">Edit</Button>
        <Button className="ui red small" onClick={onDelete}>Delete</Button>
        </div>
		</li>
			</div>
	)
}
