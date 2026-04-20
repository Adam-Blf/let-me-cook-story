// Scène 09 · outro · wordmark + CTA (safe zone)
import React from 'react';
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { StoryLayout } from '../StoryLayout';

export const Scene09Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cookyScale = spring({ frame, fps, config: { damping: 11 }, durationInFrames: 30 });
  const wordmarkOp = interpolate(frame, [10, 32], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const wordmarkY = interpolate(frame, [10, 32], [30, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const taglineOp = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: 'clamp' });
  const ctaScale = spring({ frame: frame - 55, fps, config: { damping: 11 }, durationInFrames: 25 });
  const ctaGlow = Math.sin((frame / fps) * 2) * 4;

  return (
    <StoryLayout bg={tokens.ink} gap={36}>
      <div style={{ transform: `scale(${cookyScale})` }}>
        <Cooky size={300} pose="wave" />
      </div>

      <div
        style={{
          opacity: wordmarkOp,
          transform: `translateY(${wordmarkY}px)`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 150,
            color: tokens.cream,
            letterSpacing: -3,
            lineHeight: 0.95,
          }}
        >
          Let Me Cook
        </div>
      </div>

      <div
        style={{
          opacity: taglineOp,
          fontFamily: fontFamily.serifItalic,
          fontSize: 46,
          color: tokens.saffronSoft,
          textAlign: 'center',
          maxWidth: 900,
          lineHeight: 1.2,
          padding: '0 60px',
        }}
      >
        Parce que cuisiner c'est s'amuser.
      </div>

      <div
        style={{
          transform: `scale(${ctaScale})`,
          padding: '22px 44px',
          background: tokens.saffron,
          borderRadius: 999,
          fontFamily: fontFamily.sans,
          fontSize: 26,
          color: tokens.espresso,
          fontWeight: 600,
          letterSpacing: 0.5,
          boxShadow: `0 ${ctaGlow + 12}px ${ctaGlow + 24}px ${tokens.saffron}44`,
        }}
      >
        Bientôt sur iOS + Android
      </div>
    </StoryLayout>
  );
};
