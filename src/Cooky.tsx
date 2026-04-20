// Cooky pour Remotion · SVG natif via JSX DOM (React web)
import React from 'react';
import { tokens } from './tokens';

type Pose = 'default' | 'wave' | 'cooking' | 'watching' | 'thinking' | 'happy' | 'sleeping';

export const Cooky: React.FC<{ size?: number; pose?: Pose }> = ({ size = 200, pose = 'default' }) => {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size}>
      <path d="M30 108 Q30 88 42 84 L78 84 Q90 88 90 108 Z" fill={tokens.paper} />
      <path d="M30 108 Q30 88 42 84 L78 84 Q90 88 90 108 Z" fill="none" stroke={tokens.hatShadow} strokeWidth={1} />
      <circle cx={60} cy={95} r={1.8} fill={tokens.tomato} />
      <path d="M44 82 L60 86 L76 82 L72 92 L60 90 L48 92 Z" fill={tokens.tomato} />
      <path d="M60 86 L60 90" stroke={tokens.neckDark} strokeWidth={0.8} />
      <circle cx={60} cy={66} r={18} fill={tokens.skin} />
      <ellipse cx={41} cy={66} rx={2.5} ry={3.5} fill={tokens.skin} />
      <ellipse cx={79} cy={66} rx={2.5} ry={3.5} fill={tokens.skin} />
      <ellipse cx={46} cy={70} rx={3} ry={2} fill={tokens.cheek} opacity={0.55} />
      <ellipse cx={74} cy={70} rx={3} ry={2} fill={tokens.cheek} opacity={0.55} />
      {renderEyes(pose)}
      <path d="M52 70 Q55 73 60 71 Q65 73 68 70 Q65 74 60 73 Q55 74 52 70 Z" fill={tokens.mustache} />
      {renderMouth(pose)}
      <g>
        <rect x={42} y={48} width={36} height={6} rx={2} fill={tokens.paper} />
        <circle cx={48} cy={38} r={11} fill={tokens.paper} />
        <circle cx={72} cy={38} r={11} fill={tokens.paper} />
        <circle cx={60} cy={32} r={13} fill={tokens.paper} />
        <circle cx={54} cy={42} r={9} fill={tokens.paper} />
        <circle cx={66} cy={42} r={9} fill={tokens.paper} />
        <circle cx={52} cy={36} r={3} fill={tokens.hatShadow} opacity={0.25} />
      </g>
      {renderArms(pose)}
    </svg>
  );
};

function renderEyes(pose: Pose) {
  const EYE = tokens.ink;
  if (pose === 'sleeping') return (
    <g>
      <path d="M47 62 Q50 64 53 62" stroke={EYE} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <path d="M67 62 Q70 64 73 62" stroke={EYE} strokeWidth={1.6} fill="none" strokeLinecap="round" />
    </g>
  );
  if (pose === 'watching' || pose === 'thinking') return (
    <g>
      <circle cx={50} cy={62} r={2.6} fill={EYE} />
      <circle cx={70} cy={62} r={2.6} fill={EYE} />
      <circle cx={50.8} cy={61.3} r={0.8} fill="#fff" />
      <circle cx={70.8} cy={61.3} r={0.8} fill="#fff" />
    </g>
  );
  if (pose === 'happy') return (
    <g>
      <path d="M46 63 Q50 58 54 63" stroke={EYE} strokeWidth={1.8} fill="none" strokeLinecap="round" />
      <path d="M66 63 Q70 58 74 63" stroke={EYE} strokeWidth={1.8} fill="none" strokeLinecap="round" />
    </g>
  );
  return (
    <g>
      <ellipse cx={50} cy={62} rx={2.2} ry={2.6} fill={EYE} />
      <ellipse cx={70} cy={62} rx={2.2} ry={2.6} fill={EYE} />
      <circle cx={50.6} cy={61.3} r={0.7} fill="#fff" />
      <circle cx={70.6} cy={61.3} r={0.7} fill="#fff" />
    </g>
  );
}

function renderMouth(pose: Pose) {
  const EYE = tokens.ink;
  if (pose === 'sleeping') return <circle cx={60} cy={72} r={2} fill={EYE} opacity={0.6} />;
  if (pose === 'watching') return <ellipse cx={60} cy={73} rx={2} ry={2.5} fill={EYE} opacity={0.7} />;
  if (pose === 'thinking') return <path d="M56 73 L64 73" stroke={EYE} strokeWidth={1.6} strokeLinecap="round" />;
  return <path d="M55 74 Q60 78 65 74" stroke={EYE} strokeWidth={1.6} fill="none" strokeLinecap="round" />;
}

function renderArms(pose: Pose) {
  const APRON = tokens.paper;
  if (pose === 'wave') return (
    <g>
      <path d="M38 92 Q34 100 36 108" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
      <path d="M82 92 Q92 80 96 68" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
      <circle cx={97} cy={66} r={5} fill={tokens.skin} />
    </g>
  );
  if (pose === 'cooking') return (
    <g>
      <path d="M38 92 Q34 96 36 102" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
      <ellipse cx={42} cy={104} rx={10} ry={3.5} fill="#8B6F47" />
      <path d="M82 92 Q88 88 92 82" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
    </g>
  );
  if (pose === 'thinking') return (
    <g>
      <path d="M38 92 Q34 100 36 108" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
      <path d="M82 92 Q76 80 70 76" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
      <circle cx={70} cy={76} r={5} fill={tokens.skin} />
    </g>
  );
  return (
    <g>
      <path d="M38 92 Q34 100 36 108" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
      <path d="M82 92 Q86 100 84 108" stroke={APRON} strokeWidth={9} fill="none" strokeLinecap="round" />
    </g>
  );
}
