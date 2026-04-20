// Scène 04 · extraction loader · Cooky regarde la vidéo, barre progresse
import React from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { StoryLayout } from '../StoryLayout';

const STAGES = ['Lecture du post', 'Analyse vidéo', 'Transcription audio', 'Structuration recette'];

export const Scene04Extraction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames - 15], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
  const stage = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));
  const pulse = Math.sin((frame / fps) * 3.5) * 4;

  return (
    <StoryLayout bg={tokens.cream} gap={36}>
      <div
        style={{
          fontFamily: fontFamily.mono,
          fontSize: 20,
          letterSpacing: 4,
          color: tokens.saffron,
          textTransform: 'uppercase',
        }}
      >
        EXTRACTION EN COURS
      </div>

      <div style={{ transform: `translateY(${pulse}px)` }}>
        <Cooky size={320} pose="watching" />
      </div>

      <div
        style={{
          width: 680,
          height: 12,
          background: tokens.creamSoft,
          borderRadius: 8,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progress * 100}%`,
            background: `linear-gradient(90deg, ${tokens.saffron}, ${tokens.tomato})`,
            borderRadius: 8,
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
        {STAGES.map((label, i) => (
          <StageRow key={label} label={label} state={i < stage ? 'done' : i === stage ? 'active' : 'pending'} />
        ))}
      </div>
    </StoryLayout>
  );
};

function StageRow({ label, state }: { label: string; state: 'done' | 'active' | 'pending' }) {
  const color = state === 'done' ? tokens.olive : state === 'active' ? tokens.ink : tokens.inkFaint;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background:
            state === 'done' ? tokens.olive : state === 'active' ? tokens.saffron : tokens.inkFaint,
        }}
      />
      <div
        style={{
          fontFamily: fontFamily.sans,
          fontSize: 22,
          color,
          fontWeight: state === 'active' ? 600 : 400,
        }}
      >
        {label}
      </div>
    </div>
  );
}
