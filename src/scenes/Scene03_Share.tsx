// Scène 03 · share sheet iOS · preview de la vraie photo carbonara
import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { PhoneFrame } from '../PhoneFrame';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';

export const Scene03Share: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sheetY = spring({ frame, fps, config: { damping: 16 }, durationInFrames: 25 });
  const headline = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const tapFrame = frame - 30;
  const tapScale = spring({
    frame: tapFrame,
    fps,
    config: { damping: 8, stiffness: 300, mass: 0.5 },
    durationInFrames: 20,
  });
  const tapOpacity = interpolate(frame, [30, 42], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: tokens.ink,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          fontFamily: fontFamily.serifItalic,
          fontSize: 92,
          color: tokens.cream,
          textAlign: 'center',
          letterSpacing: -1,
          maxWidth: 900,
          lineHeight: 1.05,
          opacity: headline,
          marginBottom: 60,
        }}
      >
        Tu partages.<br />Cooky s'en occupe.
      </div>

      <div style={{ transform: `translateY(${(1 - sheetY) * 500}px)` }}>
        <PhoneFrame width={520}>
          <div style={{ height: '100%', background: tokens.cream, display: 'flex', flexDirection: 'column' }}>
            {/* preview reel */}
            <div
              style={{
                height: 260,
                margin: 20,
                marginTop: 90,
                borderRadius: 18,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Img src={foodPhotos.carbonara} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.7) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  fontFamily: fontFamily.mono,
                  fontSize: 14,
                  color: '#fff',
                  letterSpacing: 2,
                }}
              >
                TIKTOK · @nonnaroma
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  color: '#fff',
                  fontFamily: fontFamily.sans,
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Carbonara crémeuse
              </div>
            </div>

            {/* share targets */}
            <div style={{ padding: '10px 20px 0', display: 'flex', gap: 12 }}>
              {['Airdrop', 'Messages', 'Mail', 'WhatsApp'].map((n) => (
                <ShareBubble key={n} label={n} />
              ))}
            </div>

            {/* app list */}
            <div style={{ margin: '14px 20px 20px', background: tokens.paper, borderRadius: 18, padding: '14px 0' }}>
              {['Insta Story', 'Messages', 'Notes', 'Let Me Cook'].map((n, i) => (
                <AppRow key={n} label={n} highlight={i === 3} tapScale={i === 3 ? tapScale : 0} tapOp={i === 3 ? tapOpacity : 0} />
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    </AbsoluteFill>
  );
};

function ShareBubble({ label }: { label: string }) {
  return (
    <div
      style={{
        width: 76,
        height: 90,
        background: tokens.creamSoft,
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: fontFamily.sans,
        fontSize: 10,
        color: tokens.inkMuted,
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: '50%',
          background: tokens.saffronSoft,
          marginBottom: 6,
        }}
      />
      {label}
    </div>
  );
}

function AppRow({
  label,
  highlight,
  tapScale,
  tapOp,
}: {
  label: string;
  highlight: boolean;
  tapScale: number;
  tapOp: number;
}) {
  return (
    <div
      style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        background: highlight ? `${tokens.saffronSoft}88` : 'transparent',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: highlight ? tokens.saffron : tokens.inkFaint,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {highlight && (
            <div style={{ width: 26, height: 26 }}>
              <Cooky size={26} pose="wave" />
            </div>
          )}
        </div>
        <div
          style={{
            fontFamily: fontFamily.sans,
            fontSize: 16,
            color: tokens.ink,
            fontWeight: highlight ? 600 : 400,
          }}
        >
          {label}
        </div>
      </div>

      {highlight && (
        <div
          style={{
            position: 'absolute',
            right: 24,
            top: '50%',
            transform: `translateY(-50%) scale(${tapScale})`,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: `2px solid ${tokens.saffron}`,
            opacity: tapOp,
          }}
        />
      )}
    </div>
  );
}
