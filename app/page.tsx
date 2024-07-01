"use client";

import lottieJsonHeart from "../public/lotties/heart.json";
import Lottie from "react-lottie-player";
import {
  useEffect,
} from "react";
import Image from "next/image";
import { useAnimate, useInView } from "framer-motion";
import AnimatedLetter from "./components/AnimatedLetter";

export default function Home() {
  return (
    <main className="">
      <div className="mt-28 flex justify-center text-7xl font-thin">
        <span className="font-light">12</span>월
        <span className="font-light">14</span>일
      </div>
      <div className="mt-3 flex justify-center items-end text-3xl font-light">
        <span>이해람</span>
        <Lottie
          className="h-14"
          loop={true}
          animationData={lottieJsonHeart}
          play={true}
        />
        <span>임예은</span>
      </div>
      <div className="flex flex-col items-center mt-20 text-5xl">
        {"저희의 결혼식에 여러분을 초대합니다".split("").map((letter, index) =>
          letter == " " ? (
            <div key={index} className="h-4"></div>
          ) : (
            <AnimatedLetter
              key={index}
              letter={letter}
              delay={index * 100}
              duration={0.8}
              pause={1.2}
            />
          )
        )}
      </div>
      <div className="mt-20">
        {Array(9)
          .fill((_: any) => 1)
          .map((_, i) => (
            <MyImage key={i} index={i}></MyImage>
          ))}
      </div>
      <div className="mt-20"></div>
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
    <div className="flex items-center justify-center w-full h-[90vw]">
      <div
        ref={scope}
        className="w-[80vw] h-[80vw] bg-pink-400 opacity-0 rounded-3xl overflow-hidden"
        style={{ rotate: "180deg", translate: "0 110px" }}
      >
        <Image
          alt={`${index}`}
          src={`/imgs/${index}.jpeg`}
          width={2000}
          height={2000}
        ></Image>
      </div>
    </div>
  );
}
