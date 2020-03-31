import React from 'react'
import {ApolloContextProvider} from './context'
import {ProblemList, NewSolutionForm, NewProblemForm} from './components'

export const App = () => (
  <ApolloContextProvider>
    <h1>Better FE</h1>
    <NewProblemForm />
    <hr />
    <NewSolutionForm />
    <hr />
    <ProblemList />
  </ApolloContextProvider>
)
