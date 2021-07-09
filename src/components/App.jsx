import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import AddTodo from './AddTodo'
import Index from './Index'

const App = () => {
  return (
    <>
    <AddTodo/>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Index}/>
        </Switch>
      </Router>
    </>
  )
}

export default App