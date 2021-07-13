import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Todos({ id, title, completed }) {
  const dispatch = useDispatch()

  const onComplete = () => {
    dispatch(
      toggleComplete({ id: id, completed: !completed })
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
          <Link to='/Edittodo' className="ui button small">Edit</Link>
          <Button className="ui red small" onClick={onDelete}>Delete</Button>
        </div>
      </li>
    </div>
  )
}
