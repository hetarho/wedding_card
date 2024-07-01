"use client";

import Lottie from "react-lottie-player";
import lottieJsonFlowerA from "../public/lotties/flowerA.json";
import lottieJsonFlowerB from "../public/lotties/flowerB.json";
import lottieJsonFlowerC from "../public/lotties/flowerC.json";
import lottieJsonFlowerD from "../public/lotties/flowerD.json";
import lottieJsonLove from "../public/lotties/love.json";
import lottieJsonWeddingRing from "../public/lotties/wedding_ring.json";
import lottieJsonAfterLove from "../public/lotties/after_love.json";
import lottieJsonArrow from "../public/lotties/arrow.json";
import {
  MouseEventHandler,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AnimationItem } from "./types/custom/lottie.type";
import clsx from "clsx";
import Image from "next/image";
import Modal from "./components/modal";
import { animate, motion } from "framer-motion";

export default function Home() {
  const letters = "12월 14일 결혼".split("");

  return (
    <main className="text-2xl">
      {letters.map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter}
          delay={index * 100}
          duration={1}
          pause={2}
        />
      ))}
    </main>
  );
}

function MyImage({
  url,
  onClick,
  layoutId,
}: {
  url: string;
  layoutId: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}) {
  return (
    <motion.div
      key={url}
      className="aspect-square w-full overflow-hidden rounded-2xl"
      layoutId={layoutId}
      onClick={onClick}
    >
      <Image src={url} alt="" width={500} height={500}></Image>
    </motion.div>
  );
}

const AnimatedLetter = ({
  letter,
  delay,
  duration,
  pause,
}: {
  letter: string;
  delay: number;
  duration: number;
  pause: number;
}) => {
  const [fontWeight, setFontWeight] = useState(400);

  const _forwardAnim = useCallback(() => {
    animate(400, 900, {
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
    animate(900, 400, {
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
      style={{
        fontVariationSettings: `'wght' ${fontWeight}, 'opsz' ${fontWeight}`,
        display: "inline-block",
      }}
    >
      {letter}
    </span>
  );
};
