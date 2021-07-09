import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import { Form, Button, Grid } from 'semantic-ui-react'

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
    <>
    <div className="ui left floated">
    <Grid textAlign='center' style={{ height: '20vh' }} verticalAlign='middle' >
       <Grid.Column style={{ maxWidth: 450 }}>
       <div className="row">
    <Form onSubmit={onSubmit} className="ui left icon input">
      <input type='text' placeholder='Add todo...' required value={value} onChange={(e) => setValue(e.target.value)}></input> 
      <Button positive type='submit'>Submit</Button>
      <i className="tasks icon"></i>
      </Form>
      </div>
      </Grid.Column>
      </Grid>
      </div>
      </>
  )
}
