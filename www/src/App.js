import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import {ApolloContextProvider} from './context'
import {
  Header,
  NewProblemForm,
  Problem,
  ProblemList,
  ProblemSolve,
} from './components'
import {Content} from 'carbon-components-react'
import 'carbon-components/css/carbon-components.min.css'
import './global.css'

export const App = () => (
  <ApolloContextProvider>
    <Router>
      <Header />

      <Content>
        <Switch>
          <Route path="/new-problem">
            <NewProblemForm />
          </Route>
          <Route path="/problems/:id/solve">
            <ProblemSolve />
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
      </Content>
    </Router>
  </ApolloContextProvider>
)
