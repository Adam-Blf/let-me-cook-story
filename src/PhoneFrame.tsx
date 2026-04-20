// iPhone-like shell · utilisé dans plusieurs scènes pour encadrer les maquettes d'écran
import React from 'react';
import { tokens } from './tokens';

export const PhoneFrame: React.FC<{ children: React.ReactNode; width?: number }> = ({
  children,
  width = 620,
}) => {
  const height = Math.round((width * 830) / 390);
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 72,
        background: '#000',
        padding: 14,
        boxShadow: '0 40px 120px rgba(0,0,0,0.35), 0 10px 30px rgba(0,0,0,0.25)',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 60,
          overflow: 'hidden',
          background: tokens.cream,
          position: 'relative',
        }}
      >
        {/* dynamic island */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 180,
            height: 50,
            borderRadius: 30,
            background: '#000',
            zIndex: 50,
          }}
        />
        {children}
      </div>
    </div>
  );
};
