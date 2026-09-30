import React, { useState } from 'react';
import { Download, Monitor, Apple, Terminal, ShieldCheck, CheckCircle2, Cpu, HardDrive, Wifi, Camera } from 'lucide-react';
import badgeSoftware from '../assets/badge-software.webp';

export const DownloadPage: React.FC = () => {
  const [downloadTriggered, setDownloadTriggered] = useState<string | null>(null);

  const handleDownload = (osName: string) => {
    setDownloadTriggered(osName);
    setTimeout(() => {
      setDownloadTriggered(null);
    }, 4000);
  };

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '6rem', backgroundColor: '#0b0b0e' }}>
      <div className="ctc-container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-header__tag">The Pro-Suite Desktop Client</span>
          <h1 className="section-header__title">Download the Official Hiring Environment</h1>
          <p className="section-header__subtitle">
            Secure, zero-latency desktop software engineered for high-stakes screening exams, corporate placement drives, and verified CTC Score evaluations.
          </p>
        </div>

        {/* Hero Download Card with Visual Badge */}
        <div
          style={{
            backgroundColor: '#141418',
            border: '1px solid #26262a',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 340px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: '#6ee7b7',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              <ShieldCheck size={14} />
              <span>Current Stable Release: v2.4.0 (SHA-256 Verified)</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Crack The Campus Pro-Suite
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Built specifically for engineering candidates. Eliminates browser tab lag, ensures fair evaluation, and guarantees your placement test telemetry is accepted by tier-1 hiring partners.
            </p>

            {downloadTriggered && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: '0.5rem',
                  color: '#6ee7b7',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <CheckCircle2 size={16} />
                <span>Downloading CTC Pro-Suite for {downloadTriggered}... Your placement drive client will be ready in seconds.</span>
              </div>
            )}
          </div>

          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={badgeSoftware}
              alt="CTC Pro-Suite Environment"
              style={{
                maxWidth: '220px',
                height: 'auto',
                filter: 'drop-shadow(0 10px 24px rgba(124, 58, 237, 0.3))',
              }}
            />
          </div>
        </div>

        {/* 3 OS Download Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {/* Windows */}
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  marginBottom: '1.25rem',
                }}
              >
                <Monitor size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                Windows 10 / 11
              </h3>
              <p style={{ color: '#71717a', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
                64-bit installer (.exe / .msi) • 48.2 MB
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Native DirectX hardware acceleration with automated background application lock for high-stakes screening.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDownload('Windows')}
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={16} />
              <span>Download for Windows</span>
            </button>
          </div>

          {/* macOS */}
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fafafa',
                  marginBottom: '1.25rem',
                }}
              >
                <Apple size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                macOS Monterey or Newer
              </h3>
              <p style={{ color: '#71717a', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
                Universal Binary (Apple Silicon M1/M2/M3 &amp; Intel) • 52.4 MB
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Optimized with Metal graphics pipeline and macOS permissions architecture for microphone and camera checks.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDownload('macOS')}
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={16} />
              <span>Download for macOS</span>
            </button>
          </div>

          {/* Linux */}
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  marginBottom: '1.25rem',
                }}
              >
                <Terminal size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                Linux (Debian / Ubuntu / RHEL)
              </h3>
              <p style={{ color: '#71717a', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
                Universal .AppImage &amp; .deb package • 45.1 MB
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Designed for college computer science labs with Wayland and X11 display server sandboxing compatibility.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDownload('Linux')}
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={16} />
              <span>Download for Linux</span>
            </button>
          </div>
        </div>

        {/* System Requirements Checklist */}
        <div
          style={{
            backgroundColor: '#141418',
            border: '1px solid #26262a',
            borderRadius: '1.25rem',
            padding: '2.5rem',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.5rem' }}>
            System Requirements &amp; Pre-Drive Checklist
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: <Cpu size={20} color="#a78bfa" />,
                title: 'Processor',
                desc: 'Dual-core 1.8 GHz or faster (Intel Core i3/i5/i7, AMD Ryzen, Apple M-Series)',
              },
              {
                icon: <HardDrive size={20} color="#10b981" />,
                title: 'RAM & Storage',
                desc: 'Minimum 4 GB RAM (8 GB recommended); 500 MB free disk space for offline cache buffer',
              },
              {
                icon: <Camera size={20} color="#06b6d4" />,
                title: 'Peripherals',
                desc: 'Built-in or USB Webcam (720p minimum) and microphone for AI identity verification',
              },
              {
                icon: <Wifi size={20} color="#f59e0b" />,
                title: 'Network Connection',
                desc: '1.5 Mbps stable connection. Includes automatic offline retry during sudden campus Wi-Fi drops',
              },
            ].map((req, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ flexShrink: 0, marginTop: '0.15rem' }}>{req.icon}</div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#fafafa', marginBottom: '0.25rem' }}>
                    {req.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#a1a1aa', lineHeight: 1.5 }}>
                    {req.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
