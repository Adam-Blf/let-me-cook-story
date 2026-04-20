// Scène 10 · guide installation PWA · iPhone Safari + Android Chrome
import React from 'react';
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { StoryLayout } from '../StoryLayout';

export const Scene10Install: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOp = interpolate(frame, [0, 22], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const iosY = interpolate(frame, [20, 45], [40, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const iosOp = interpolate(frame, [20, 45], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  const androidY = interpolate(frame, [50, 75], [40, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const androidOp = interpolate(frame, [50, 75], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  const urlScale = spring({ frame: frame - 80, fps, config: { damping: 11 }, durationInFrames: 25 });
  const urlGlow = Math.sin((frame / fps) * 2) * 3;

  return (
    <StoryLayout bg={tokens.cream} gap={22} align="stretch" padding={40}>
      <div style={{ textAlign: 'center', opacity: titleOp }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 16,
            letterSpacing: 4,
            color: tokens.saffron,
            textTransform: 'uppercase',
          }}
        >
          INSTALLE EN 10 SECONDES
        </div>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 64,
            color: tokens.ink,
            letterSpacing: -1.5,
            lineHeight: 1,
            marginTop: 8,
          }}
        >
          Pas d&apos;App Store.
        </div>
      </div>

      {/* iPhone steps */}
      <div
        style={{
          opacity: iosOp,
          transform: `translateY(${iosY}px)`,
          background: tokens.paper,
          borderRadius: 24,
          padding: 24,
          border: `2px solid ${tokens.line}`,
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 13,
            letterSpacing: 2,
            color: tokens.inkMuted,
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          iPhone · Safari
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {IOS_STEPS.map((s, i) => (
            <Step key={i} index={i + 1} label={s.label} icon={s.icon} />
          ))}
        </div>
      </div>

      {/* Android steps */}
      <div
        style={{
          opacity: androidOp,
          transform: `translateY(${androidY}px)`,
          background: tokens.paper,
          borderRadius: 24,
          padding: 24,
          border: `2px solid ${tokens.line}`,
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 13,
            letterSpacing: 2,
            color: tokens.inkMuted,
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Android · Chrome
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ANDROID_STEPS.map((s, i) => (
            <Step key={i} index={i + 1} label={s.label} icon={s.icon} />
          ))}
        </div>
      </div>

      {/* URL */}
      <div
        style={{
          transform: `scale(${urlScale})`,
          padding: '18px 28px',
          background: tokens.saffron,
          borderRadius: 999,
          textAlign: 'center',
          alignSelf: 'center',
          boxShadow: `0 ${urlGlow + 10}px ${urlGlow + 20}px ${tokens.saffron}44`,
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 22,
            color: tokens.espresso,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          let-me-cook-v1.vercel.app
        </div>
      </div>
    </StoryLayout>
  );
};

const IOS_STEPS = [
  { label: 'Ouvre le lien', icon: '🔗' },
  { label: 'Bouton Partager ·', icon: '⇪' },
  { label: 'Sur l\'écran d\'accueil', icon: '＋' },
];

const ANDROID_STEPS = [
  { label: 'Ouvre le lien', icon: '🔗' },
  { label: 'Menu ⋮', icon: '⋮' },
  { label: 'Ajouter à l\'écran d\'accueil', icon: '＋' },
];

function Step({ index, label, icon }: { index: number; label: string; icon: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: tokens.saffronSoft,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: fontFamily.mono,
          fontSize: 13,
          fontWeight: 700,
          color: tokens.espresso,
          flexShrink: 0,
        }}
      >
        {index}
      </div>
      <div
        style={{
          fontFamily: fontFamily.sans,
          fontSize: 22,
          color: tokens.ink,
          flex: 1,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 28, opacity: 0.7 }}>{icon}</div>
    </div>
  );
}
