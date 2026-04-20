// Composition principale · 25 secondes à 30 fps = 750 frames
// 9 scènes tight pour story Insta teaser
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
export const STORY_DURATION_FRAMES = 750; // 25 secondes

export const SCENES = [
  { name: 'Intro', Component: Scene01Intro, durationInFrames: 75 },
  { name: 'Feed', Component: Scene02Feed, durationInFrames: 90 },
  { name: 'Share', Component: Scene03Share, durationInFrames: 60 },
  { name: 'Extraction', Component: Scene04Extraction, durationInFrames: 75 },
  { name: 'Recipe', Component: Scene05Recipe, durationInFrames: 120 },
  { name: 'CookMode', Component: Scene06CookMode, durationInFrames: 75 },
  { name: 'Finished', Component: Scene07Finished, durationInFrames: 75 },
  { name: 'Library', Component: Scene08Library, durationInFrames: 90 },
  { name: 'Outro', Component: Scene09Outro, durationInFrames: 90 },
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
