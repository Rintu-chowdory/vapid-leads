import { Link, useLocation } from 'react-router-dom'
import { Users, Map, Sparkles, Mail, Bot, UserCircle } from 'lucide-react'

const nav = [
  { to: '/leads', label: 'Leads', icon: <Users size={16} /> },
  { to: '/map', label: 'Map', icon: <Map size={16} /> },
  { to: '/ai-find', label: 'AI Find', icon: <Sparkles size={16} /> },
  { to: '/email', label: 'Email', icon: <Mail size={16} /> },
  { to: '/my-ai', label: 'My AI', icon: <Bot size={16} /> },
]

export default function Layout({ children }) {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0b0f' }}>
      {/* Top nav */}
      <header style={{ background: '#0d0e14', borderBottom: '1px solid #1e2030' }} className="sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center gap-6">
          {/* Logo */}
          <Link to="/leads" className="flex items-center gap-1.5 shrink-0">
            <span className="font-bold text-lg tracking-tight">
              <span style={{ color: '#00d68f' }}>V</span>
              <span className="text-white">APID</span>
            </span>
            <span style={{ color: '#4a4e6a', fontSize: 12 }} className="hidden md:block ml-2 font-medium">Smart Lead Management for Creators</span>
          </Link>

          <div className="flex-1" />

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {nav.map(n => {
              const active = pathname.startsWith(n.to)
              return (
                <Link key={n.to} to={n.to}
                  style={{
                    background: active ? '#00d68f' : 'transparent',
                    color: active ? '#0a0b0f' : '#8b8fa8',
                    border: 'none',
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:text-white"
                >
                  {n.icon} {n.label}
                </Link>
              )
            })}
            <Link to="/account" style={{ color: '#8b8fa8' }} className="ml-2 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all">
              <UserCircle size={16} /> Account
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-6 py-6">
        {children}
      </main>
    </div>
  )
}
