import { useState } from 'react'
import { Plus, Upload, Zap, Star, MapPin, Mail, MoreHorizontal, ChevronDown } from 'lucide-react'

const VIDEO_PRESENCE = {
  None:       { label: 'None',       bg: '#3a1a1a', color: '#ef4444', border: '#7f1d1d' },
  Weak:       { label: 'Weak',       bg: '#3a2a1a', color: '#f97316', border: '#7c2d12' },
  Moderate:   { label: 'Moderate',   bg: '#3a3520', color: '#eab308', border: '#713f12' },
  Strong:     { label: 'Strong',     bg: '#1a3a2a', color: '#22c55e', border: '#14532d' },
  'Very Strong': { label: 'Very Strong', bg: '#1a3a1a', color: '#00d68f', border: '#065f46' },
}

const STATUS_STYLES = {
  New:        { bg: '#1a2a3a', color: '#60a5fa', border: '#1e3a5f' },
  Contacted:  { bg: '#2a1f3a', color: '#a78bfa', border: '#3b1f6a' },
  Qualified:  { bg: '#1a3a2a', color: '#34d399', border: '#065f46' },
  Proposal:   { bg: '#3a2a1a', color: '#fb923c', border: '#7c2d12' },
  Won:        { bg: '#003a20', color: '#00d68f', border: '#065f46' },
  Lost:       { bg: '#2a1a1a', color: '#f87171', border: '#7f1d1d' },
}

const TEMP_STYLES = {
  Cold: { bg: '#1a2030', color: '#94a3b8' },
  Warm: { bg: '#2a1f10', color: '#fb923c' },
  Hot:  { bg: '#2a1010', color: '#ef4444' },
}

const LEADS = [
  { id: 1, business: 'Miller Homes at Stanton Cross', contact: 'David Kernelok', email: 'sales@miller.co.uk', phone: '0330 173 6855', industry: 'Real Estate Developer', summary: 'Sales office for a major new residential development offering 2, 3 & 4-bedroom homes in Northampton.', video: 'Weak', spending: '$$', rating: 3, status: 'New', temp: 'Cold', source: 'Google', founded: 2018, fav: false },
  { id: 2, business: 'Kings Garage Door Specialist', contact: 'Sam Cox', email: 'kingsgaragedoorspecialist@gmail.com', phone: '01993 220 807', industry: 'Garage Door Installation & Repair', summary: 'A small, family-run business in Wellingborough specialising in garage door installation, repairs and maintenance.', video: 'Weak', spending: '$', rating: 2, status: 'Contacted', temp: 'Warm', source: 'LinkedIn', founded: 2015, fav: false },
  { id: 3, business: 'Dove Group', contact: 'Mark Dove', email: 'enquiries@dovegroup.co.uk', phone: '+44 29 2133 8038', industry: 'Building and Physical Security Products', summary: 'Mid-sized security products distributor serving commercial and residential markets across the UK.', video: 'None', spending: '$$$', rating: 4, status: 'New', temp: 'Cold', source: 'Manual', founded: 2010, fav: false },
  { id: 4, business: 'Illustrate', contact: 'Cate Leigh', email: 'enquiries@illustrate.co.uk', phone: '+44 29 2132 0038', industry: 'Sustainable Fashion & Art', summary: 'An independent brand transforming art into sustainable fashion — tees, totes and prints inspired by illustration.', video: 'Moderate', spending: '$$', rating: 3, status: 'Qualified', temp: 'Warm', source: 'Google', founded: 2020, fav: true },
  { id: 5, business: 'Kellys Records', contact: 'Alan Parkins', email: 'records@kellysrecords.com', phone: '+44 29 2097 7355', industry: 'Music Retail', summary: 'A historic record shop located in Cardiff Central Market with a strong local following and social media presence.', video: 'Weak', spending: '$', rating: 2, status: 'Proposal', temp: 'Warm', source: 'LinkedIn', founded: 1987, fav: false },
  { id: 6, business: 'Home by Kirsty', contact: 'Kirsty Patrick', email: 'info@homebykirsty.com', phone: '+44 7966 666038', industry: 'Interior Design & Retail', summary: 'A designed homeware business run by an interior stylist, offering curated home accessories and styling consultations.', video: 'Strong', spending: '$$$', rating: 4, status: 'Contacted', temp: 'Hot', source: 'Instagram', founded: 2019, fav: true },
  { id: 7, business: 'Beti Biggs', contact: 'Jan Owen', email: 'hello@betibiggs.com', phone: '+44 29 2097 2111', industry: 'Interiors & Gifts Retail', summary: 'An interiors and gift shop specialising in upcycled furniture and vintage homewares based in Cardiff Bay.', video: 'Weak', spending: '$$', rating: 3, status: 'New', temp: 'Cold', source: 'Google', founded: 2017, fav: false },
  { id: 8, business: 'The Queer Emporium', contact: 'Jan Owen', email: 'hello@theemporio.com', phone: '+44 2081 477 0', industry: 'Community Retail & Events', summary: 'A non-profit community shop and café supporting local LGBTQ+ makers, artists and events in the city centre.', video: 'None', spending: '$', rating: 2, status: 'Lost', temp: 'Cold', source: 'Manual', founded: 2022, fav: false },
  { id: 9, business: 'Creative Studios Inc', contact: 'Sarah Mitchell', email: 'sarah@creativestudios.com', phone: '+1 (555) 123-4567', industry: 'Video Production', summary: 'Full-service video production company specialising in commercial and corporate content for global brands.', video: 'Very Strong', spending: '$$$$', rating: 5, status: 'Won', temp: 'Warm', source: 'LinkedIn', founded: 2014, fav: true },
  { id: 10, business: 'Digital Motion Labs', contact: 'James Chen', email: 'james@digitalmotionlabs.com', phone: '+1 (555) 234-5678', industry: 'Digital Marketing', summary: 'Motion graphics and animation studio for tech companies and startups looking for bold, modern branding.', video: 'Very Strong', spending: '$$$', rating: 4, status: 'Contacted', temp: 'Hot', source: 'Google', founded: 2016, fav: false },
  { id: 11, business: 'Content Creators Network', contact: 'Emma Rodriguez', email: 'emma@ccnetwork.com', phone: '+1 (555) 345-6789', industry: 'Content Creation', summary: 'Freelance network connecting video creators with brands — offers production, editing and social media strategy.', video: 'Moderate', spending: '$$', rating: 3, status: 'New', temp: 'Warm', source: 'Instagram', founded: 2021, fav: false },
  { id: 12, business: 'Harrison Financial Group', contact: 'David Harrison', email: 'david@harrisonfg.com', phone: '+1 (555) 456-7890', industry: 'Financial Services', summary: 'Established financial advisory firm with strong reputation but outdated digital presence — prime opportunity.', video: 'Strong', spending: '$$$$', rating: 5, status: 'Qualified', temp: 'Warm', source: 'LinkedIn', founded: 2005, fav: true },
]

