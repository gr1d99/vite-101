import React from 'react'
import Dashboard from './pages/dashboard'
import { Layout } from './components/layout'

const App = (): JSX.Element => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default App
