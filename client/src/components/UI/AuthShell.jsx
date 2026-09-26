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
