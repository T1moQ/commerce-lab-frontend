import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './app/router'
import { QueryProvider } from './app/providers/query-client'
import { Toaster } from 'sonner'

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors expand />
    </QueryProvider>
  )
}

export default App