const STATUS_PILLS = ['All', 'New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost']
const VIDEO_PILLS = ['All', 'None', 'Weak', 'Moderate', 'Strong', 'Very Strong']
const SOURCES = ['All Sources', 'Google', 'LinkedIn', 'Instagram', 'Manual']
const YEARS = ['Any Year', '2005-2015', '2016-2019', '2020-2024']

function Badge({ type, value }) {
  if (type === 'video') {
    const s = VIDEO_PRESENCE[value] || {}
    return (
      <span style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: 11 }}
        className="px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
        ★ {value}
      </span>
    )
  }
  if (type === 'status') {
    const s = STATUS_STYLES[value] || {}
    return (
      <span style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: 11 }}
        className="px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap">
        {value}
      </span>
    )
  }
  if (type === 'temp') {
    const s = TEMP_STYLES[value] || {}
    return (
      <span style={{ background: s.bg, color: s.color, fontSize: 11 }}
        className="px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap">
        {value}
      </span>
    )
  }
  return null
}

function Spending({ val }) {
  return (
    <div className="flex gap-0.5">
      {['$','$','$','$'].map((s, i) => (
        <span key={i} style={{ color: i < val.length ? '#f59e0b' : '#2a2c3a', fontSize: 13 }} className="font-bold">{s}</span>
      ))}
    </div>
  )
}

function Rating({ val }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= val ? '#f59e0b' : '#2a2c3a', fontSize: 12 }}>●</span>
      ))}
    </div>
  )
}

