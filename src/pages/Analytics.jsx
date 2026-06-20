import { TrendingUp, Users, DollarSign, Target, Award, BarChart2 } from 'lucide-react'

const byStatus = [
  { label: 'New',       count: 3, color: '#60a5fa' },
  { label: 'Contacted', count: 3, color: '#a78bfa' },
  { label: 'Qualified', count: 2, color: '#34d399' },
  { label: 'Proposal',  count: 2, color: '#fb923c' },
  { label: 'Won',       count: 1, color: '#00d68f' },
  { label: 'Lost',      count: 1, color: '#f87171' },
]

const byPresence = [
  { label: 'None',       count: 2, color: '#ef4444' },
  { label: 'Weak',       count: 3, color: '#f97316' },
  { label: 'Moderate',   count: 2, color: '#eab308' },
  { label: 'Strong',     count: 3, color: '#22c55e' },
  { label: 'Very Strong',count: 2, color: '#00d68f' },
]

const byIndustry = [
  { label: 'Real Estate', count: 3 },
  { label: 'Interior Design', count: 2 },
  { label: 'Digital / Video', count: 3 },
  { label: 'Retail', count: 2 },
  { label: 'Financial', count: 1 },
  { label: 'Community', count: 1 },
]

const recentActivity = [
  { text: 'Creative Studios Inc marked as Won', time: '1d ago', icon: '🏆' },
  { text: 'Home by Kirsty moved to Hot', time: '2d ago', icon: '🔥' },
  { text: 'AI analysis ran on 3 new leads', time: '3d ago', icon: '🤖' },
  { text: 'Email sent to Digital Motion Labs', time: '4d ago', icon: '📧' },
  { text: 'Harrison Financial added to pipeline', time: '5d ago', icon: '➕' },
]

function Bar({ count, max, color }) {
  return (
    <div style={{ background: '#1e2030', borderRadius: 4, height: 8, overflow: 'hidden', flex: 1 }}>
      <div style={{ width: (count / max * 100) + '%', height: '100%', background: color, borderRadius: 4, transition: 'width .6s ease' }} />
    </div>
  )
}

function KPI({ icon, label, value, sub, color }) {
  return (
    <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 12, padding: '20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ color }}>{icon}</span>
        <span style={{ fontSize: 13, color: '#64748b' }}>{label}</span>
      </div>
      <div style={{ fontSize: 30, fontWeight: 800, color: '#f1f5f9', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, color: '#475569', marginTop: 6 }}>{sub}</div>
    </div>
  )
}

export default function Analytics() {
  const maxStatus   = Math.max(...byStatus.map(s => s.count))
  const maxPresence = Math.max(...byPresence.map(s => s.count))
  const maxIndustry = Math.max(...byIndustry.map(s => s.count))

  return (
    <div style={{ padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', margin: 0 }}>Analytics</h1>
        <p style={{ color: '#64748b', margin: '6px 0 0', fontSize: 14 }}>Pipeline overview and lead intelligence</p>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
        <KPI icon={<Users size={18}/>}       label="Total Leads"    value={12}    sub="+3 this week"    color="#60a5fa" />
        <KPI icon={<Target size={18}/>}      label="Avg Score"      value="62"    sub="out of 100"      color="#00d68f" />
        <KPI icon={<DollarSign size={18}/>}  label="Pipeline Value" value="£28k"  sub="monthly est."   color="#a78bfa" />
        <KPI icon={<Award size={18}/>}       label="Won"            value={1}     sub="8.3% close rate" color="#fb923c" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>

        {/* Status chart */}
        <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 12, padding: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <BarChart2 size={16} style={{ color: '#00d68f' }}/> Leads by Status
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {byStatus.map(({ label, count, color }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 13, color: '#cbd5e1' }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color }}>{count}</span>
                </div>
                <Bar count={count} max={maxStatus} color={color} />
              </div>
            ))}
          </div>
        </div>

        {/* Video presence */}
        <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 12, padding: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            📹 Video Presence
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {byPresence.map(({ label, count, color }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 13, color: '#cbd5e1' }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color }}>{count}</span>
                </div>
                <Bar count={count} max={maxPresence} color={color} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

        {/* Industry */}
        <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 12, padding: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', marginBottom: 20 }}>Industry Breakdown</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {byIndustry.map(({ label, count }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: '#cbd5e1' }}>{label}</span>
                  <span style={{ fontSize: 12, color: '#64748b' }}>{Math.round(count / 12 * 100)}%</span>
                </div>
                <div style={{ background: '#1e2030', borderRadius: 4, height: 7, overflow: 'hidden' }}>
                  <div style={{ width: (count / maxIndustry * 100) + '%', height: '100%', background: '#00d68f',
                    opacity: 0.55 + count / maxIndustry * 0.45, borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 12, padding: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <TrendingUp size={16} style={{ color: '#00d68f' }}/> Recent Activity
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {recentActivity.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 17, lineHeight: 1, flexShrink: 0 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 13, color: '#cbd5e1' }}>{a.text}</div>
                  <div style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
