import React from 'react'
import { Shield } from 'lucide-react'

export default function Datenschutz() {
  const sections = [
    {
      num: 1,
      title: 'Verantwortlicher für die Datenverarbeitung',
      content: (
        <div className="space-y-2">
          <p>VapidLeads ist verantwortlich für alle Datenverarbeitungen innerhalb dieser Lead-Generierungs- und CRM-Anwendung.</p>
          <p>Als Nutzer vertrauen Sie VapidLeads Ihre Kontakte, Leads und geschäftlichen Beziehungsdaten an. Wir nehmen den Schutz Ihrer Daten ernst und halten uns an alle geltenden Datenschutzbestimmungen.</p>
        </div>
      )
    },
    {
      num: 2,
      title: 'Datenerhebung und Verarbeitung',
      content: (
        <div className="space-y-2">
          <p>VapidLeads erhebt und verarbeitet folgende Kategorien von Daten:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Kontoinformationen:</strong> E-Mail-Adresse, Name, Unternehmensname</li>
            <li><strong>Lead-Daten:</strong> Namen, E-Mail-Adressen, Telefonnummern, Unternehmensdetails, Positionen</li>
            <li><strong>Kontaktinformationen:</strong> Adressen, Website-URLs, LinkedIn-Profile, Social-Media-Konten</li>
            <li><strong>Geografische und demografische Daten:</strong> Standort, Branche, Unternehmensgröße, Jahresumsatz</li>
            <li><strong>Interaktionsdaten:</strong> E-Mail-Öffnungen, Link-Klicks, Kampagnenengage</li>
            <li><strong>KI-Analyseergebnisse:</strong> Scoring, Vorhersagen, automatisch erzeugte Insights</li>
            <li><strong>Nutzungsdaten:</strong> Login-Zeiten, Aktivitäten, Vorlieben, IP-Adressen</li>
          </ul>
          <p className="pt-2">Diese Daten werden verarbeitet zur Bereitstellung der Lead-Generierung, des CRM-Management und der KI-gestützten Datenanalyse.</p>
        </div>
      )
    },
    {
      num: 3,
      title: 'Google OAuth-Authentifizierung (Login)',
      content: (
        <div className="space-y-2">
          <p>VapidLeads nutzt Google OAuth 2.0 für die sichere Benutzerauthentifizierung. Dies ermöglicht:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Passwortlose Anmeldung mit Ihrem Google-Konto</li>
            <li>Sichere Abruf grundlegender Profilinformationen (E-Mail, Name, Profilfoto)</li>
            <li>Keine Speicherung oder Weitergabe von Passwörtern durch VapidLeads</li>
          </ul>
          <p className="pt-2"><strong>Google-Integration:</strong> Ihre Anmeldedaten und Authentifizierung werden von Google verwaltet. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">Siehe Google-Datenschutzrichtlinien</a>.</p>
        </div>
      )
    },
    {
      num: 4,
      title: 'KI-gestützte Datenverarbeitung und Analysen',
      content: (
        <div className="space-y-2">
          <p>VapidLeads nutzt künstliche Intelligenz zur Verbesserung Ihrer Lead-Management-Prozesse:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Lead-Scoring:</strong> KI-Modelle bewerten die Qualität und Konversionswahrscheinlichkeit von Leads</li>
            <li><strong>Prediktive Analysen:</strong> Vorhersagen über Lead-Verhalten und Konversionschancen</li>
            <li><strong>Automatische Kategorisierung:</strong> KI-gestützte Klassifizierung von Leads nach verschiedenen Kriterien</li>
            <li><strong>Datenzusammenführung:</strong> KI-unterstützte Identifizierung und Zusammenführung ähnlicher Lead-Datensätze</li>
            <li><strong>E-Mail und Nachrichtengenerierung:</strong> KI-Assistenten zur Erstellung personalisierter Outreach-Inhalte</li>
          </ul>
          <p className="pt-2">Diese KI-Verarbeitung hilft Ihnen, bessere Geschäftsentscheidungen zu treffen. Ihre Daten werden nicht ohne Zustimmung an externe KI-Systeme weitergegeben.</p>
        </div>
      )
    },
    {
      num: 5,
      title: 'Speicherung und Sicherheit',
      content: (
        <div className="space-y-2">
          <p>VapidLeads schützt Ihre Daten mit folgenden Maßnahmen:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>HTTPS/TLS-Verschlüsselung bei der Datenübertragung</li>
            <li>Verschlüsselte Speicherung vertraulicher Informationen</li>
            <li>Mehrstufige Authentifizierung und Zugriffskontrolle</li>
            <li>Regelmäßige Sicherheitsaudits und Penetrationstests</li>
            <li>Backup und Katastrophenwiederherstellungsverfahren</li>
          </ul>
          <p className="pt-2">Daten werden für die Dauer Ihres Abonnements gespeichert. Nach Kündigung können Sie Ihre Daten exportieren oder löschen lassen.</p>
        </div>
      )
    },
    {
      num: 6,
      title: 'Ihre Rechte nach DSGVO',
      content: (
        <div className="space-y-2">
          <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Recht auf Auskunft:</strong> Erfragen Sie, welche Daten über Sie gespeichert sind</li>
            <li><strong>Recht auf Berichtigung:</strong> Lassen Sie fehlerhafte oder unvollständige Daten korrigieren</li>
            <li><strong>Recht auf Löschung:</strong> Fordern Sie die Löschung Ihrer Daten („Recht auf Vergessenwerden")</li>
            <li><strong>Recht auf Einschränkung:</strong> Beschränken Sie die Verarbeitung Ihrer Daten</li>
            <li><strong>Recht auf Datenportabilität:</strong> Erhalten Sie Ihre Daten in maschinenlesbarem Format</li>
            <li><strong>Recht auf Widerspruch:</strong> Widersprechen Sie der Verarbeitung zu bestimmten Zwecken</li>
            <li><strong>Recht auf Automatisierungsentscheidungen:</strong> Verlangen Sie, nicht automatisch entschieden zu werden, wenn dies rechtliche Auswirkungen hat</li>
          </ul>
          <p className="pt-2">Um diese Rechte auszuüben, kontaktieren Sie unseren Support mit Details zu Ihrer Anfrage.</p>
        </div>
      )
    },
    {
      num: 7,
      title: 'Kontakt für Datenschutzanfragen',
      content: (
        <div className="space-y-2">
          <p>Für Datenschutzfragen, Auskunftsanfragen oder um Ihre DSGVO-Rechte geltend zu machen:</p>
          <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4 my-3">
            <p><strong>VapidLeads Datenschutz-Team</strong></p>
            <p>E-Mail: privacy@vapidleads.io</p>
            <p>Webseite: https://vapidleads.io</p>
          </div>
          <p>Wir werden auf Ihre Anfrage innerhalb von 30 Tagen antworten. Bei Bedarf können wir um Identitätsverifikation bitten.</p>
          <p className="pt-2"><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen, falls Sie glauben, dass Ihre Rechte verletzt wurden.</p>
        </div>
      )
    },
    {
      num: 8,
      title: 'Änderungen und Updates',
      content: (
        <div className="space-y-2">
          <p>VapidLeads kann diese Datenschutzerklärung jederzeit aktualisieren, um Änderungen in der Datenverarbeitung, rechtliche Anforderungen oder neue Funktionen widerzuspiegeln.</p>
          <p>Wesentliche Änderungen werden Ihnen per E-Mail mitgeteilt. Ihre fortgesetzte Nutzung der Plattform nach Änderungen bedeutet Ihre Zustimmung.</p>
          <p className="text-xs text-slate-400 pt-2">Zuletzt aktualisiert: Dezember 2024</p>
        </div>
      )
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #0a0b0f, #13141a, #0a0b0f)',
      color: '#e2e8f0',
      padding: '48px 24px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: '#00d68f',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Shield style={{ width: '24px', height: '24px', color: '#0a0b0f' }} />
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>Datenschutz</h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '18px', margin: 0 }}>
            Datenschutzerklärung für VapidLeads nach DSGVO (Datenschutz-Grundverordnung)
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {sections.map((section) => (
            <div 
              key={section.num} 
              style={{
                border: '1px solid #1e2030',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.15s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2a2b35'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1e2030'}
            >
              {/* Section Header */}
              <div style={{
                background: 'linear-gradient(to right, #13141a, #1a1b22)',
                padding: '24px',
                borderBottom: '1px solid #1e2030',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#00d68f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: 'bold',
                  color: '#0a0b0f',
                  fontSize: '18px'
                }}>
                  {section.num}
                </div>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  color: '#ffffff',
                  margin: 0,
                  paddingTop: '4px',
                  flex: 1
                }}>
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div style={{
                padding: '24px',
                background: 'rgba(19, 20, 26, 0.5)',
                color: '#cbd5e1',
                lineHeight: '1.6'
              }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '1px solid #1e2030',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '14px'
        }}>
          <p style={{ margin: '0 0 12px 0' }}>
            Diese Datenschutzerklärung wird bereitgestellt, um Ihre Rechte nach der DSGVO zu schützen.
          </p>
          <p style={{ margin: 0 }}>
            © 2024 VapidLeads. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  )
}
