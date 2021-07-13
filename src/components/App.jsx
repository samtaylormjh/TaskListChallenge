import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import EditTodo from './EditTodo'
import Index from './Index'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Index} />
          <Route exact path={'/Edittodo'} component={EditTodo} />
        </Switch>
      </Router>
    </>
  )
}

export default App