import { useState } from 'react'
import { Sparkles, Search, Building2, Globe, Star } from 'lucide-react'

const RESULTS = [
  { business: 'The Corner Bakery Co.', location: 'Munich, DE', industry: 'Food & Beverage', video: 'None', score: 94, reason: 'No social media video presence. Website has only static images. 4.8★ on Google Maps with 200+ reviews — strong local reputation untapped online.' },
  { business: 'Hartmann Plumbing GmbH', location: 'Hamburg, DE', industry: 'Home Services', video: 'Weak', score: 87, reason: 'One outdated YouTube video from 2019. Active customer base but no modern brand content. High-value contracts available.' },
  { business: 'Müllers Fahrradshop', location: 'Berlin, DE', industry: 'Cycling Retail', video: 'None', score: 91, reason: 'No video presence at all. Instagram account with 800 followers but only static posts. Sells premium bikes — budget likely there.' },
  { business: 'Studio Haus Interior', location: 'Frankfurt, DE', industry: 'Interior Design', video: 'Weak', score: 83, reason: 'Portfolio site with photos only. Competitors in the space are using video heavily. Would benefit strongly from reel content.' },
]

export default function AIFind() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  const search = () => {
    if (!query) return
    setLoading(true)
    setTimeout(() => { setResults(RESULTS); setLoading(false) }, 1800)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div style={{ background: '#1a3a2a', padding: 10, borderRadius: 12 }}>
          <Sparkles size={22} style={{ color: '#00d68f' }} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">AI Find</h1>
          <p style={{ color: '#8b8fa8', fontSize: 13 }}>Discover businesses with weak visual presence — your best prospects</p>
        </div>
      </div>

      {/* Search */}
      <div style={{ background: '#13141a', border: '1px solid #1e2030' }} className="rounded-2xl p-5 mb-6">
        <div className="flex flex-col gap-3">
          <div>
            <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1.5">INDUSTRY / BUSINESS TYPE</label>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="e.g. Local restaurants, plumbers, hair salons..."
              style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%' }}
              className="px-3 py-2.5 rounded-lg" />
          </div>
          <div>
            <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1.5">LOCATION</label>
            <input value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Berlin, Hamburg, Munich..."
              style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%' }}
              className="px-3 py-2.5 rounded-lg" />
          </div>
          <button onClick={search} style={{ background: '#00d68f', color: '#0a0b0f' }}
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm hover:bg-green-400 transition-colors">
            <Sparkles size={15} /> {loading ? 'Scanning...' : 'Find Weak Leads with AI'}
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-center py-10" style={{ color: '#8b8fa8' }}>
          <div style={{ color: '#00d68f' }} className="text-2xl mb-2">🔍</div>
          <p className="text-sm">AI is scanning businesses and scoring video presence...</p>
        </div>
      )}

      {results.length > 0 && !loading && (
        <div className="flex flex-col gap-3">
          <p style={{ color: '#4a4e6a', fontSize: 12, fontWeight: 600 }}>FOUND {results.length} HIGH-OPPORTUNITY LEADS</p>
          {results.map((r, i) => (
            <div key={i} style={{ background: '#13141a', border: '1px solid #1e2030' }} className="rounded-xl p-4 hover:border-green-800 transition-colors cursor-pointer">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{r.business}</span>
                    <span style={{ background: '#1a3a1a', color: '#00d68f', fontSize: 10, padding: '2px 7px', borderRadius: 999 }} className="font-bold">Score {r.score}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span style={{ color: '#8b8fa8', fontSize: 12 }} className="flex items-center gap-1"><Building2 size={11} />{r.industry}</span>
                    <span style={{ color: '#8b8fa8', fontSize: 12 }} className="flex items-center gap-1"><Globe size={11} />{r.location}</span>
                    <span style={{ background: '#3a1a1a', color: '#ef4444', border: '1px solid #7f1d1d', fontSize: 10, padding: '1px 6px', borderRadius: 999 }} className="font-semibold">Video: {r.video}</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: 12 }}>{r.reason}</p>
                </div>
                <button style={{ background: '#00d68f', color: '#0a0b0f', fontSize: 12, padding: '6px 12px', borderRadius: 8, fontWeight: 700, whiteSpace: 'nowrap' }}
                  className="hover:bg-green-400 transition-colors shrink-0">Add Lead</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && !loading && (
        <div style={{ color: '#2a2c3a' }} className="text-center py-16">
          <Sparkles size={40} className="mx-auto mb-3" />
          <p style={{ color: '#4a4e6a' }}>Enter an industry and location to start finding leads</p>
        </div>
      )}
    </div>
  )
}
