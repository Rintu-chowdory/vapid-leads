import { X, Mail, Globe, Calendar, Tag, TrendingUp, MessageSquare } from 'lucide-react'

const VIDEO_PRESENCE = {
  None:          { label: 'None',        bg: '#3a1a1a', color: '#ef4444', border: '#7f1d1d' },
  Weak:          { label: 'Weak',        bg: '#3a2a1a', color: '#f97316', border: '#7c2d12' },
  Moderate:      { label: 'Moderate',    bg: '#3a3520', color: '#eab308', border: '#713f12' },
  Strong:        { label: 'Strong',      bg: '#1a3a2a', color: '#22c55e', border: '#14532d' },
  'Very Strong': { label: 'Very Strong', bg: '#1a3a1a', color: '#00d68f', border: '#065f46' },
}
const STATUS_STYLES = {
  New:       { bg: '#1a2a3a', color: '#60a5fa', border: '#1e3a5f' },
  Contacted: { bg: '#2a1f3a', color: '#a78bfa', border: '#3b1f6a' },
  Qualified: { bg: '#1a3a2a', color: '#34d399', border: '#065f46' },
  Proposal:  { bg: '#3a2a1a', color: '#fb923c', border: '#7c2d12' },
  Won:       { bg: '#003a20', color: '#00d68f', border: '#065f46' },
  Lost:      { bg: '#2a1a1a', color: '#f87171', border: '#7f1d1d' },
}
const TEMP_ICONS = { Cold: '❄️', Warm: '🌡️', Hot: '🔥' }
const TEMP_COLORS = { Cold: '#94a3b8', Warm: '#fb923c', Hot: '#ef4444' }

