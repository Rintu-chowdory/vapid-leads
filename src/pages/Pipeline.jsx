import { useState } from 'react'
import { MoreHorizontal, Star } from 'lucide-react'

const STAGES = [
  { key: 'New',       label: 'New',       color: '#60a5fa', bg: '#1a2a3a' },
  { key: 'Contacted', label: 'Contacted', color: '#a78bfa', bg: '#2a1f3a' },
  { key: 'Qualified', label: 'Qualified', color: '#34d399', bg: '#1a3a2a' },
  { key: 'Proposal',  label: 'Proposal',  color: '#fb923c', bg: '#3a2a1a' },
  { key: 'Won',       label: 'Won',       color: '#00d68f', bg: '#003a20' },
  { key: 'Lost',      label: 'Lost',      color: '#f87171', bg: '#2a1a1a' },
]

const INIT_LEADS = [
  { id:1,  business:'Miller Homes',           contact:'David Kernelok',  status:'New',       score:40, video:'Weak',        temp:'Cold', industry:'Real Estate'      },
  { id:2,  business:'Kings Garage Door',      contact:'Sam Cox',         status:'Contacted', score:40, video:'Weak',        temp:'Warm', industry:'Home Services'    },
  { id:3,  business:'Dove Group',             contact:'Mark Dove',       status:'New',       score:60, video:'None',        temp:'Cold', industry:'Security'         },
  { id:4,  business:'Illustrate',             contact:'Cate Leigh',      status:'Qualified', score:60, video:'Moderate',    temp:'Warm', industry:'Fashion'          },
  { id:5,  business:'Kellys Records',         contact:'Alan Parkins',    status:'Proposal',  score:40, video:'Weak',        temp:'Warm', industry:'Retail'           },
  { id:6,  business:'Home by Kirsty',         contact:'Kirsty Patrick',  status:'Contacted', score:80, video:'Strong',      temp:'Hot',  industry:'Interior Design'  },
  { id:7,  business:'Beti Biggs',             contact:'Jan Owen',        status:'New',       score:60, video:'Weak',        temp:'Cold', industry:'Retail'           },
  { id:8,  business:'The Queer Emporium',     contact:'Jan Owen',        status:'Lost',      score:40, video:'None',        temp:'Cold', industry:'Community'        },
  { id:9,  business:'Creative Studios Inc',   contact:'Sarah Mitchell',  status:'Won',       score:100,video:'Very Strong', temp:'Warm', industry:'Video Production' },
  { id:10, business:'Digital Motion Labs',    contact:'James Chen',      status:'Contacted', score:80, video:'Very Strong', temp:'Hot',  industry:'Digital Marketing'},
  { id:11, business:'Content Creators Net',   contact:'Emma Rodriguez',  status:'New',       score:60, video:'Moderate',   temp:'Warm', industry:'Content'          },
  { id:12, business:'Harrison Financial',     contact:'David Harrison',  status:'Qualified', score:100,video:'Strong',     temp:'Warm', industry:'Finance'          },
]

const VIDEO_COLORS = { None:'#ef4444', Weak:'#f97316', Moderate:'#eab308', Strong:'#22c55e', 'Very Strong':'#00d68f' }
const TEMP_ICONS   = { Cold:'❄️', Warm:'🌡️', Hot:'🔥' }

export default function Pipeline() {
  const [leads, setLeads] = useState(INIT_LEADS)
  const [dragging, setDragging] = useState(null)
  const [over, setOver] = useState(null)

  const onDragStart = (e, lead) => {
    setDragging(lead.id)
    e.dataTransfer.effectAllowed = 'move'
  }

  const onDragOver = (e, stageKey) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setOver(stageKey)
  }

  const onDrop = (e, stageKey) => {
    e.preventDefault()
    setLeads(ls => ls.map(l => l.id === dragging ? { ...l, status: stageKey } : l))
    setDragging(null)
    setOver(null)
  }

  const onDragEnd = () => { setDragging(null); setOver(null) }

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', margin: 0 }}>Pipeline</h1>
        <p style={{ color: '#64748b', margin: '6px 0 0', fontSize: 14 }}>Drag leads between stages to update their status</p>
      </div>

      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 16, alignItems: 'flex-start' }}>
        {STAGES.map(stage => {
          const stageLeads = leads.filter(l => l.status === stage.key)
          const isOver = over === stage.key
          return (
            <div key={stage.key}
              onDragOver={e => onDragOver(e, stage.key)}
              onDrop={e => onDrop(e, stage.key)}
              onDragLeave={() => setOver(null)}
              style={{
                minWidth: 220, maxWidth: 220, flexShrink: 0,
                background: isOver ? '#1a1c26' : '#13141a',
                border: '1px solid ' + (isOver ? stage.color : '#1e2030'),
                borderRadius: 12, padding: 12,
                transition: 'border-color .15s, background .15s',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: stage.color }} />
                  <span style={{ fontWeight: 700, fontSize: 13, color: '#e2e8f0' }}>{stage.label}</span>
                </div>
                <span style={{ fontSize: 12, color: '#64748b', background: '#0a0b0f', padding: '2px 8px', borderRadius: 20 }}>{stageLeads.length}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minHeight: 60 }}>
                {stageLeads.map(lead => (
                  <div key={lead.id}
                    draggable
                    onDragStart={e => onDragStart(e, lead)}
                    onDragEnd={onDragEnd}
                    style={{
                      background: dragging === lead.id ? '#0a0b0f' : '#0d0e14',
                      border: '1px solid #1e2030',
                      borderRadius: 8, padding: '10px 12px',
                      cursor: 'grab', opacity: dragging === lead.id ? 0.5 : 1,
                      transition: 'opacity .15s',
                    }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#f1f5f9', marginBottom: 4 }}>{lead.business}</div>
                    <div style={{ fontSize: 11, color: '#64748b', marginBottom: 8 }}>{lead.contact}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 11, color: VIDEO_COLORS[lead.video] || '#94a3b8' }}>● {lead.video}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 12 }}>{TEMP_ICONS[lead.temp]}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: lead.score >= 80 ? '#00d68f' : lead.score >= 60 ? '#eab308' : '#ef4444' }}>{lead.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {stageLeads.length === 0 && (
                  <div style={{ textAlign: 'center', color: '#2a2c3a', fontSize: 12, padding: '20px 0', borderRadius: 6, border: '1px dashed #1e2030' }}>Drop here</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {STAGES.map(s => {
          const cnt = leads.filter(l => l.status === s.key).length
          return (
            <div key={s.key} style={{ background: '#13141a', border: '1px solid #1e2030', borderRadius: 8, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
              <span style={{ fontSize: 12, color: '#94a3b8' }}>{s.label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{cnt}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
