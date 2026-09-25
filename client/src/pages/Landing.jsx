import { useNavigate } from 'react-router-dom'
import {
  ArrowUpRight, GitMerge, Play, MessageCircle, RotateCcw, Lock,
  Users, Briefcase, GraduationCap, Trophy, Plus
} from 'lucide-react'
import useAuthStore from '../store/authStore'
import { Logo } from '../components/UI/AuthShell'

const LANGUAGES = [
  'Python', 'JavaScript', 'TypeScript', 'C++', 'Java',
  'Go', 'Rust', 'C', 'PHP', 'Ruby', 'SQL', 'Kotlin'
]

const USE_CASES = [
  { icon: Users, title: 'Pair programming', text: 'Drive and navigate on the same file without screen-share lag.' },
  { icon: Briefcase, title: 'Technical interviews', text: 'Watch candidates think, type and run their solution live.' },
  { icon: GraduationCap, title: 'Teaching & bootcamps', text: 'Code in front of your students — or let them code in front of you.' },
  { icon: Trophy, title: 'Hackathons', text: 'Split the work, share one room, ship before the deadline.' },
]

const FAQ = [
  { q: 'Is CodeSync free?', a: 'Yes. Create an account, open a room and start coding — no card needed.' },
  { q: 'Do my teammates need an account?', a: 'Yes, everyone signs in (email or Google) and joins your room with its invite code. That keeps rooms private.' },
  { q: 'Which languages can I run?', a: 'Python, JavaScript, TypeScript, C, C++, Java, Go, Rust and more — output shows up for everyone in the room.' },
  { q: 'What if someone breaks the code?', a: 'Rewind. Save snapshots yourself or rely on auto-save, then restore any earlier version.' },
]

// Fake editor content for the hero preview
const CODE = [
  [['text-orange-400', 'def '], ['text-teal-300', 'two_sum'], ['text-stone-300', '(nums, target):']],
  [['text-stone-300', '    seen = {}']],
  [['text-orange-400', '    for '], ['text-stone-300', 'i, n '], ['text-orange-400', 'in '], ['text-teal-300', 'enumerate'], ['text-stone-300', '(nums):']],
  [['text-orange-400', '        if '], ['text-stone-300', 'target - n '], ['text-orange-400', 'in '], ['text-stone-300', 'seen:']],
  [['text-orange-400', '            return '], ['text-stone-300', '[seen[target - n], i]']],
  [['text-stone-300', '        seen[n] = i']],
  [],
  [['text-teal-300', 'print'], ['text-stone-300', '(two_sum(['], ['text-amber-200', '2, 7, 11, 15'], ['text-stone-300', '], '], ['text-amber-200', '9'], ['text-stone-300', '))']],
]

const Cursor = ({ name, color }) => (
  <span className={`relative inline-block w-[2px] h-5 ${color} animate-pulse align-middle`}>
    <span className={`absolute top-0 left-1 font-grotesk text-[10px] leading-4 font-semibold text-white px-1.5 rounded-sm rounded-tl-none ${color}`}>
      {name}
    </span>
  </span>
)

