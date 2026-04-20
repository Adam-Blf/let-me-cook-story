// Scène 01 · cold open · Cooky apparaît, wordmark "Let Me Cook"
import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cookyScale = spring({ frame, fps, config: { damping: 12 } });
  const cookyRotate = interpolate(frame, [0, 60], [-20, 0], { extrapolateRight: 'clamp' });
  const titleOpacity = interpolate(frame, [40, 70], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [40, 70], [30, 0], {
    extrapolateRight: 'clamp',
  });
  const taglineOpacity = interpolate(frame, [80, 110], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${tokens.saffronSoft} 0%, ${tokens.cream} 60%)`,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 40,
      }}
    >
      <div style={{ transform: `scale(${cookyScale}) rotate(${cookyRotate}deg)` }}>
        <Cooky size={480} pose="wave" />
      </div>

      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: 'center' }}>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 140,
            color: tokens.ink,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Let Me Cook
        </div>
      </div>

      <div
        style={{
          opacity: taglineOpacity,
          fontFamily: fontFamily.mono,
          fontSize: 22,
          color: tokens.inkMuted,
          letterSpacing: 4,
          textTransform: 'uppercase',
        }}
      >
        · Cooky, le petit chef ·
      </div>
    </AbsoluteFill>
  );
};
