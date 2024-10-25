import { createBrowserRouter } from 'react-router-dom'
import { SignInWithGithub } from './pages/sign-in-with-github'
import { Application } from './pages/application'
import { SignInWithGithubCallback } from './pages/sign-in-with-github-callback'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInWithGithub />,
  },
  {
    path: '/app',
    element: <Application />,
  },
  {
    path: '/auth/github/callback',
    element: <SignInWithGithubCallback />,
  },
])
