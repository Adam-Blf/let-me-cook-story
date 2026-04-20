// Scène 02 · scroll social feed · vraies photos Pexels
import React from 'react';
import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { PhoneFrame } from '../PhoneFrame';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';

export const Scene02Feed: React.FC = () => {
  const frame = useCurrentFrame();

  const scroll = interpolate(frame, [15, 75], [0, -400], { extrapolateRight: 'clamp' });
  const phoneSlide = interpolate(frame, [0, 18], [200, 0], { extrapolateRight: 'clamp' });
  const headlineOp = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: tokens.creamSoft,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
        flexDirection: 'column',
        gap: 50,
      }}
    >
      <div
        style={{
          fontFamily: fontFamily.serifItalic,
          fontSize: 90,
          color: tokens.ink,
          letterSpacing: -1,
          textAlign: 'center',
          lineHeight: 1.05,
          maxWidth: 900,
          opacity: headlineOp,
        }}
      >
        Tu tombes sur une vidéo qui te fait saliver.
      </div>

      <div style={{ transform: `translateY(${phoneSlide}px)` }}>
        <PhoneFrame width={540}>
          <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div style={{ transform: `translateY(${scroll}px)`, paddingTop: 100 }}>
              {FEED_ITEMS.map((item, i) => (
                <FeedPost key={i} {...item} />
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                top: 100,
                left: 20,
                fontFamily: fontFamily.mono,
                fontSize: 16,
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
    </AbsoluteFill>
  );
};

const FEED_ITEMS = [
  { photo: foodPhotos.tacos, title: '@tacomaria', caption: 'Tacos al pastor rapides', duration: '0:22' },
  { photo: foodPhotos.carbonara, title: '@nonnaroma', caption: 'Carbonara crémeuse · sans crème', duration: '0:47', active: true },
  { photo: foodPhotos.salad, title: '@greenkitchen', caption: 'Salade lentilles feta', duration: '0:18' },
  { photo: foodPhotos.ramen, title: '@ramenclub', caption: 'Tonkotsu de A à Z', duration: '2:04' },
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
        height: 480,
        position: 'relative',
        borderBottom: `2px solid ${tokens.ink}`,
      }}
    >
      <Img src={photo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.75) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: 6,
          fontFamily: fontFamily.mono,
          fontSize: 16,
          letterSpacing: 1,
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
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 32,
            color: tokens.ink,
          }}
        >
          ▶
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 22, left: 24, right: 24 }}>
        <div style={{ color: '#fff', fontFamily: fontFamily.sans, fontSize: 22, fontWeight: 600 }}>{title}</div>
        <div style={{ color: '#fff', fontFamily: fontFamily.sans, fontSize: 18, opacity: 0.92, marginTop: 4 }}>{caption}</div>
      </div>
    </div>
  );
}
