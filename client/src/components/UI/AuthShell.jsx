import { Link } from 'react-router-dom'

export const Logo = ({ light = false }) => (
  <span className="flex items-center gap-2.5">
    <span className={`w-9 h-9 rounded-lg flex items-center justify-center font-code text-sm font-medium ${light ? 'bg-paper text-ink' : 'bg-ink text-paper'}`}>
      {'{ }'}
    </span>
    <span className={`font-grotesk text-xl font-bold tracking-tight ${light ? 'text-paper' : 'text-ink'}`}>
      CodeSync
    </span>
  </span>
)

export const inputCls = 'w-full bg-white border-2 border-ink/10 rounded-xl pl-11 pr-4 py-3 text-ink placeholder-ink/35 focus:outline-none focus:border-ink transition-colors text-sm'

export const GoogleButton = () => (
  <button
    type="button"
    onClick={() => window.location.href = `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/auth/google`}
    className="w-full flex items-center justify-center gap-3 bg-white border-2 border-ink/10 hover:border-ink text-ink font-semibold py-3 rounded-xl transition-colors text-sm"
  >
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
    Continue with Google
  </button>
)

// Split-screen layout shared by Login and Register
const AuthShell = ({ quote, children }) => (
  <div className="min-h-screen bg-paper text-ink font-grotesk grid lg:grid-cols-[1fr_1.1fr]">

    <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-ink text-paper p-12">
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-600/40 blur-3xl" />
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-teal-500/25 blur-3xl" />

      <Link to="/" className="relative"><Logo light /></Link>

      <p className="relative text-5xl font-bold leading-[1.05] tracking-tight">
        {quote[0]} <br />
        <span className="font-serif italic font-normal text-orange-400">{quote[1]}</span>
      </p>

      <div className="relative font-code text-sm bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1">
        <p><span className="text-stone-500">$</span> codesync join <span className="text-teal-300">X7K-29Q</span></p>
        <p className="text-stone-400">✓ connected · 3 people in room</p>
        <p className="text-orange-400">▍</p>
      </div>
    </aside>

    <main className="flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="lg:hidden flex justify-center mb-10"><Logo /></Link>
        {children}
      </div>
    </main>
  </div>
)

export default AuthShell
