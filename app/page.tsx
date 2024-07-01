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
  useRef,
  useState,
} from "react";
import { AnimationItem } from "./types/custom/lottie.type";
import clsx from "clsx";
import Image from "next/image";
import Modal from "./components/modal";
import { animate, motion, useAnimate, useInView } from "framer-motion";
import AnimatedLetter from "./components/AnimatedLetter";

export default function Home() {
  const letters = "저희의 결혼식에 여러분을 초대합니다".split("");

  return (
    <main className="">
      <div className="mt-16 flex justify-center text-6xl font-thin">
        <span className="font-light">12</span>월
        <span className="font-light">14</span>일
      </div>
      <div className="mt-3 flex justify-center items-end text-2xl font-light">
        <span>이해람</span>
        <Lottie
          className="h-12"
          loop={true}
          animationData={lottieJsonHeart}
          play={true}
        />
        <span>임예은</span>
      </div>
      <div className="flex flex-col items-center mt-12 text-5xl">
        {letters.map((letter, index) =>
          letter == " " ? (
            <div key={index} className="h-4"></div>
          ) : (
            <AnimatedLetter
              key={index}
              letter={letter}
              delay={index * 100}
              duration={1.1}
              pause={2.5}
            />
          )
        )}
      </div>
      {Array(9)
        .fill((_: any) => 1)
        .map((_, i) => (
          <MyImage key={i} index={i}></MyImage>
        ))}
    </main>
  );
}

function MyImage({ index }: { index: number }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 2 });
      animate(scope.current, { translate: "0" }, { duration: 1 });
      animate(scope.current, { rotate: "180deg" }, { duration: 0.5 });
    }
  }, [animate, isInView, scope]);

  return (
    <div className="flex items-center justify-center w-full h-60">
      <div
        ref={scope}
        className="w-48 h-48 bg-pink-400 opacity-0 rounded-3xl overflow-hidden"
        style={{ rotate: "180deg", translate: "0 180px" }}
      >
        <Image
          alt={`${index}`}
          src={`/imgs/${index}.jpeg`}
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
}

// function MyImage({
//   url,
//   onClick,
//   layoutId,
// }: {
//   url: string;
//   layoutId: string;
//   onClick: MouseEventHandler<HTMLImageElement>;
// }) {
//   return (
//     <motion.div
//       key={url}
//       className="aspect-square w-full overflow-hidden rounded-2xl"
//       layoutId={layoutId}
//       onClick={onClick}
//     >
//       <Image src={url} alt="" width={500} height={500}></Image>
//     </motion.div>
//   );
// }
