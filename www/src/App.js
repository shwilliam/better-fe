import React from 'react'
import {ApolloContextProvider} from './context'
import {ProblemList, Problem, NewProblemForm} from './components'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

export const App = () => (
  <ApolloContextProvider>
    <Router>
      <header>
        <h1>Better FE</h1>
        <nav>
          <ul>
            <li>
              <Link to="/problems">Problems</Link>
            </li>
            <li>
              <Link to="/new-problem">Submit problem</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Switch>
          <Route path="/new-problem">
            <NewProblemForm />
          </Route>
          <Route path="/problems/:id">
            <Problem />
          </Route>
          <Route path="/problems">
            <ProblemList />
          </Route>
          <Route path="/">
            <Redirect to="/problems" />
          </Route>
        </Switch>
      </main>
    </Router>
  </ApolloContextProvider>
)
