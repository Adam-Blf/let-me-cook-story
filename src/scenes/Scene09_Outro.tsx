// Scène 09 · outro · wordmark + CTA + mascotte wave
import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';

export const Scene09Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cookyScale = spring({ frame, fps, config: { damping: 11 }, durationInFrames: 30 });
  const wordmarkOp = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: 'clamp' });
  const wordmarkY = interpolate(frame, [10, 30], [30, 0], { extrapolateRight: 'clamp' });
  const taglineOp = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp' });
  const ctaScale = spring({ frame: frame - 50, fps, config: { damping: 10 }, durationInFrames: 20 });

  return (
    <AbsoluteFill
      style={{
        background: tokens.ink,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 50,
        padding: 80,
      }}
    >
      <div style={{ transform: `scale(${cookyScale})` }}>
        <Cooky size={340} pose="wave" />
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
            fontSize: 170,
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
          fontFamily: fontFamily.sans,
          fontSize: 34,
          color: tokens.inkFaint,
          textAlign: 'center',
          maxWidth: 900,
          lineHeight: 1.3,
        }}
      >
        Partage · Cooky extrait · Tu cuisines.
      </div>

      <div
        style={{
          transform: `scale(${ctaScale})`,
          padding: '28px 56px',
          background: tokens.saffron,
          borderRadius: 999,
          fontFamily: fontFamily.sans,
          fontSize: 32,
          color: tokens.espresso,
          fontWeight: 600,
          letterSpacing: 0.5,
        }}
      >
        Bientôt sur l'App Store + Play Store
      </div>
    </AbsoluteFill>
  );
};