export default function LeadPanel({ lead, onClose }) {
  if (!lead) return null
  const vp = VIDEO_PRESENCE[lead.video] || VIDEO_PRESENCE['None']
  const st = STATUS_STYLES[lead.status] || STATUS_STYLES['New']
  const score = lead.rating * 20
  const scoreColor = score >= 80 ? '#00d68f' : score >= 60 ? '#eab308' : '#ef4444'

  const activity = [
    { date: '2 days ago', text: 'Status: ' + lead.status, icon: '🔄' },
    { date: '5 days ago', text: 'Lead added to pipeline',  icon: '➕' },
    { date: '1 week ago', text: 'Video presence analysed', icon: '🎥' },
  ]

  return (
    <>
      <div onClick={onClose} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.55)',zIndex:40 }} />
      <div style={{
        position:'fixed',top:0,right:0,bottom:0,width:420,maxWidth:'100vw',
        background:'#13141a',borderLeft:'1px solid #1e2030',zIndex:50,
        overflowY:'auto',display:'flex',flexDirection:'column',
        animation:'slideInPanel .22s ease',
      }}>
        <div style={{padding:'20px 24px',borderBottom:'1px solid #1e2030',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div>
            <div style={{fontWeight:700,fontSize:18,color:'#f1f5f9'}}>{lead.business}</div>
            <div style={{fontSize:13,color:'#64748b',marginTop:2}}>{lead.contact}</div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',color:'#64748b',cursor:'pointer',padding:4,lineHeight:0}}>
            <X size={20}/>
          </button>
        </div>

        <div style={{padding:'20px 24px',flex:1}}>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:24}}>
            <span style={{padding:'4px 10px',borderRadius:20,fontSize:12,fontWeight:600,background:st.bg,color:st.color,border:'1px solid ' + st.border}}>{lead.status}</span>
            <span style={{padding:'4px 10px',borderRadius:20,fontSize:12,fontWeight:600,background:vp.bg,color:vp.color,border:'1px solid ' + vp.border}}>{'📹 ' + lead.video}</span>
            <span style={{fontSize:12,fontWeight:600,color:TEMP_COLORS[lead.temp]||'#94a3b8'}}>{(TEMP_ICONS[lead.temp]||'') + ' ' + lead.temp}</span>
          </div>

          <div style={{background:'#0a0b0f',border:'1px solid #1e2030',borderRadius:12,padding:'16px 20px',marginBottom:20}}>
            <div style={{fontSize:12,color:'#64748b',marginBottom:8}}>AI Lead Score</div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div style={{fontSize:38,fontWeight:800,color:scoreColor,lineHeight:1}}>{score}</div>
              <div style={{flex:1}}>
                <div style={{background:'#1e2030',borderRadius:4,height:8,overflow:'hidden'}}>
                  <div style={{width:score+'%',height:'100%',background:scoreColor,borderRadius:4,transition:'width .5s ease'}}/>
                </div>
                <div style={{fontSize:11,color:'#475569',marginTop:4}}>out of 100</div>
              </div>
            </div>
          </div>

          <div style={{marginBottom:20}}>
            <div style={{fontSize:12,color:'#64748b',textTransform:'uppercase',letterSpacing:'.05em',marginBottom:12}}>Details</div>
            {[
              [<Globe size={14}/>,      'Industry', lead.industry],
              [<Tag size={14}/>,        'Source',   lead.source],
              [<TrendingUp size={14}/>, 'Spending', lead.spending],
              [<Calendar size={14}/>,   'Founded',  lead.founded],
            ].map(([icon,label,val]) => (
              <div key={label} style={{display:'flex',alignItems:'center',gap:10,marginBottom:9}}>
                <span style={{color:'#475569',width:20,flexShrink:0}}>{icon}</span>
                <span style={{fontSize:13,color:'#64748b',width:90,flexShrink:0}}>{label}</span>
                <span style={{fontSize:13,color:'#cbd5e1',fontWeight:500}}>{val}</span>
              </div>
            ))}
          </div>

          <div style={{marginBottom:20}}>
            <div style={{fontSize:12,color:'#64748b',textTransform:'uppercase',letterSpacing:'.05em',marginBottom:12}}>Contact</div>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
              <Mail size={14} style={{color:'#475569'}}/>
              <span style={{fontSize:13,color:'#60a5fa'}}>{lead.email}</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <Globe size={14} style={{color:'#475569'}}/>
              <span style={{fontSize:13,color:'#94a3b8'}}>{lead.phone}</span>
            </div>
          </div>

          <div style={{marginBottom:20}}>
            <div style={{fontSize:12,color:'#64748b',textTransform:'uppercase',letterSpacing:'.05em',marginBottom:10,display:'flex',alignItems:'center',gap:6}}>
              <MessageSquare size={12}/> Notes
            </div>
            <textarea placeholder='Add a note about this lead...'
              style={{width:'100%',background:'#0a0b0f',border:'1px solid #1e2030',borderRadius:8,
                padding:'10px 12px',color:'#cbd5e1',fontSize:13,resize:'vertical',minHeight:76,
                outline:'none',fontFamily:'inherit',boxSizing:'border-box'}}/>
          </div>

          <div style={{marginBottom:20}}>
            <div style={{fontSize:12,color:'#64748b',textTransform:'uppercase',letterSpacing:'.05em',marginBottom:10}}>Summary</div>
            <p style={{fontSize:13,color:'#94a3b8',lineHeight:1.6,margin:0}}>{lead.summary}</p>
          </div>

          <div>
            <div style={{fontSize:12,color:'#64748b',textTransform:'uppercase',letterSpacing:'.05em',marginBottom:12}}>Activity Timeline</div>
            {activity.map((a,i) => (
              <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',marginBottom:12}}>
                <span style={{fontSize:16,lineHeight:1}}>{a.icon}</span>
                <div>
                  <div style={{fontSize:13,color:'#cbd5e1'}}>{a.text}</div>
                  <div style={{fontSize:11,color:'#475569',marginTop:2}}>{a.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{padding:'16px 24px',borderTop:'1px solid #1e2030',display:'flex',gap:8}}>
          <button style={{flex:1,padding:'10px 0',background:'#00d68f',color:'#0a0b0f',border:'none',borderRadius:8,fontWeight:700,fontSize:14,cursor:'pointer'}}>
            Send Email
          </button>
          <button style={{flex:1,padding:'10px 0',background:'#1e2030',color:'#cbd5e1',border:'1px solid #2a2c40',borderRadius:8,fontWeight:600,fontSize:14,cursor:'pointer'}}>
            Edit Lead
          </button>
        </div>
      </div>
      <style>{'@keyframes slideInPanel{from{transform:translateX(100%)}to{transform:translateX(0)}}'}</style>
    </>
  )
}
