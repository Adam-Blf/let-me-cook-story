// Scène 07 · bon appétit · Cooky happy + rating + compteur usage
import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';

export const Scene07Finished: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cookyScale = spring({ frame, fps, config: { damping: 9 }, durationInFrames: 22 });
  const titleOp = interpolate(frame, [12, 28], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [12, 28], [30, 0], { extrapolateRight: 'clamp' });
  const counterOp = interpolate(frame, [48, 65], [0, 1], { extrapolateRight: 'clamp' });

  const starsPop = [0, 1, 2, 3, 4].map((i) =>
    spring({ frame: frame - (30 + i * 4), fps, config: { damping: 10 }, durationInFrames: 18 })
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, ${tokens.saffronSoft}, ${tokens.cream})`,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 50,
      }}
    >
      <div style={{ transform: `scale(${cookyScale})` }}>
        <Cooky size={500} pose="happy" />
      </div>

      <div style={{ opacity: titleOp, transform: `translateY(${titleY}px)`, textAlign: 'center' }}>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 160,
            color: tokens.ink,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Bon appétit.
        </div>
      </div>

      {/* rating stars */}
      <div style={{ display: 'flex', gap: 14 }}>
        {starsPop.map((s, i) => (
          <div key={i} style={{ transform: `scale(${s})`, fontSize: 72, color: tokens.saffron }}>
            ★
          </div>
        ))}
      </div>

      <div
        style={{
          opacity: counterOp,
          display: 'flex',
          alignItems: 'baseline',
          gap: 14,
          background: tokens.saffronSoft,
          padding: '18px 32px',
          borderRadius: 999,
        }}
      >
        <div style={{ fontFamily: fontFamily.mono, fontSize: 40, color: tokens.espresso, fontWeight: 700 }}>
          5×
        </div>
        <div
          style={{
            fontFamily: fontFamily.sans,
            fontSize: 24,
            color: tokens.espresso,
            letterSpacing: 1,
          }}
        >
          cuisinée ce mois-ci
        </div>
      </div>
    </AbsoluteFill>
  );
};
