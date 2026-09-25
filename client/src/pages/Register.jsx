import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from 'lucide-react'
import useAuthStore from '../store/authStore'
import toast from 'react-hot-toast'
import AuthShell, { GoogleButton, inputCls } from '../components/UI/AuthShell'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { register, isLoading } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      toast.error('Please fill all fields')
      return
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    const result = await register(name, email, password)
    if (result.success) {
      toast.success('Account created! 🎉')
      navigate('/dashboard')
    } else {
      toast.error(result.message)
    }
  }

  return (
    <AuthShell quote={['Two keyboards.', 'One file.']}>
      <h1 className="text-4xl font-bold tracking-tight">Create your account</h1>
      <p className="text-ink/60 mt-2 mb-8">It's free. Your first room is one click away.</p>

      <GoogleButton />

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-ink/10"></div>
        <span className="text-ink/40 text-xs uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-ink/10"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Full name</label>
          <div className="relative">
            <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Gupta Prasad Adhikari"
              className={inputCls}
            />
          </div>
        </div>

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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
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
          className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors mt-2"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Creating account...
            </>
          ) : (
            <>Create account <ArrowRight size={17} /></>
          )}
        </button>
      </form>

      <p className="text-center text-ink/60 text-sm mt-8">
        Already on CodeSync?{' '}
        <Link to="/login" className="text-ink font-semibold underline underline-offset-4 decoration-orange-500 hover:text-orange-600">
          Log in
        </Link>
      </p>
    </AuthShell>
  )
}

export default Register
