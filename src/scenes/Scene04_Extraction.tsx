// Scène 04 · extraction loader · Cooky regarde la vidéo, barre progresse
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { Cooky } from '../Cooky';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';

const STAGES = ['Lecture du post', 'Analyse vidéo', 'Transcription audio', 'Structuration recette'];

export const Scene04Extraction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames - 10], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  const stage = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));

  const pulse = Math.sin((frame / fps) * 4) * 3;

  return (
    <AbsoluteFill
      style={{
        background: tokens.cream,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 48,
        padding: 60,
      }}
    >
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
        <Cooky size={420} pose="watching" />
      </div>

      {/* progress bar */}
      <div
        style={{
          width: 700,
          height: 14,
          background: tokens.creamSoft,
          borderRadius: 10,
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
            borderRadius: 10,
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
        {STAGES.map((label, i) => (
          <StageRow key={label} label={label} state={i < stage ? 'done' : i === stage ? 'active' : 'pending'} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

function StageRow({ label, state }: { label: string; state: 'done' | 'active' | 'pending' }) {
  const color =
    state === 'done' ? tokens.olive : state === 'active' ? tokens.ink : tokens.inkFaint;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: state === 'done' ? tokens.olive : state === 'active' ? tokens.saffron : tokens.inkFaint,
        }}
      />
      <div
        style={{
          fontFamily: fontFamily.sans,
          fontSize: 24,
          color,
          fontWeight: state === 'active' ? 600 : 400,
        }}
      >
        {label}
      </div>
    </div>
  );
}
