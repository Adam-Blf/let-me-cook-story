// Scène 06 · cook mode dark · étape en cours, timer, typo géante (safe zone)
import React from 'react';
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { StoryLayout } from '../StoryLayout';

export const Scene06CookMode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stepOp = interpolate(frame, [0, 22], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const timerProgress = spring({ frame, fps, durationInFrames: 80, config: { damping: 24 } });
  const displayTimer = Math.max(0, 9 - Math.floor((frame / fps) * 2.6));
  const cookyBounce = Math.sin((frame / fps) * 2.8) * 5;

  return (
    <StoryLayout bg={tokens.espresso} padding={60} justify="space-between" align="stretch" gap={40}>
      {/* top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 20,
            letterSpacing: 4,
            color: tokens.saffron,
            textTransform: 'uppercase',
          }}
        >
          COOK MODE · 4/6
        </div>
        <div style={{ transform: `translateY(${cookyBounce}px)` }}>
          <Cooky size={100} pose="cooking" />
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
            fontSize: 92,
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
            fontSize: 30,
            color: tokens.inkFaint,
            marginTop: 30,
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
          gap: 24,
          padding: '22px 30px',
          background: tokens.espressoCard,
          borderRadius: 24,
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            background: tokens.tomato,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: fontFamily.mono,
            fontSize: 32,
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
              fontSize: 16,
              letterSpacing: 3,
              color: tokens.tomato,
              textTransform: 'uppercase',
            }}
          >
            MINUTEUR
          </div>
          <div style={{ fontFamily: fontFamily.sans, fontSize: 22, color: tokens.cream, marginTop: 3 }}>
            {displayTimer} min restantes
          </div>
          <div
            style={{
              height: 5,
              width: '100%',
              background: `${tokens.cream}22`,
              borderRadius: 3,
              marginTop: 10,
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
    </StoryLayout>
  );
};
