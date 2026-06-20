import { useState } from 'react'
import { Save, Bell, Database, Zap, Shield, Palette } from 'lucide-react'

const Section = ({ icon, title, children }) => (
  <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 12, padding: 24, marginBottom: 20 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <span style={{ color: '#00d68f' }}>{icon}</span>
      <span style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9' }}>{title}</span>
    </div>
    {children}
  </div>
)

const Row = ({ label, sub, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
    <div>
      <div style={{ fontSize: 13, color: '#e2e8f0', fontWeight: 500 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{sub}</div>}
    </div>
    <div style={{ flexShrink: 0, marginLeft: 16 }}>{children}</div>
  </div>
)

const Toggle = ({ value, onChange }) => (
  <button onClick={() => onChange(!value)}
    style={{ width: 44, height: 24, borderRadius: 12, background: value ? '#00d68f' : '#1e2030',
      border: 'none', cursor: 'pointer', position: 'relative', transition: 'background .2s' }}>
    <div style={{ position: 'absolute', top: 3, left: value ? 23 : 3, width: 18, height: 18,
      borderRadius: '50%', background: '#fff', transition: 'left .2s' }} />
  </button>
)

const Slider = ({ value, onChange, min=0, max=100, color='#00d68f' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <input type='range' min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))}
      style={{ width: 120, accentColor: color }} />
    <span style={{ fontSize: 13, fontWeight: 700, color, width: 32, textAlign: 'right' }}>{value}%</span>
  </div>
)

export default function Settings() {
  const [saved, setSaved] = useState(false)
  const [notifs, setNotifs] = useState({ email: true, overdue: true, newLead: false, weekly: true })
  const [scoring, setScoring] = useState({ video: 40, engagement: 25, spending: 20, recency: 15 })
  const [supaUrl, setSupaUrl] = useState('')
  const [supaKey, setSupaKey] = useState('')
  const [theme, setTheme] = useState({ accent: '#00d68f', density: 'comfortable' })
  const [ai, setAi] = useState({ autoScore: true, suggestions: true, emailDrafts: false })

  const totalWeight = scoring.video + scoring.engagement + scoring.spending + scoring.recency

  const save = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div style={{ padding: '32px', maxWidth: 720, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', margin: 0 }}>Settings</h1>
          <p style={{ color: '#64748b', margin: '6px 0 0', fontSize: 14 }}>Configure your VAPID workspace</p>
        </div>
        <button onClick={save}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
            background: saved ? '#065f46' : '#00d68f', color: saved ? '#34d399' : '#0a0b0f',
            border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all .2s' }}>
          <Save size={15}/> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <Section icon={<Zap size={18}/>} title='AI Scoring Weights'>
        <div style={{ fontSize: 12, color: '#64748b', marginBottom: 16 }}>{'Total weight: ' + totalWeight + '% ' + (totalWeight !== 100 ? '(should equal 100%)' : '✓')}</div>
        {[
          ['Video Presence', 'How visible they are on video platforms', 'video'],
          ['Engagement Rate', 'Social media engagement and reach', 'engagement'],
          ['Spending Power', 'Estimated marketing budget indicators', 'spending'],
          ['Recency', 'How recently they were active or updated', 'recency'],
        ].map(([label, sub, key]) => (
          <Row key={key} label={label} sub={sub}>
            <Slider value={scoring[key]} onChange={v => setScoring(s => ({ ...s, [key]: v }))}/>
          </Row>
        ))}
      </Section>

      <Section icon={<Bell size={18}/>} title='Notifications'>
        <Row label='Email digests' sub='Daily summary of pipeline activity'>
          <Toggle value={notifs.email} onChange={v => setNotifs(n => ({ ...n, email: v }))}/>
        </Row>
        <Row label='Overdue follow-ups' sub='Alert when a follow-up date passes'>
          <Toggle value={notifs.overdue} onChange={v => setNotifs(n => ({ ...n, overdue: v }))}/>
        </Row>
        <Row label='New lead alerts' sub='Notify when AI finds new leads'>
          <Toggle value={notifs.newLead} onChange={v => setNotifs(n => ({ ...n, newLead: v }))}/>
        </Row>
        <Row label='Weekly report' sub='Pipeline summary every Monday'>
          <Toggle value={notifs.weekly} onChange={v => setNotifs(n => ({ ...n, weekly: v }))}/>
        </Row>
      </Section>

      <Section icon={<Database size={18}/>} title='Supabase Connection'>
        <Row label='Project URL' sub='Your Supabase project URL'>
          <input value={supaUrl} onChange={e => setSupaUrl(e.target.value)}
            placeholder='https://xyz.supabase.co'
            style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0',
              fontSize: 12, padding: '6px 10px', borderRadius: 6, outline: 'none', width: 240 }}/>
        </Row>
        <Row label='Anon Key' sub='Public anon key (safe to use in browser)'>
          <input value={supaKey} onChange={e => setSupaKey(e.target.value)} type='password'
            placeholder='eyJhbGc...'
            style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0',
              fontSize: 12, padding: '6px 10px', borderRadius: 6, outline: 'none', width: 240 }}/>
        </Row>
        <div style={{ background: '#0a0b0f', border: '1px solid #1e2030', borderRadius: 8, padding: '10px 14px', marginTop: 4 }}>
          <div style={{ fontSize: 12, color: '#64748b' }}>Add these as GitHub Secrets to enable live data:</div>
          <code style={{ fontSize: 11, color: '#00d68f', display: 'block', marginTop: 6 }}>VITE_SUPABASE_URL</code>
          <code style={{ fontSize: 11, color: '#00d68f', display: 'block' }}>VITE_SUPABASE_ANON_KEY</code>
        </div>
      </Section>

      <Section icon={<Shield size={18}/>} title='AI Behaviour'>
        <Row label='Auto-score new leads' sub='Automatically score leads when added'>
          <Toggle value={ai.autoScore} onChange={v => setAi(a => ({ ...a, autoScore: v }))}/>
        </Row>
        <Row label='Smart suggestions' sub='Show AI suggestions in the lead panel'>
          <Toggle value={ai.suggestions} onChange={v => setAi(a => ({ ...a, suggestions: v }))}/>
        </Row>
        <Row label='Auto-draft emails' sub='Pre-draft outreach emails for new leads'>
          <Toggle value={ai.emailDrafts} onChange={v => setAi(a => ({ ...a, emailDrafts: v }))}/>
        </Row>
      </Section>

      <Section icon={<Palette size={18}/>} title='Appearance'>
        <Row label='Accent colour' sub='Primary brand colour throughout the app'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {['#00d68f','#60a5fa','#a78bfa','#fb923c','#f87171'].map(c => (
              <button key={c} onClick={() => setTheme(t => ({ ...t, accent: c }))}
                style={{ width: 24, height: 24, borderRadius: '50%', background: c, border: theme.accent === c ? '2px solid #fff' : '2px solid transparent', cursor: 'pointer' }}/>
            ))}
          </div>
        </Row>
        <Row label='Table density' sub='How compact the leads table appears'>
          <div style={{ display: 'flex', gap: 6 }}>
            {['compact','comfortable','spacious'].map(d => (
              <button key={d} onClick={() => setTheme(t => ({ ...t, density: d }))}
                style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                  background: theme.density === d ? '#00d68f' : '#1e2030',
                  color: theme.density === d ? '#0a0b0f' : '#8b8fa8',
                  border: 'none', cursor: 'pointer', textTransform: 'capitalize' }}>{d}</button>
            ))}
          </div>
        </Row>
      </Section>
    </div>
  )
}
