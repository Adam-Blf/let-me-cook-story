// Scène 01 · cold open · Cooky apparaît, wordmark "Let Me Cook"
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { StoryLayout } from '../StoryLayout';

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cookyScale = spring({ frame, fps, config: { damping: 12 }, durationInFrames: 25 });
  const cookyRotate = interpolate(frame, [0, 25], [-20, 0], { extrapolateRight: 'clamp' });
  const titleOpacity = interpolate(frame, [18, 38], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [18, 38], [30, 0], { extrapolateRight: 'clamp' });
  const taglineOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <StoryLayout
      bg={`radial-gradient(ellipse at 30% 30%, ${tokens.saffronSoft} 0%, ${tokens.cream} 60%)`}
      gap={36}
    >
      <div style={{ transform: `scale(${cookyScale}) rotate(${cookyRotate}deg)` }}>
        <Cooky size={440} pose="wave" />
      </div>

      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: 'center' }}>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 130,
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
          fontFamily: fontFamily.serifItalic,
          fontSize: 40,
          color: tokens.saffron,
          textAlign: 'center',
          maxWidth: 900,
          lineHeight: 1.15,
          padding: '0 60px',
        }}
      >
        Parce que cuisiner c'est s'amuser.
      </div>
    </StoryLayout>
  );
};
