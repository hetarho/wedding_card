"use client";

import Lottie from "react-lottie-player";
import lottieJsonA from "../public/lotties/flowerA.json";
import lottieJsonB from "../public/lotties/flowerB.json";
import lottieJsonC from "../public/lotties/flowerC.json";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { AnimationItem } from "./types/custom/lottie.type";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const bottomCenterRef = useRef<AnimationItem>(null);
  const bottomLeftRef = useRef<AnimationItem>(null);
  const bottomRightRef = useRef<AnimationItem>(null);

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
    (ref: RefObject<AnimationItem>) => {
      if (ref.current) {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        const frame = Math.floor(
          scrollFraction * ref.current.getDuration(true)
        );
        ref.current.goToAndStop(frame, true);
      }
    },
    [scrollY]
  );

  useEffect(() => {
    [bottomCenterRef, bottomLeftRef, bottomRightRef].forEach((ref) => {
      setLottieFrame(ref);
    });
  }, [setLottieFrame, scrollY]);

  return (
    <main className="h-[2000px]">
      {[].map((el, i) => (
        <div key={i} className="w-[30vw] fixed bottom-0 right-0 mx-auto ">
          <Lottie loop={true} animationData={lottieJsonB} play={true} />
        </div>
      ))}

      <div className="w-[25vw] fixed bottom-3 left-0 mx-auto -rotate-45 scale-x-[-1]">
        <Lottie
          ref={bottomRightRef}
          loop={false}
          animationData={lottieJsonC}
          play={false}
        />
      </div>
      <div className="w-[25vw] fixed bottom-3 right-0 mx-auto rotate-45">
        <Lottie
          ref={bottomLeftRef}
          loop={false}
          animationData={lottieJsonC}
          play={false}
        />
      </div>
      <div className="w-[65vw] fixed bottom-0 left-0 right-0 mx-auto ">
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
