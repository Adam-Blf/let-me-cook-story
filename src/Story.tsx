// Composition principale · 35 secondes à 30 fps = 1050 frames
// Les 9 scènes ont chacune une fade envelope via useFadeEnvelope → coupures lissées
// Bande son · Carefree par Kevin MacLeod · CC-BY 4.0 (incompetech.com)
import React from 'react';
import { AbsoluteFill, Audio, Series, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { Scene01Intro } from './scenes/Scene01_Intro';
import { Scene02Feed } from './scenes/Scene02_Feed';
import { Scene03Share } from './scenes/Scene03_Share';
import { Scene04Extraction } from './scenes/Scene04_Extraction';
import { Scene05Recipe } from './scenes/Scene05_Recipe';
import { Scene06CookMode } from './scenes/Scene06_CookMode';
import { Scene07Finished } from './scenes/Scene07_Finished';
import { Scene08Library } from './scenes/Scene08_Library';
import { Scene09Outro } from './scenes/Scene09_Outro';

export const STORY_FPS = 30;
export const STORY_DURATION_FRAMES = 1050; // 35 secondes

export const SCENES = [
  { name: 'Intro', Component: Scene01Intro, durationInFrames: 105 },
  { name: 'Feed', Component: Scene02Feed, durationInFrames: 120 },
  { name: 'Share', Component: Scene03Share, durationInFrames: 90 },
  { name: 'Extraction', Component: Scene04Extraction, durationInFrames: 105 },
  { name: 'Recipe', Component: Scene05Recipe, durationInFrames: 165 },
  { name: 'CookMode', Component: Scene06CookMode, durationInFrames: 105 },
  { name: 'Finished', Component: Scene07Finished, durationInFrames: 105 },
  { name: 'Library', Component: Scene08Library, durationInFrames: 135 },
  { name: 'Outro', Component: Scene09Outro, durationInFrames: 120 },
];

// Volume enveloppe · fade in 0.5 s · fade out 1 s · niveau nominal 0.55 (pas trop présent)
function useAudioVolume() {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(
    frame,
    [STORY_DURATION_FRAMES - 30, STORY_DURATION_FRAMES],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  return Math.min(fadeIn, fadeOut) * 0.55;
}

function AudioTrack() {
  const volume = useAudioVolume();
  return <Audio src={staticFile('audio/carefree.mp3')} volume={volume} />;
}

export const Story: React.FC = () => {
  return (
    <AbsoluteFill>
      <AudioTrack />
      <Series>
        {SCENES.map(({ name, Component, durationInFrames }) => (
          <Series.Sequence key={name} durationInFrames={durationInFrames}>
            <Component />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