export default function Leads() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [videoFilter, setVideoFilter] = useState('All')
  const [source, setSource] = useState('All Sources')
  const [year, setYear] = useState('Any Year')
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState('all')
  const [leads, setLeads] = useState(LEADS)
  const [showModal, setShowModal] = useState(false)

  const filtered = leads.filter(l => {
    const matchStatus = statusFilter === 'All' || l.status === statusFilter
    const matchVideo = videoFilter === 'All' || l.video === videoFilter
    const matchSource = source === 'All Sources' || l.source === source
    const matchFav = tab === 'all' || l.fav
    const q = query.toLowerCase()
    const matchQuery = !q || l.business.toLowerCase().includes(q) || l.contact.toLowerCase().includes(q) || l.industry.toLowerCase().includes(q)
    return matchStatus && matchVideo && matchSource && matchFav && matchQuery
  })

  const toggleFav = (id) => setLeads(ls => ls.map(l => l.id === id ? { ...l, fav: !l.fav } : l))

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p style={{ color: '#00d68f', fontSize: 13 }}>{filtered.length} total</p>
        </div>
        <div className="flex items-center gap-2">
          <button style={{ background: '#13141a', border: '1px solid #1e2030', color: '#8b8fa8' }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium hover:text-white transition-colors">
            <Plus size={15} /> Add Lead
          </button>
          <button style={{ background: '#13141a', border: '1px solid #1e2030', color: '#8b8fa8' }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium hover:text-white transition-colors">
            <Upload size={15} /> Import
          </button>
          <button style={{ background: '#00d68f', color: '#0a0b0f' }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-400 transition-colors"
            onClick={() => setShowModal(true)}>
            <Zap size={15} /> Populate Leads
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: '1px solid #1e2030' }} className="flex gap-0 mb-5">
        {[['all','All Leads'],['fav','Shared Leads']].map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)}
            style={{
              borderBottom: tab === key ? '2px solid #00d68f' : '2px solid transparent',
              color: tab === key ? '#00d68f' : '#8b8fa8',
              marginBottom: -1,
            }}
            className="px-4 py-2 text-sm font-medium transition-colors">
            {label}
          </button>
        ))}
      </div>

      {/* Search + Favorites */}
      <div className="flex items-center gap-3 mb-4">
        <div style={{ background: '#13141a', border: '1px solid #1e2030' }} className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4a4e6a" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search leads..."
            style={{ background: 'transparent', color: '#e2e8f0', outline: 'none', fontSize: 13 }}
            className="flex-1 placeholder-gray-600" />
        </div>
        <button style={{ background: '#13141a', border: '1px solid #1e2030', color: '#8b8fa8' }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium hover:text-white transition-colors whitespace-nowrap">
          <Star size={14} /> Favorites
        </button>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        {/* Status */}
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#4a4e6a', fontSize: 12, fontWeight: 600 }}>STATUS</span>
          <div className="flex gap-1 flex-wrap">
            {STATUS_PILLS.map(s => (
              <button key={s} onClick={() => setStatusFilter(s)}
                style={{
                  background: statusFilter === s ? (s === 'All' ? '#00d68f' : STATUS_STYLES[s]?.bg || '#13141a') : '#13141a',
                  color: statusFilter === s ? (s === 'All' ? '#0a0b0f' : STATUS_STYLES[s]?.color || '#e2e8f0') : '#8b8fa8',
                  border: `1px solid ${statusFilter === s ? (STATUS_STYLES[s]?.border || '#00d68f') : '#1e2030'}`,
                  fontSize: 12,
                }}
                className="px-2.5 py-1 rounded-full font-medium transition-all hover:text-white">{s}</button>
            ))}
          </div>
        </div>

        {/* Video Presence */}
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#4a4e6a', fontSize: 12, fontWeight: 600 }}>VIDEO PRESENCE</span>
          <div className="flex gap-1 flex-wrap">
            {VIDEO_PILLS.map(v => (
              <button key={v} onClick={() => setVideoFilter(v)}
                style={{
                  background: videoFilter === v ? (v === 'All' ? '#00d68f' : VIDEO_PRESENCE[v]?.bg || '#13141a') : '#13141a',
                  color: videoFilter === v ? (v === 'All' ? '#0a0b0f' : VIDEO_PRESENCE[v]?.color || '#e2e8f0') : '#8b8fa8',
                  border: `1px solid ${videoFilter === v ? (VIDEO_PRESENCE[v]?.border || '#00d68f') : '#1e2030'}`,
                  fontSize: 12,
                }}
                className="px-2.5 py-1 rounded-full font-medium transition-all hover:text-white">{v}</button>
            ))}
          </div>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#4a4e6a', fontSize: 12, fontWeight: 600 }}>SOURCE</span>
          <select value={source} onChange={e => setSource(e.target.value)}
            style={{ background: '#13141a', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 12 }}
            className="px-2.5 py-1.5 rounded-lg appearance-none pr-6">
            {SOURCES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-1.5">
          <span style={{ color: '#4a4e6a', fontSize: 12, fontWeight: 600 }}>FOUNDED</span>
          <select value={year} onChange={e => setYear(e.target.value)}
            style={{ background: '#13141a', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 12 }}
            className="px-2.5 py-1.5 rounded-lg appearance-none pr-6">
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: '#13141a', border: '1px solid #1e2030' }} className="rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid #1e2030' }}>
              {['Business','Contact','Industry','Summary','Video','Spending','Rating','Status','Actions'].map(h => (
                <th key={h} style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600, padding: '10px 12px', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={9} style={{ color: '#4a4e6a', padding: 40, textAlign: 'center' }}>No leads found.</td></tr>
            ) : filtered.map((l, i) => (
              <tr key={l.id} style={{ borderBottom: i < filtered.length-1 ? '1px solid #1e2030' : 'none' }}
                className="transition-colors"
                onMouseEnter={e => e.currentTarget.style.background = '#161720'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td style={{ padding: '10px 12px' }}>
                  <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600 }}>{l.business}</div>
                  <div style={{ color: '#4a4e6a', fontSize: 11 }}>{l.contact}</div>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <div style={{ color: '#8b8fa8', fontSize: 12 }}>{l.email}</div>
                  <div style={{ color: '#4a4e6a', fontSize: 11 }}>{l.phone}</div>
                </td>
                <td style={{ padding: '10px 12px', color: '#8b8fa8', fontSize: 12, maxWidth: 140 }}>{l.industry}</td>
                <td style={{ padding: '10px 12px', color: '#6b7280', fontSize: 11, maxWidth: 220 }}>
                  <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {l.summary}
                  </div>
                </td>
                <td style={{ padding: '10px 12px' }}><Badge type="video" value={l.video} /></td>
                <td style={{ padding: '10px 12px' }}><Spending val={l.spending} /></td>
                <td style={{ padding: '10px 12px' }}><Rating val={l.rating} /></td>
                <td style={{ padding: '10px 12px' }}>
                  <div className="flex flex-col gap-1">
                    <Badge type="temp" value={l.temp} />
                    <Badge type="status" value={l.status} />
                  </div>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <div className="flex items-center gap-2">
                    <button style={{ color: '#4a4e6a' }} className="hover:text-white transition-colors"><MapPin size={14} /></button>
                    <button style={{ color: '#4a4e6a' }} className="hover:text-white transition-colors"><Mail size={14} /></button>
                    <button onClick={() => toggleFav(l.id)} style={{ color: l.fav ? '#f59e0b' : '#4a4e6a' }} className="hover:text-yellow-400 transition-colors"><Star size={14} fill={l.fav ? '#f59e0b' : 'none'} /></button>
                    <button style={{ color: '#4a4e6a' }} className="hover:text-white transition-colors"><MoreHorizontal size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Populate Leads Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div style={{ background: '#13141a', border: '1px solid #1e2030' }} className="rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} style={{ color: '#00d68f' }} />
              <h2 className="text-white font-bold text-lg">AI Populate Leads</h2>
            </div>
            <p style={{ color: '#8b8fa8', fontSize: 13 }} className="mb-5">
              Describe the type of businesses you want to target. Our AI will find leads with weak visual presence — perfect for your creative services.
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1">INDUSTRY / NICHE</label>
                <input placeholder="e.g. Local restaurants in Berlin" defaultValue=""
                  style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%' }}
                  className="px-3 py-2 rounded-lg focus:border-green-500" />
              </div>
              <div>
                <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1">LOCATION</label>
                <input placeholder="e.g. Hamburg, Germany" defaultValue=""
                  style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%' }}
                  className="px-3 py-2 rounded-lg focus:border-green-500" />
              </div>
              <div>
                <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1">VIDEO PRESENCE FILTER</label>
                <select style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, width: '100%' }}
                  className="px-3 py-2 rounded-lg">
                  <option>None or Weak only</option><option>Up to Moderate</option><option>Any</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <button onClick={() => setShowModal(false)}
                style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#8b8fa8', flex: 1 }}
                className="py-2 rounded-lg text-sm font-medium hover:text-white transition-colors">Cancel</button>
              <button style={{ background: '#00d68f', color: '#0a0b0f', flex: 2 }}
                className="py-2 rounded-lg text-sm font-bold hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                onClick={() => setShowModal(false)}>
                <Zap size={15} /> Find Leads with AI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
