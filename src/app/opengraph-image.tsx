import { ImageResponse } from 'next/og';

export const alt = 'Berufsgenie – Finde deinen Traumjob per Swipe';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 40%, #fbbf24 100%)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}
            >
              💼
            </div>
            <span style={{ fontSize: '28px', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
              berufsgenie.de
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Finde deinen
            <br />
            Traumjob
            <br />
            per Swipe
          </h1>
          <p
            style={{
              fontSize: '26px',
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Echte Videos von Arbeitgebern, Swipe-Matching und Direkt-Chat.
            Kostenlos für Jobsuchende.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '24px', fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>
            <span>100+ Berufe</span>
            <span>·</span>
            <span>84 Städte</span>
            <span>·</span>
            <span>2.500+ Seiten</span>
          </div>
          <div
            style={{
              padding: '12px 28px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Jetzt starten →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
