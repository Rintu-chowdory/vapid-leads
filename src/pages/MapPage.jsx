import { MapPin } from 'lucide-react'

const PIN_COLORS = { 'Very Strong': '#00d68f', Strong: '#22c55e', Moderate: '#eab308', Weak: '#f97316', None: '#ef4444' }
const pins = [
  { x: 30, y: 25, biz: 'Miller Homes', video: 'Weak', industry: 'Real Estate' },
  { x: 55, y: 40, biz: 'Home by Kirsty', video: 'Strong', industry: 'Interior Design' },
  { x: 70, y: 30, biz: 'Creative Studios Inc', video: 'Very Strong', industry: 'Video Production' },
  { x: 20, y: 55, biz: 'Kings Garage Door', video: 'Weak', industry: 'Home Services' },
  { x: 45, y: 60, biz: 'Illustrate', video: 'Moderate', industry: 'Fashion & Art' },
  { x: 80, y: 55, biz: 'Digital Motion Labs', video: 'Very Strong', industry: 'Digital Marketing' },
  { x: 60, y: 70, biz: 'Kellys Records', video: 'Weak', industry: 'Music Retail' },
  { x: 35, y: 75, biz: 'The Queer Emporium', video: 'None', industry: 'Community Retail' },
  { x: 75, y: 75, biz: 'Harrison Financial', video: 'Strong', industry: 'Finance' },
]

export default function MapPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-white">Lead Map</h1>
        <span style={{ background: '#1a3a2a', color: '#00d68f', fontSize: 12, padding: '3px 10px', borderRadius: 999, fontWeight: 600 }}>
          {pins.length} Leads
        </span>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4">
        {Object.entries(PIN_COLORS).map(([label, color]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
            <span style={{ color: '#8b8fa8', fontSize: 12 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Map area */}
      <div style={{ background: '#0d0f1a', border: '1px solid #1e2030', position: 'relative', height: 480, borderRadius: 16, overflow: 'hidden' }}>
        {/* Grid lines */}
        {[20,40,60,80].map(v => (
          <div key={v} style={{ position: 'absolute', left: `${v}%`, top: 0, bottom: 0, borderLeft: '1px solid #1e2030', opacity: 0.5 }} />
        ))}
        {[25,50,75].map(v => (
          <div key={v} style={{ position: 'absolute', top: `${v}%`, left: 0, right: 0, borderTop: '1px solid #1e2030', opacity: 0.5 }} />
        ))}
        {/* Region labels */}
        {['North', 'South', 'East', 'West', 'Central'].map((l, i) => (
          <div key={l} style={{ position: 'absolute', color: '#1e2030', fontSize: 48, fontWeight: 900, left: `${[10,10,65,5,35][i]}%`, top: `${[5,70,35,40,35][i]}%`, userSelect: 'none' }}>{l}</div>
        ))}

        {/* Pins */}
        {pins.map((p, i) => (
          <div key={i} style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-100%)' }}
            className="group cursor-pointer">
            <MapPin size={22} style={{ color: PIN_COLORS[p.video], filter: 'drop-shadow(0 0 6px '+PIN_COLORS[p.video]+'66)' }} fill={PIN_COLORS[p.video]+'33'} />
            {/* Tooltip */}
            <div style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 8, padding: '6px 10px', position: 'absolute', bottom: '110%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.15s' }}
              className="group-hover:opacity-100">
              <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600 }}>{p.biz}</div>
              <div style={{ color: PIN_COLORS[p.video], fontSize: 11 }}>Video: {p.video}</div>
              <div style={{ color: '#8b8fa8', fontSize: 11 }}>{p.industry}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
