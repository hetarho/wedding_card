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
import { MouseEventHandler, RefObject } from "react";
import { AnimationItem } from "./types/custom/lottie.type";
import clsx from "clsx";
import Image from "next/image";
import Modal from "./components/modal";
import { motion } from "framer-motion";

export default function Home() {
  const smoothScrollTo = (end: number, duration: number) => {
    const startPosition = window.scrollY;
    const distance = end - startPosition;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (
      time: number,
      start: number,
      distance: number,
      duration: number
    ) => {
      time /= duration / 2;
      if (time < 1) return (distance / 2) * time * time + start;
      time--;
      return (-distance / 2) * (time * (time - 2) - 1) + start;
    };

    const scroll = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const next = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration
      );

      window.scrollTo(0, next);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, end);
      }
    };

    requestAnimationFrame(scroll);
  };

  return <main className=""></main>;
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