const EditorCard = () => (
  <div className="relative min-w-0">
    <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-orange-500" />
    <div className="relative bg-ink rounded-2xl border-2 border-ink overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2 font-code text-xs">
          <span className="text-stone-200 bg-white/10 px-2.5 py-1 rounded">main.py</span>
          <span className="text-stone-500 px-2.5 py-1">utils.py</span>
        </div>
        <span className="flex items-center gap-1.5 font-grotesk text-xs font-semibold text-ink bg-teal-300 px-3 py-1 rounded">
          <Play size={11} fill="currentColor" /> Run
        </span>
      </div>

      <div className="py-4 font-code text-[13px] leading-7 overflow-x-auto">
        {CODE.map((tokens, n) => (
          <div key={n} className="flex whitespace-pre pr-4">
            <span className="w-10 shrink-0 text-right pr-4 text-stone-600 select-none">{n + 1}</span>
            {tokens.map(([cls, txt], k) => <span key={k} className={cls}>{txt}</span>)}
            {n === 4 && <Cursor name="Priya" color="bg-orange-500" />}
            {n === 7 && <Cursor name="Leo" color="bg-teal-500" />}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-3 font-code text-xs flex items-center justify-between">
        <span><span className="text-stone-500">$ python main.py → </span><span className="text-teal-300">[0, 1]</span></span>
        <span className="font-grotesk text-stone-500">3 editing</span>
      </div>
    </div>
  </div>
)

const Landing = () => {
  const navigate = useNavigate()
  const { token } = useAuthStore()
  const start = () => navigate(token ? '/dashboard' : '/register')

  return (
    <div className="min-h-screen bg-paper text-ink font-grotesk overflow-x-hidden selection:bg-orange-300">

      <nav className="sticky top-0 z-20 bg-paper/85 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm text-ink/70">
            <a href="#use-cases" className="hover:text-ink transition-colors">Use cases</a>
            <a href="#features" className="hover:text-ink transition-colors">Features</a>
            <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            {!token && (
              <button onClick={() => navigate('/login')} className="hidden sm:block text-sm font-medium px-4 py-2 hover:text-orange-600 transition-colors">
                Log in
              </button>
            )}
            <button
              onClick={start}
              className="flex items-center gap-1.5 bg-ink text-paper text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-orange-600 transition-colors"
            >
              {token ? 'Open dashboard' : 'Open a room'}
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 border border-ink/15 bg-white/60 rounded-full px-3 py-1 text-sm text-ink/70 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Live, multiplayer code editor
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-7">
            Pair program <br />with anyone,{' '}
            <span className="font-serif italic font-normal text-orange-600">anywhere.</span>
          </h1>

          <p className="text-lg text-ink/70 leading-relaxed max-w-lg mb-10">
            CodeSync is a shared editor in your browser. Open a room, send the invite
            code, and everyone types, runs and talks about the same code — live.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={start}
              className="group flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-4 rounded-full transition-colors"
            >
              {token ? 'Go to your rooms' : "Start a room — it's free"}
              <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
            {!token && (
              <button
                onClick={() => navigate('/login')}
                className="font-semibold px-7 py-4 rounded-full border-2 border-ink hover:bg-ink hover:text-paper transition-colors"
              >
                I have an account
              </button>
            )}
          </div>

          <p className="mt-6 text-sm text-ink/50">No install. Works in any modern browser.</p>
        </div>

        <EditorCard />
      </header>

      <div className="bg-ink text-paper py-5 overflow-hidden -rotate-1 scale-105">
        <div className="flex w-max animate-marquee">
          {[...LANGUAGES, ...LANGUAGES].map((lang, i) => (
            <span key={i} className="flex items-center gap-8 px-4 font-code text-lg whitespace-nowrap">
              {lang} <span className="text-orange-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="use-cases" className="max-w-6xl mx-auto px-6 py-28 scroll-mt-20">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl mb-14">
          Made for the moments you code with{' '}
          <span className="font-serif italic font-normal text-teal-700">someone else.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
          {USE_CASES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-paper p-7 hover:bg-white transition-colors">
              <Icon size={26} className="text-orange-600 mb-10" strokeWidth={1.75} />
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 pb-28 scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-xl">
            Everything happens <span className="font-serif italic font-normal text-orange-600">in one tab.</span>
          </h2>
          <p className="text-ink/60 max-w-sm">
            Editing, running, chatting and version history — without juggling five tools.
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-4">
          <div className="md:col-span-4 bg-teal-700 text-white rounded-3xl p-8 flex flex-col justify-between min-h-[280px]">
            <GitMerge size={30} strokeWidth={1.75} />
            <div>
              <h3 className="text-3xl font-bold mb-3">Edits merge themselves.</h3>
              <p className="text-white/80 max-w-md">
                Built on Yjs CRDTs, so two people typing on the same line never overwrite
                each other. No locks, no “who has the file?”.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-ink text-paper rounded-3xl p-8 flex flex-col justify-between min-h-[280px]">
            <Play size={30} strokeWidth={1.75} className="text-teal-300" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Hit run. Everyone sees it.</h3>
              <p className="text-paper/70 text-sm">Execute code in 10+ languages right from the room.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-ink/10 rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
            <MessageCircle size={30} strokeWidth={1.75} className="text-orange-600" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Talk next to the code.</h3>
              <p className="text-ink/60 text-sm">Built-in room chat that keeps its history.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-orange-100 rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
            <RotateCcw size={30} strokeWidth={1.75} className="text-orange-700" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Rewind anytime.</h3>
              <p className="text-ink/60 text-sm">Manual snapshots plus auto-save. Restore any version.</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-white border border-ink/10 rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
            <Lock size={30} strokeWidth={1.75} className="text-teal-700" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Private by default.</h3>
              <p className="text-ink/60 text-sm">Invite-code rooms, JWT auth and rate limiting.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pb-28 scroll-mt-20">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10 text-center">
          Questions, <span className="font-serif italic font-normal text-teal-700">answered.</span>
        </h2>
        <div className="border-t border-ink/15">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group border-b border-ink/15 py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold">
                {q}
                <Plus size={20} className="shrink-0 ml-4 group-open:rotate-45 transition-transform" />
              </summary>
              <p className="mt-3 text-ink/65 leading-relaxed pr-8">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-ink text-paper rounded-[2rem] px-8 py-20 text-center relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-orange-600/40 blur-3xl" />
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/30 blur-3xl" />
          <h2 className="relative text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Your next session <br />
            <span className="font-serif italic font-normal text-orange-400">starts with a code.</span>
          </h2>
          <p className="relative text-paper/70 mb-10 max-w-md mx-auto">
            Open a room, share the invite, and you're coding together in under a minute.
          </p>
          <button
            onClick={start}
            className="relative inline-flex items-center gap-2 bg-paper text-ink font-semibold px-8 py-4 rounded-full hover:bg-orange-400 transition-colors"
          >
            {token ? 'Open dashboard' : 'Create your first room'}
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between flex-wrap gap-4 border-t border-ink/10">
        <Logo />
        <p className="text-ink/50 text-sm">Built by Gupta Prasad Adhikari</p>
      </footer>

    </div>
  )
}

export default Landing
