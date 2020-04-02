import React from 'react'
import {HashRouter} from 'react-router-dom'
import {Content} from 'carbon-components-react'
import {ApolloContextProvider} from './context'
import {Header} from './components'
import {Routes} from './navigation'
import 'carbon-components/css/carbon-components.min.css'
import './global.css'

export const App = () => (
  <ApolloContextProvider>
    <HashRouter>
      <Header />
      <Content>
        <Routes />
      </Content>
    </HashRouter>
  </ApolloContextProvider>
)
