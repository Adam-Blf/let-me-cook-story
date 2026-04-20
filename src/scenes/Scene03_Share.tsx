// Scène 03 · share sheet iOS · preview de la vraie photo carbonara
import React from 'react';
import { Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { PhoneFrame } from '../PhoneFrame';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';
import { StoryLayout } from '../StoryLayout';

export const Scene03Share: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sheetY = spring({ frame, fps, config: { damping: 20 }, durationInFrames: 40 });
  const headline = interpolate(frame, [0, 22], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const tapScale = spring({
    frame: frame - 50,
    fps,
    config: { damping: 10, stiffness: 250, mass: 0.5 },
    durationInFrames: 30,
  });
  const tapOpacity = interpolate(frame, [50, 65], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <StoryLayout bg={tokens.ink} gap={40} justify="center">
      <div
        style={{
          fontFamily: fontFamily.serifItalic,
          fontSize: 82,
          color: tokens.cream,
          textAlign: 'center',
          letterSpacing: -1,
          maxWidth: 900,
          lineHeight: 1.05,
          opacity: headline,
          padding: '0 40px',
        }}
      >
        Tu partages.<br />Cooky s'en occupe.
      </div>

      <div style={{ transform: `translateY(${(1 - sheetY) * 400}px)` }}>
        <PhoneFrame width={460}>
          <div style={{ height: '100%', background: tokens.cream, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                height: 210,
                margin: 18,
                marginTop: 84,
                borderRadius: 16,
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
                  top: 14,
                  left: 14,
                  fontFamily: fontFamily.mono,
                  fontSize: 12,
                  color: '#fff',
                  letterSpacing: 2,
                }}
              >
                TIKTOK · @nonnaroma
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  left: 14,
                  color: '#fff',
                  fontFamily: fontFamily.sans,
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Carbonara crémeuse
              </div>
            </div>

            <div style={{ padding: '8px 18px 0', display: 'flex', gap: 10 }}>
              {['Airdrop', 'Messages', 'Mail', 'WhatsApp'].map((n) => (
                <ShareBubble key={n} label={n} />
              ))}
            </div>

            <div style={{ margin: '12px 18px 18px', background: tokens.paper, borderRadius: 16, padding: '10px 0' }}>
              {['Insta Story', 'Messages', 'Notes', 'Let Me Cook'].map((n, i) => (
                <AppRow
                  key={n}
                  label={n}
                  highlight={i === 3}
                  tapScale={i === 3 ? tapScale : 0}
                  tapOp={i === 3 ? tapOpacity : 0}
                />
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    </StoryLayout>
  );
};

function ShareBubble({ label }: { label: string }) {
  return (
    <div
      style={{
        width: 66,
        height: 80,
        background: tokens.creamSoft,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: fontFamily.sans,
        fontSize: 9,
        color: tokens.inkMuted,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
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
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        background: highlight ? `${tokens.saffronSoft}aa` : 'transparent',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: highlight ? tokens.saffron : tokens.inkFaint,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {highlight && <Cooky size={24} pose="wave" />}
        </div>
        <div
          style={{
            fontFamily: fontFamily.sans,
            fontSize: 14,
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
            right: 20,
            top: '50%',
            transform: `translateY(-50%) scale(${tapScale})`,
            width: 34,
            height: 34,
            borderRadius: '50%',
            border: `2px solid ${tokens.saffron}`,
            opacity: tapOp,
          }}
        />
      )}
    </div>
  );
}
