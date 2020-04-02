import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ApolloContextProvider} from './context'
import {
  Header,
  NewProblemForm,
  Problem,
  ProblemSolve,
  AllProblemList,
  RecentProblemList,
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
          <Route path="/recent-problems">
            <RecentProblemList />
          </Route>
          <Route path="/problems">
            <AllProblemList />
          </Route>
          <Route path="/">
            <section className="hero">
              <p className="hero__title">
                Welcome to Better FE!{' '}
                <span role="img" aria-label="">
                  👋
                </span>
              </p>
              <p className="hero__subtitle">
                Post a frontend problem, share your solution & vote on the most
                elegant approach
              </p>
            </section>
          </Route>
        </Switch>
      </Content>
    </Router>
  </ApolloContextProvider>
)
