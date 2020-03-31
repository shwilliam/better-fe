import React from 'react'
import {ApolloProvider} from '@apollo/react-hooks'
import {client} from './client'

export const ApolloContextProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
