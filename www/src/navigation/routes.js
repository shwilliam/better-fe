import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  AllProblems,
  NewProblem,
  ProblemSolve,
  Problem,
  RecentProblems,
} from './pages'

export const Routes = () => (
  <Switch>
    <Route path="/new-problem">
      <NewProblem />
    </Route>
    <Route path="/problems/:id/solve">
      <ProblemSolve />
    </Route>
    <Route path="/problems/:id">
      <Problem />
    </Route>
    <Route path="/recent-problems">
      <RecentProblems />
    </Route>
    <Route path="/problems">
      <AllProblems />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)
