// Scène 06 · cook mode dark · étape en cours, timer, typo géante
import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';

export const Scene06CookMode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stepOp = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const timerProgress = spring({ frame, fps, durationInFrames: 60, config: { damping: 20 } });
  const displayTimer = Math.max(0, 9 - Math.floor((frame / fps) * 3.6));

  const cookyBounce = Math.sin((frame / fps) * 3) * 6;

  return (
    <AbsoluteFill
      style={{
        background: tokens.espresso,
        flexDirection: 'column',
        padding: 80,
      }}
    >
      {/* top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 24,
            letterSpacing: 4,
            color: tokens.saffron,
            textTransform: 'uppercase',
          }}
        >
          COOK MODE · Étape 4/6
        </div>
        <div style={{ transform: `translateY(${cookyBounce}px)` }}>
          <Cooky size={110} pose="cooking" />
        </div>
      </div>

      {/* step text */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: stepOp,
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 110,
            color: tokens.cream,
            letterSpacing: -1,
            lineHeight: 1.05,
          }}
        >
          Cuis les pâtes al dente.
        </div>
        <div
          style={{
            fontFamily: fontFamily.sans,
            fontSize: 36,
            color: tokens.inkFaint,
            marginTop: 40,
          }}
        >
          Garde 1 tasse d'eau de cuisson.
        </div>
      </div>

      {/* timer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 30,
          padding: '28px 40px',
          background: tokens.espressoCard,
          borderRadius: 28,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: tokens.tomato,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: fontFamily.mono,
            fontSize: 36,
            color: '#fff',
            fontWeight: 700,
          }}
        >
          {displayTimer}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: fontFamily.mono,
              fontSize: 18,
              letterSpacing: 3,
              color: tokens.tomato,
              textTransform: 'uppercase',
            }}
          >
            MINUTEUR
          </div>
          <div style={{ fontFamily: fontFamily.sans, fontSize: 26, color: tokens.cream, marginTop: 4 }}>
            {displayTimer} minutes restantes
          </div>
          <div
            style={{
              height: 6,
              width: '100%',
              background: `${tokens.cream}20`,
              borderRadius: 3,
              marginTop: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(1 - timerProgress) * 100}%`,
                background: tokens.tomato,
              }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
