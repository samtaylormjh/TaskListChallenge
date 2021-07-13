import React, { useState } from 'react'
import { editTodo } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { Grid, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function EditTodo() {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  // The idea I had was to take a selected todo and be able to change it here but I couldn't figure out how to do it after going back to the index component.
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(editTodo({
      title: value
    }))
  }

  return (
    <>
      <div className="ui left floated">
        <Grid textAlign='center' style={{ height: '20vh' }} verticalAlign='middle' >
          <Grid.Column style={{ maxWidth: 450 }}>
            <div className="row">
              <Form onSubmit={onSubmit} className="ui left icon input">
                <input type='text' placeholder='Edit todo...' required value={value} onChange={(e) => setValue(e.target.value)}></input>
                <i className="tasks icon"></i>
              </Form>
              <Link to={'/'} className='ui button green small'>Home</Link>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}