'use client'

import { animate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function AnimatedLetter({
  letter,
  delay,
  duration,
  pause,
}: {
  letter: string;
  delay: number;
  duration: number;
  pause: number;
}) {
  const [fontWeight, setFontWeight] = useState(100);

  const _forwardAnim = useCallback(() => {
    animate(100, 900, {
      duration: duration,
      onUpdate(latest) {
        setFontWeight(latest);
      },
      onComplete() {
        _backwardAnim();
      },
    });
  }, []);

  const _backwardAnim = useCallback(() => {
    animate(900, 100, {
      duration: duration,
      onUpdate(latest) {
        setFontWeight(latest);
      },
      onComplete() {
        setTimeout(() => {
          _forwardAnim();
        }, pause * 1000);
      },
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      _forwardAnim();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, _forwardAnim]);

  return (
    <span
      className="block"
      style={{
        fontVariationSettings: `'wght' ${fontWeight}, 'opsz' ${fontWeight}`,
      }}
    >
      {letter}
    </span>
  );
}
