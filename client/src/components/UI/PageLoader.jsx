import { Code2 } from 'lucide-react'

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mx-auto">
            <Code2 size={32} className="text-violet-500" />
          </div>
          <div className="absolute inset-0 rounded-2xl border-2 border-violet-500/30 border-t-violet-500 animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm">Loading CodeSync...</p>
      </div>
    </div>
  )
}

export default PageLoader