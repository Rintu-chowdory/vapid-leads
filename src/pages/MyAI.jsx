import { useState } from 'react'
import { Bot, Send, Sparkles } from 'lucide-react'

const STARTER = [
  'Which of my leads have the highest potential score?',
  'Draft an outreach email for Kellys Records',
  'What industries should I target for video production clients?',
  'Analyze the video presence of my current leads',
]

const RESPONSES = {
  'Which of my leads have the highest potential score?': `Based on your current leads database, here are your top 3 highest-potential opportunities:\n\n**1. Harrison Financial Group** (Score: 96)\nEstablished financial firm with strong reputation but outdated digital. Budget is clearly there ($$$$) — and they're in a sector where competitors are aggressively investing in video.\n\n**2. Creative Studios Inc** (Score: 92)\nAlready has Very Strong video presence — but you've marked them Won, so that's a template for your pitch deck!\n\n**3. The Corner Bakery Co.** (Score: 94) *from AI Find*\nZero video presence. 200+ Google reviews. Local brand with real community pull — low-hanging fruit.`,
  'Draft an outreach email for Kellys Records': `Here's a tailored outreach for Kellys Records:\n\n**Subject:** Quick idea for Kellys Records 🎵\n\nHi Alan,\n\nI came across Kellys Records in Cardiff Central Market — what a brilliant spot. I love what you've built there.\n\nI noticed you don't have much video content yet, which surprised me — record shops have some of the most character of any retail space. A short "come browse with us" style reel could do really well on Instagram Reels and TikTok.\n\nI create exactly that kind of content for local businesses. Happy to put together a quick 30-second sample for free just to show you what I mean.\n\nWorth a chat?\n\nBest,\n[Your Name]`,
}

export default function MyAI() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm your AI sales assistant. I can help you analyse your leads, draft outreach emails, find new opportunities, and plan your sales strategy. What would you like to work on?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = (text) => {
    const q = text || input
    if (!q.trim()) return
    setInput('')
    setMessages(ms => [...ms, { role: 'user', text: q }])
    setLoading(true)
    setTimeout(() => {
      const response = RESPONSES[q] || `I'll help you with that. Based on your leads database and current pipeline, here are my thoughts on "${q}":\n\nThis is a great area to focus on. Looking at your data, I can see several opportunities to improve your outreach and conversion rates. Would you like me to dig deeper into any specific aspect?`
      setMessages(ms => [...ms, { role: 'ai', text: response }])
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col" style={{ height: 'calc(100vh - 120px)' }}>
      <div className="flex items-center gap-3 mb-5">
        <div style={{ background: '#1a3a2a', padding: 10, borderRadius: 12 }}>
          <Bot size={22} style={{ color: '#00d68f' }} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">My AI</h1>
          <p style={{ color: '#8b8fa8', fontSize: 13 }}>Your personal AI sales strategist</p>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#13141a', border: '1px solid #1e2030', borderRadius: 16, padding: 20, marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i} className={`mb-4 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div style={{
              background: m.role === 'user' ? '#00d68f' : '#1a1b24',
              color: m.role === 'user' ? '#0a0b0f' : '#e2e8f0',
              padding: '10px 14px', borderRadius: 12,
              maxWidth: '80%', fontSize: 13, lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
            }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-4">
            <div style={{ background: '#1a1b24', padding: '10px 14px', borderRadius: 12, color: '#00d68f', fontSize: 13 }}>
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Starters */}
      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {STARTER.map((s, i) => (
            <button key={i} onClick={() => send(s)}
              style={{ background: '#13141a', border: '1px solid #1e2030', color: '#8b8fa8', fontSize: 12, padding: '6px 12px', borderRadius: 20 }}
              className="hover:text-white hover:border-green-800 transition-all text-left">
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ background: '#13141a', border: '1px solid #1e2030' }} className="flex items-center gap-2 px-3 py-2 rounded-xl">
        <input value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask me anything about your leads..."
          style={{ background: 'transparent', color: '#e2e8f0', outline: 'none', fontSize: 13, flex: 1 }}
          className="placeholder-gray-600" />
        <button onClick={() => send()}
          style={{ background: '#00d68f', color: '#0a0b0f', padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700 }}
          className="hover:bg-green-400 transition-colors flex items-center gap-1">
          <Send size={13} /> Send
        </button>
      </div>
    </div>
  )
}
