"use client";

import Lottie from "react-lottie-player";
import lottieJsonA from "../public/lotties/flowerA.json";
import lottieJsonB from "../public/lotties/flowerB.json";
import lottieJsonC from "../public/lotties/flowerC.json";
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimationItem } from "./types/custom/lottie.type";
import clsx from "clsx";

type RefAnimationDelay = {
  ref: RefObject<AnimationItem>;
  delay: number;
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const bottomCenterRef = useRef<AnimationItem>(null);
  const bottomLeftRef = useRef<AnimationItem>(null);
  const bottomRightRef = useRef<AnimationItem>(null);

  const leftRef0 = useRef<AnimationItem>(null);
  const leftRef10 = useRef<AnimationItem>(null);
  const leftRef20 = useRef<AnimationItem>(null);
  const leftRef30 = useRef<AnimationItem>(null);
  const leftRef40 = useRef<AnimationItem>(null);
  const leftRef50 = useRef<AnimationItem>(null);
  const leftRef60 = useRef<AnimationItem>(null);
  const leftRef70 = useRef<AnimationItem>(null);
  const leftRef80 = useRef<AnimationItem>(null);
  const leftRef90 = useRef<AnimationItem>(null);

  const rightRef0 = useRef<AnimationItem>(null);
  const rightRef10 = useRef<AnimationItem>(null);
  const rightRef20 = useRef<AnimationItem>(null);
  const rightRef30 = useRef<AnimationItem>(null);
  const rightRef40 = useRef<AnimationItem>(null);
  const rightRef50 = useRef<AnimationItem>(null);
  const rightRef60 = useRef<AnimationItem>(null);
  const rightRef70 = useRef<AnimationItem>(null);
  const rightRef80 = useRef<AnimationItem>(null);
  const rightRef90 = useRef<AnimationItem>(null);
  const leftRefs: Record<number, RefAnimationDelay> = useMemo(() => {
    return {
      0: {
        ref: leftRef0,
        delay: 0,
      },
      10: {
        ref: leftRef10,
        delay: 30,
      },
      20: {
        ref: leftRef20,
        delay: 60,
      },
      30: {
        ref: leftRef30,
        delay: 90,
      },
      40: {
        ref: leftRef40,
        delay: 115,
      },
      50: {
        ref: leftRef50,
        delay: 140,
      },
      60: {
        ref: leftRef60,
        delay: 160,
      },
      70: {
        ref: leftRef70,
        delay: 195,
      },
      80: {
        ref: leftRef80,
        delay: 215,
      },
      90: {
        ref: leftRef90,
        delay: 250,
      },
    };
  }, []);

  const rightRefs: Record<number, RefAnimationDelay> = useMemo(() => {
    return {
      0: {
        ref: rightRef0,
        delay: 0,
      },
      10: {
        ref: rightRef10,
        delay: 30,
      },
      20: {
        ref: rightRef20,
        delay: 60,
      },
      30: {
        ref: rightRef30,
        delay: 90,
      },
      40: {
        ref: rightRef40,
        delay: 115,
      },
      50: {
        ref: rightRef50,
        delay: 140,
      },
      60: {
        ref: rightRef60,
        delay: 160,
      },
      70: {
        ref: rightRef70,
        delay: 195,
      },
      80: {
        ref: rightRef80,
        delay: 215,
      },
      90: {
        ref: rightRef90,
        delay: 250,
      },
    };
  }, []);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setLottieFrame = useCallback(
    (ref: RefObject<AnimationItem>, delay: number) => {
      if (ref.current) {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = (scrollY / maxScroll) * 0.92 + 0.08;
        const frame = Math.floor(
          scrollFraction * (ref.current.getDuration(true) - delay)
        );

        ref.current.goToAndStop(frame, true);
      }
    },
    [scrollY]
  );

  const setLottieFrameReverse = useCallback(
    (ref: RefObject<AnimationItem>, delay: number) => {
      const _scrollY = scrollY + 150;
      if (ref.current) {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction =
          _scrollY * 2 < maxScroll
            ? (_scrollY * 2) / maxScroll
            : ((maxScroll - _scrollY) * 2) / maxScroll;

        const frame = Math.floor(
          scrollFraction *
            (ref.current.getDuration(true) -
              (_scrollY * 2 < maxScroll ? delay : 250 - delay))
        );

        ref.current.goToAndStop(frame, true);
      }
    },
    [scrollY]
  );

  useEffect(() => {
    (
      [
        { ref: bottomCenterRef, delay: 0 },
        { ref: bottomLeftRef, delay: 0 },
        { ref: bottomRightRef, delay: 0 },
      ] as RefAnimationDelay[]
    ).forEach((data) => {
      setLottieFrame(data.ref, data.delay);
    });

    (
      [
        ...Object.entries(leftRefs).map((arr) => arr[1]),
        ...Object.entries(rightRefs).map((arr) => arr[1]),
      ] as RefAnimationDelay[]
    ).forEach((data) => {
      setLottieFrameReverse(data.ref, data.delay);
    });
  }, [setLottieFrame, scrollY, leftRefs, rightRefs, setLottieFrameReverse]);

  return (
    <main className="h-[4000px]">
      <div className="w-full h-[500px] flex items-center justify-center text-4xl">
        <span>이해람</span>
        <span>임예은</span>
      </div>

      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((el, i) => (
        <div
          key={i}
          className={clsx("fixed mx-auto", {
            "w-[37vw] -right-[1vw] top-[-7vh]": el == 0,
            "w-[33vw] -right-[3vw] top-[5vh]": el == 10,
            "w-[30vw] -right-[5vw] top-[15vh]": el == 20,
            "w-[29vw] -right-[7vw] top-[25vh]": el == 30,
            "w-[28vw] -right-[10vw] top-[35vh]": el == 40,
            "w-[26vw] -right-[7vw] top-[45vh]": el == 50,
            "w-[24vw] -right-[5vw] top-[55vh]": el == 60,
            "w-[22vw] -right-[3vw] top-[65vh]": el == 70,
            "w-[20vw] -right-[0vw] top-[75vh]": el == 80,
            "w-[15vw] right-[5vw] top-[85vh]": el == 90,
          })}
        >
          <Lottie
            loop={false}
            ref={leftRefs[el].ref}
            animationData={lottieJsonB}
            play={false}
          />
        </div>
      ))}

      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((el, i) => (
        <div
          key={i}
          className={clsx("fixed mx-auto scale-x-[-1]", {
            "w-[37vw] -left-[1vw] top-[-7vh]": el == 0,
            "w-[33vw] -left-[3vw] top-[5vh]": el == 10,
            "w-[30vw] -left-[5vw] top-[15vh]": el == 20,
            "w-[29vw] -left-[7vw] top-[25vh]": el == 30,
            "w-[28vw] -left-[10vw] top-[35vh]": el == 40,
            "w-[26vw] -left-[7vw] top-[45vh]": el == 50,
            "w-[24vw] -left-[5vw] top-[55vh]": el == 60,
            "w-[22vw] -left-[3vw] top-[65vh]": el == 70,
            "w-[20vw] -left-[0vw] top-[75vh]": el == 80,
            "w-[15vw] left-[5vw] top-[85vh]": el == 90,
          })}
        >
          <Lottie
            loop={false}
            ref={rightRefs[el].ref}
            animationData={lottieJsonB}
            play={false}
          />
        </div>
      ))}

      <div className="w-[28vw] fixed bottom-1 left-0 mx-auto -rotate-45 scale-x-[-1]">
        <Lottie
          ref={bottomRightRef}
          loop={false}
          animationData={lottieJsonC}
          play={false}
        />
      </div>
      <div className="w-[28vw] fixed bottom-1 right-0 mx-auto rotate-45">
        <Lottie
          ref={bottomLeftRef}
          loop={false}
          animationData={lottieJsonC}
          play={false}
        />
      </div>
      <div className="w-[65vw] fixed -bottom-[5vh] left-0 right-0 mx-auto ">
        <Lottie
          ref={bottomCenterRef}
          loop={false}
          animationData={lottieJsonA}
          play={false}
        />
      </div>
    </main>
  );
}
