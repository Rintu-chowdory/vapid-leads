import { Link, useLocation } from 'react-router-dom'
import { Users, Map, Sparkles, Mail, Bot, BarChart2, Kanban, Settings, Shield } from 'lucide-react'

const nav = [
  { to: '/leads',     label: 'Leads',     icon: <Users size={16} /> },
  { to: '/analytics', label: 'Analytics', icon: <BarChart2 size={16} /> },
  { to: '/pipeline',  label: 'Pipeline',  icon: <Kanban size={16} /> },
  { to: '/map',       label: 'Map',       icon: <Map size={16} /> },
  { to: '/ai-find',   label: 'AI Find',   icon: <Sparkles size={16} /> },
  { to: '/email',     label: 'Email',     icon: <Mail size={16} /> },
  { to: '/my-ai',     label: 'My AI',     icon: <Bot size={16} /> },
  { to: '/settings',  label: 'Settings',  icon: <Settings size={16} /> },
  { to: '/datenschutz', label: 'Datenschutz', icon: <Shield size={16} /> },
  { to: '/impressum', label: 'Impressum', icon: <Shield size={16} /> },
]

export default function Layout({ children }) {
  const loc = useLocation()
  return (
    <div style={{ minHeight:'100vh', background:'#0a0b0f', color:'#e2e8f0', fontFamily:'Inter,sans-serif' }}>
      {/* Top nav */}
      <header style={{ background:'#13141a', borderBottom:'1px solid #1e2030', padding:'0 24px', display:'flex', alignItems:'center', gap:8, height:52, position:'sticky', top:0, zIndex:100 }}>
        <span style={{ fontWeight:700, fontSize:18, color:'#00d68f', marginRight:16, letterSpacing:'-0.5px' }}>vapid<span style={{color:'#e2e8f0'}}>leads</span></span>
        <nav style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
          {nav.map(n => {
            const active = loc.pathname === n.to
            return (
              <Link key={n.to} to={n.to} style={{
                display:'flex', alignItems:'center', gap:6,
                padding:'5px 12px', borderRadius:8, fontSize:13, fontWeight:500,
                textDecoration:'none',
                background: active ? '#00d68f22' : 'transparent',
                color: active ? '#00d68f' : '#94a3b8',
                border: active ? '1px solid #00d68f44' : '1px solid transparent',
                transition:'all .15s'
              }}>
                {n.icon}{n.label}
              </Link>
            )
          })}
        </nav>
      </header>
      <main style={{ padding:'24px' }}>{children}</main>
    </div>
  )
}
