// Scène 02 · scroll social feed · vraies photos Pexels dans safe zone
import React from 'react';
import { Img, interpolate, useCurrentFrame } from 'remotion';
import { PhoneFrame } from '../PhoneFrame';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';
import { StoryLayout } from '../StoryLayout';

export const Scene02Feed: React.FC = () => {
  const frame = useCurrentFrame();

  const scroll = interpolate(frame, [15, 75], [0, -400], { extrapolateRight: 'clamp' });
  const phoneSlide = interpolate(frame, [0, 18], [200, 0], { extrapolateRight: 'clamp' });
  const headlineOp = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <StoryLayout bg={tokens.creamSoft} gap={30} justify="flex-start" padding={30}>
      <div
        style={{
          fontFamily: fontFamily.serifItalic,
          fontSize: 78,
          color: tokens.ink,
          letterSpacing: -1,
          textAlign: 'center',
          lineHeight: 1.05,
          maxWidth: 920,
          opacity: headlineOp,
          padding: '0 40px',
        }}
      >
        Tu tombes sur une vidéo qui te fait saliver.
      </div>

      <div style={{ transform: `translateY(${phoneSlide}px)` }}>
        <PhoneFrame width={460}>
          <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div style={{ transform: `translateY(${scroll}px)`, paddingTop: 100 }}>
              {FEED_ITEMS.map((item, i) => (
                <FeedPost key={i} {...item} />
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                top: 110,
                left: 20,
                fontFamily: fontFamily.mono,
                fontSize: 14,
                color: '#fff',
                mixBlendMode: 'difference',
                letterSpacing: 3,
              }}
            >
              TIKTOK
            </div>
          </div>
        </PhoneFrame>
      </div>
    </StoryLayout>
  );
};

const FEED_ITEMS = [
  { photo: foodPhotos.tacos, title: '@tacomaria', caption: 'Tacos al pastor', duration: '0:22' },
  { photo: foodPhotos.carbonara, title: '@nonnaroma', caption: 'Carbonara crémeuse', duration: '0:47', active: true },
  { photo: foodPhotos.salad, title: '@greenkitchen', caption: 'Salade feta', duration: '0:18' },
  { photo: foodPhotos.ramen, title: '@ramenclub', caption: 'Ramen tonkotsu', duration: '2:04' },
];

function FeedPost({
  photo,
  title,
  caption,
  duration,
  active,
}: {
  photo: string;
  title: string;
  caption: string;
  duration: string;
  active?: boolean;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: 420,
        position: 'relative',
        borderBottom: `2px solid ${tokens.ink}`,
      }}
    >
      <Img src={photo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 40%, rgba(0,0,0,0.75) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: 6,
          fontFamily: fontFamily.mono,
          fontSize: 14,
        }}
      >
        {duration}
      </div>
      {active && (
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 68,
            height: 68,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            color: tokens.ink,
          }}
        >
          ▶
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20 }}>
        <div style={{ color: '#fff', fontFamily: fontFamily.sans, fontSize: 20, fontWeight: 600 }}>{title}</div>
        <div style={{ color: '#fff', fontFamily: fontFamily.sans, fontSize: 16, opacity: 0.92, marginTop: 4 }}>{caption}</div>
      </div>
    </div>
  );
}
