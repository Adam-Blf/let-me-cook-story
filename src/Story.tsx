// Composition principale · 35 secondes à 30 fps = 1050 frames
// Les 9 scènes ont chacune une fade envelope via useFadeEnvelope → coupures lissées
import React from 'react';
import { AbsoluteFill, Series } from 'remotion';
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
  { name: 'Intro', Component: Scene01Intro, durationInFrames: 105 },   // 3.5s
  { name: 'Feed', Component: Scene02Feed, durationInFrames: 120 },     // 4s
  { name: 'Share', Component: Scene03Share, durationInFrames: 90 },    // 3s
  { name: 'Extraction', Component: Scene04Extraction, durationInFrames: 105 }, // 3.5s
  { name: 'Recipe', Component: Scene05Recipe, durationInFrames: 165 }, // 5.5s
  { name: 'CookMode', Component: Scene06CookMode, durationInFrames: 105 }, // 3.5s
  { name: 'Finished', Component: Scene07Finished, durationInFrames: 105 },  // 3.5s
  { name: 'Library', Component: Scene08Library, durationInFrames: 135 },    // 4.5s
  { name: 'Outro', Component: Scene09Outro, durationInFrames: 120 },        // 4s
];

export const Story: React.FC = () => {
  return (
    <AbsoluteFill>
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
