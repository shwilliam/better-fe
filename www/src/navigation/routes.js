import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  Problem,
  ProblemsAll,
  ProblemNew,
  ProblemSolve,
  ProblemsPopular,
  ProblemsRecent,
} from './pages'

export const Routes = () => (
  <Switch>
    <Route path="/problem/new">
      <ProblemNew />
    </Route>
    <Route path="/problems/recent">
      <ProblemsRecent />
    </Route>
    <Route path="/problems/popular">
      <ProblemsPopular />
    </Route>
    <Route path="/problems/:id/solve">
      <ProblemSolve />
    </Route>
    <Route path="/problems/:id">
      <Problem />
    </Route>
    <Route path="/problems">
      <ProblemsAll />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)
