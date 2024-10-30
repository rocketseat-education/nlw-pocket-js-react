import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuthenticateFromGithub } from '../http/generated/api'
import Cookies from 'universal-cookie'

export function SignInWithGithubCallback() {
  const navigate = useNavigate()

  const { mutateAsync: authenticateFromGithub } = useAuthenticateFromGithub()

  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  if (!code) {
    return <Navigate to="/" />
  }

  useEffect(() => {
    authenticateFromGithub({ data: { code } }).then(response => {
      const token = response.token
      const cookies = new Cookies()

      cookies.set('in-orbit.token', token, {
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
      })

      navigate('/app')
    })
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-6 text-gray-500 animate-spin" />
    </div>
  )
}
