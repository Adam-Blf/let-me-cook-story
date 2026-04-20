import React from 'react';
import { Composition, Folder } from 'remotion';
import { Story, STORY_DURATION_FRAMES, STORY_FPS, SCENES } from './Story';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Story portrait 9:16 pour Insta/TikTok/Reels · 45s */}
      <Composition
        id="story"
        component={Story}
        durationInFrames={STORY_DURATION_FRAMES}
        fps={STORY_FPS}
        width={1080}
        height={1920}
      />

      {/* Version carrée 1:1 pour feed Insta · même contenu */}
      <Composition
        id="story-square"
        component={Story}
        durationInFrames={STORY_DURATION_FRAMES}
        fps={STORY_FPS}
        width={1080}
        height={1080}
      />

      {/* Scènes individuelles pour itérer plus vite dans le studio */}
      <Folder name="scenes">
        {SCENES.map(({ name, Component, durationInFrames }) => (
          <Composition
            key={name}
            id={`scene-${name.toLowerCase()}`}
            component={Component}
            durationInFrames={durationInFrames}
            fps={STORY_FPS}
            width={1080}
            height={1920}
          />
        ))}
      </Folder>
    </>
  );
};
