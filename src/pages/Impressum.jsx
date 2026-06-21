export default function Impressum() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0b0f', color: '#e2e8f0', padding: '32px' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            Impressum
          </h1>
          <p style={{ color: '#94a3b8' }}>Offenlegung gemäß § 5 TMG (Telemediengesetz)</p>
        </div>

        {/* Content Sections */}
        <div style={{ display: 'grid', gap: '32px' }}>
          {/* 1. Anbieter */}
          <section
            style={{
              background: '#13141a',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #1e2030',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: '#00d68f',
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: '6px',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                1
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginTop: '4px' }}>
                Anbieter (gemäß § 5 TMG)
              </h2>
            </div>
            <p style={{ color: '#cbd5e1', marginLeft: '44px' }}>
              <strong>VapidLeads</strong>
              <br />
              Eine Lead-Generierungs- und Verwaltungsplattform mit KI-gestützten Analyse- und Automatisierungsfunktionen
            </p>
          </section>

          {/* 2. Kontakt */}
          <section
            style={{
              background: '#13141a',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #1e2030',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: '#00d68f',
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: '6px',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                2
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginTop: '4px' }}>
                Kontaktinformationen
              </h2>
            </div>
            <div style={{ color: '#cbd5e1', marginLeft: '44px', display: 'grid', gap: '8px' }}>
              <p>
                <strong>E-Mail:</strong> support@vapidleads.local
              </p>
              <p>
                <strong>Website:</strong> vapidleads.local
              </p>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '16px' }}>
                Für Fragen oder Anfragen kontaktieren Sie uns über die oben angegebenen Kontaktdaten.
              </p>
            </div>
          </section>

          {/* 3. Verantwortliche Personen */}
          <section
            style={{
              background: '#13141a',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #1e2030',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: '#00d68f',
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: '6px',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                3
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginTop: '4px' }}>
                Verantwortliche Personen
              </h2>
            </div>
            <p style={{ color: '#cbd5e1', marginLeft: '44px' }}>
              Die Verwaltung und der Betrieb von VapidLeads erfolgt durch das Entwicklungsteam. Im Sinne des TMG sind
              diese für den Inhalt und Betrieb dieser Anwendung verantwortlich.
            </p>
          </section>

          {/* 4. Haftungsausschluss */}
          <section
            style={{
              background: '#13141a',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #1e2030',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: '#00d68f',
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: '6px',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                4
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginTop: '4px' }}>
                Haftungsausschluss
              </h2>
            </div>
            <div style={{ color: '#cbd5e1', marginLeft: '44px', display: 'grid', gap: '16px' }}>
              <p>
                <strong>Gewährleistung für Inhalte:</strong>
                <br />
                Die Inhalte dieser Webseite wurden sorgfältig erstellt. Für Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte übernehmen wir jedoch keine Gewähr.
              </p>
              <p>
                <strong>Haftung für Links:</strong>
                <br />
                Externe Links sind als solche deutlich gekennzeichnet. Der Anbieter übernimmt keine Verantwortung für
                die Inhalte externer Websites.
              </p>
            </div>
          </section>

          {/* 5. Urheberrecht */}
          <section
            style={{
              background: '#13141a',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #1e2030',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: '#00d68f',
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: '6px',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                5
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginTop: '4px' }}>Urheberrecht</h2>
            </div>
            <div style={{ color: '#cbd5e1', marginLeft: '44px', display: 'grid', gap: '12px' }}>
              <p>
                Alle Texte, Grafiken, Logos und weitere Inhalte dieser Webseite und Anwendung sind urheberrechtlich
                geschützt. Die unbefugte Reproduktion, Verbreitung oder Vervielfältigung ohne ausdrückliche schriftliche
                Genehmigung ist untersagt.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>© VapidLeads. Alle Rechte vorbehalten.</p>
            </div>
          </section>

          {/* Footer */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #1e2030' }}>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
              Dieses Impressum wurde zuletzt aktualisiert am {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
