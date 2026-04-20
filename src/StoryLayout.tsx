// StoryLayout · respect des safe zones Insta/TikTok/Reels
// Top : 260 px réservés (avatar + nom + temps + menu)
// Bottom : 340 px réservés (send, reply, like, camera)
// Zone safe centrale : 1080 × 1320 px
import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFadeEnvelope } from './useFadeEnvelope';

export const SAFE_TOP = 260;
export const SAFE_BOTTOM = 340;
export const SAFE_HEIGHT = 1920 - SAFE_TOP - SAFE_BOTTOM; // 1320

export const StoryLayout: React.FC<{
  children: React.ReactNode;
  bg?: string;
  background?: React.ReactNode;
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'stretch';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  gap?: number;
  padding?: number;
  /** Désactive l'enveloppe fade (utile si on gère déjà des transitions complexes). */
  noFade?: boolean;
}> = ({ children, bg, background, align = 'center', justify = 'center', gap = 0, padding = 0, noFade }) => {
  const envelope = useFadeEnvelope(12);
  const opacity = noFade ? 1 : envelope;

  return (
    <AbsoluteFill style={{ background: bg, opacity }}>
      {background}
      <div
        style={{
          position: 'absolute',
          top: SAFE_TOP,
          bottom: SAFE_BOTTOM,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: align,
          justifyContent: justify,
          gap,
          padding,
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
