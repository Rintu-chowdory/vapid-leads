import { useState } from 'react'
import { Mail, Send, Sparkles } from 'lucide-react'

const TEMPLATES = [
  { label: 'Cold Outreach', subject: 'Quick question about your online presence', body: `Hi [Name],\n\nI came across [Business Name] and was impressed by what you do in [Industry].\n\nI noticed your video presence could be an untapped opportunity — most of your competitors are already using short-form video to drive significant new business.\n\nI specialise in creating video content for businesses like yours. I'd love to show you 2-3 quick examples relevant to your industry.\n\nWould you be open to a 15-min call this week?\n\nBest,\n[Your Name]` },
  { label: 'Follow-Up', subject: 'Following up — [Business Name]', body: `Hi [Name],\n\nJust following up on my previous email about your video presence.\n\nI put together a quick 60-second demo specifically for [Business Name] — happy to share it with you, no strings attached.\n\nLet me know if that sounds useful.\n\nBest,\n[Your Name]` },
  { label: 'Proposal', subject: 'Video content proposal for [Business Name]', body: `Hi [Name],\n\nThank you for our conversation! As discussed, here is a summary of what I'd propose:\n\n• 4 short-form videos per month (30-60 seconds)\n• 1 brand overview video (2-3 minutes)\n• Full editing and captioning included\n\nInvestment: from £XXX/month\n\nI'm confident this would meaningfully increase your online visibility within 90 days.\n\nShall we get started?\n\n[Your Name]` },
]

export default function EmailPage() {
  const [tmpl, setTmpl] = useState(0)
  const [subject, setSubject] = useState(TEMPLATES[0].subject)
  const [body, setBody] = useState(TEMPLATES[0].body)

  const selectTemplate = (i) => {
    setTmpl(i)
    setSubject(TEMPLATES[i].subject)
    setBody(TEMPLATES[i].body)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div style={{ background: '#1a2a3a', padding: 10, borderRadius: 12 }}>
          <Mail size={22} style={{ color: '#60a5fa' }} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Email Outreach</h1>
          <p style={{ color: '#8b8fa8', fontSize: 13 }}>AI-powered email templates for lead outreach</p>
        </div>
      </div>

      {/* Templates */}
      <div className="flex gap-2 mb-5">
        {TEMPLATES.map((t, i) => (
          <button key={i} onClick={() => selectTemplate(i)}
            style={{
              background: tmpl === i ? '#1a2a3a' : '#13141a',
              border: `1px solid ${tmpl === i ? '#3b5fa0' : '#1e2030'}`,
              color: tmpl === i ? '#60a5fa' : '#8b8fa8',
              fontSize: 12, padding: '6px 12px', borderRadius: 8, fontWeight: 600,
            }}
            className="transition-all hover:text-white">{t.label}</button>
        ))}
        <button style={{ background: '#1a3a2a', border: '1px solid #065f46', color: '#00d68f', fontSize: 12, padding: '6px 12px', borderRadius: 8, fontWeight: 600 }}
          className="ml-auto flex items-center gap-1.5 hover:bg-green-900 transition-colors">
          <Sparkles size={13} /> Generate with AI
        </button>
      </div>

      {/* Compose */}
      <div style={{ background: '#13141a', border: '1px solid #1e2030' }} className="rounded-2xl p-5">
        <div className="mb-3">
          <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1.5">TO</label>
          <input placeholder="contact@business.com"
            style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%' }}
            className="px-3 py-2 rounded-lg" />
        </div>
        <div className="mb-3">
          <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1.5">SUBJECT</label>
          <input value={subject} onChange={e => setSubject(e.target.value)}
            style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%' }}
            className="px-3 py-2 rounded-lg" />
        </div>
        <div className="mb-4">
          <label style={{ color: '#4a4e6a', fontSize: 11, fontWeight: 600 }} className="block mb-1.5">MESSAGE</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} rows={12}
            style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#e2e8f0', fontSize: 13, outline: 'none', width: '100%', resize: 'none', fontFamily: 'Inter, system-ui' }}
            className="px-3 py-2 rounded-lg" />
        </div>
        <div className="flex gap-2">
          <button style={{ background: '#0a0b0f', border: '1px solid #1e2030', color: '#8b8fa8', flex: 1 }}
            className="py-2.5 rounded-lg text-sm font-medium hover:text-white transition-colors">Save Draft</button>
          <button style={{ background: '#00d68f', color: '#0a0b0f', flex: 2 }}
            className="py-2.5 rounded-lg text-sm font-bold hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
            <Send size={14} /> Send Email
          </button>
        </div>
      </div>
    </div>
  )
}
