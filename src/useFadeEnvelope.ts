// Hook · fade in au début et fade out à la fin de chaque scène pour
// lisser les coupures quand elles sont jouées dans la Series.
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export function useFadeEnvelope(fadeFrames = 10) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, fadeFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - fadeFrames, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.in(Easing.cubic),
    }
  );

  return Math.min(fadeIn, fadeOut);
}
