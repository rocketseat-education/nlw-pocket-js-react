// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
