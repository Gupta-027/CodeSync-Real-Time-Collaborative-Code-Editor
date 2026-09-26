import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'
import useAuthStore from '../store/authStore'
import toast from 'react-hot-toast'
import AuthShell, { inputCls } from '../components/UI/AuthShell'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoading } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please fill all fields')
      return
    }
    const result = await login(email, password)
    if (result.success) {
      toast.success('Welcome back! 👋')
      navigate('/dashboard')
    } else {
      toast.error(result.message)
    }
  }

  return (
    <AuthShell quote={['Your team is', 'waiting in the room.']}>
      <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
      <p className="text-ink/60 mt-2 mb-8">Log in to jump back into your rooms.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email</label>
          <div className="relative">
            <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-semibold mb-1.5">Password</label>
          <div className="relative">
            <Lock size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className={`${inputCls} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink transition-colors"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-ink hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-paper font-semibold py-3.5 rounded-xl transition-colors mt-2"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin"></span>
              Logging in...
            </>
          ) : (
            <>Log in <ArrowRight size={17} /></>
          )}
        </button>
      </form>

      <p className="text-center text-ink/60 text-sm mt-8">
        New to CodeSync?{' '}
        <Link to="/register" className="text-ink font-semibold underline underline-offset-4 decoration-orange-500 hover:text-orange-600">
          Create an account
        </Link>
      </p>
    </AuthShell>
  )
}

export default Login
