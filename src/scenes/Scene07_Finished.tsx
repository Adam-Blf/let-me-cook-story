// Scène 07 · bon appétit · Cooky happy + rating + compteur usage
import React from 'react';
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { StoryLayout } from '../StoryLayout';

export const Scene07Finished: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cookyScale = spring({ frame, fps, config: { damping: 10 }, durationInFrames: 28 });
  const titleOp = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const titleY = interpolate(frame, [15, 35], [30, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const counterOp = interpolate(frame, [55, 75], [0, 1], { extrapolateRight: 'clamp' });

  const starsPop = [0, 1, 2, 3, 4].map((i) =>
    spring({ frame: frame - (38 + i * 5), fps, config: { damping: 10 }, durationInFrames: 22 })
  );

  return (
    <StoryLayout
      bg={`radial-gradient(ellipse at 50% 45%, ${tokens.saffronSoft}, ${tokens.cream})`}
      gap={40}
    >
      <div style={{ transform: `scale(${cookyScale})` }}>
        <Cooky size={420} pose="happy" />
      </div>

      <div style={{ opacity: titleOp, transform: `translateY(${titleY}px)`, textAlign: 'center' }}>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 150,
            color: tokens.ink,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Bon appétit.
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        {starsPop.map((s, i) => (
          <div key={i} style={{ transform: `scale(${s})`, fontSize: 68, color: tokens.saffron }}>
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
          padding: '16px 30px',
          borderRadius: 999,
        }}
      >
        <div style={{ fontFamily: fontFamily.mono, fontSize: 36, color: tokens.espresso, fontWeight: 700 }}>
          5×
        </div>
        <div
          style={{
            fontFamily: fontFamily.sans,
            fontSize: 22,
            color: tokens.espresso,
            letterSpacing: 1,
          }}
        >
          cuisinée ce mois-ci
        </div>
      </div>
    </StoryLayout>
  );
};
