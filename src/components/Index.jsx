import React from 'react'
import { Link } from 'react-router-dom'

function Index () {
  
  return (
    <div>
      <li>placeholder todo</li>
      <Link to={'/Addtodo'}><button>Add Todo</button></Link>
      <Link to={'/Edittodo'}><button>Edit Todo</button></Link>
    </div>
  )
}

export default Index
