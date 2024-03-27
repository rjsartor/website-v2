'use client';
import { useEffect, useState } from "react";

export const CursorHighlight = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPos = (e: any) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPos);

    return () => {
      window.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: cursorPos.x,
        top: cursorPos.y,
        width: '1px',
        height: '1px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        boxShadow: `
          0 0 25px 25px rgba(45, 55, 85, 0.40),
          0 0 45px 45px rgba(45, 55, 85, 0.30),
          0 0 60px 60px rgba(45, 55, 85, 0.20),
          0 0 80px 80px rgba(45, 55, 85, 0.10)
        `,
        zIndex: -1,
      }}
    />
  );
};