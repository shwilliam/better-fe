import React from 'react'
import {ApolloContextProvider} from './context'
import {
  ProblemList,
  Problem,
  NewSolutionForm,
  NewProblemForm,
} from './components'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

export const App = () => (
  <ApolloContextProvider>
    <h1>Better FE</h1>
    <Router>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/problems">Problems</Link>
        </li>
        <li>
          <Link to="/new-problem">Submit problem</Link>
        </li>
      </nav>
      <Switch>
        <Route path="/new-problem">
          <NewProblemForm />
        </Route>
        <Route path="/problems/:id">
          <NewSolutionForm />
          <Problem />
        </Route>
        <Route path="/problems">
          <ProblemList />
        </Route>
      </Switch>
    </Router>
  </ApolloContextProvider>
)
