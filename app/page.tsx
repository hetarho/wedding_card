"use client";

import Lottie from "react-lottie-player";
import lottieJsonFlowerA from "../public/lotties/flowerA.json";
import lottieJsonFlowerB from "../public/lotties/flowerB.json";
import lottieJsonFlowerC from "../public/lotties/flowerC.json";
import lottieJsonFlowerD from "../public/lotties/flowerD.json";
import lottieJsonLove from "../public/lotties/love.json";
import lottieJsonWeddingRing from "../public/lotties/wedding_ring.json";
import lottieJsonAfterLove from "../public/lotties/after_love.json";
import lottieJsonHeart from "../public/lotties/heart.json";
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
  const letters = "저희의 결혼식에 여러분을 초대합니다.".split("");

  return (
    <main className="">
      <div className="mt-10 flex justify-center text-4xl font-thin">
        <span className="font-light">12</span>월
        <span className="font-light">14</span>일
      </div>
      <div className="mt-1 flex justify-center items-end text-2xl">
        <span>이해람</span>
        <Lottie
          className="h-12"
          loop={true}
          animationData={lottieJsonHeart}
          play={true}
        />
        <span>임예은</span>
      </div>
      <div className="flex flex-col items-center mt-8 text-3xl">
        {letters.map((letter, index) =>
          letter == " " ? (
            <div key={index} className="h-2"></div>
          ) : (
            <AnimatedLetter
              key={index}
              letter={letter}
              delay={index * 110}
              duration={1.2}
              pause={3}
            />
          )
        )}
      </div>
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
};
