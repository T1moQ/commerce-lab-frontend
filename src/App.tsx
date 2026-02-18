import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './app/router'
import { QueryProvider } from './app/providers/query-client'

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}

export default App
