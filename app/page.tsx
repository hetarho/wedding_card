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
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimationItem } from "./types/custom/lottie.type";
import clsx from "clsx";
import Image from "next/image";
import { Nanum_Myeongjo, Noto_Sans_KR } from "next/font/google";

const myeonjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

type LottieRefWithAnimationData = {
  ref: RefObject<AnimationItem>;
  start: number;
  end: number;
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollInfoTextOpacity, setScrollInfoTextOpacity] = useState(1);

  const LoveLottieRef = useRef<AnimationItem>(null);
  const WeddingRingLottieRef = useRef<AnimationItem>(null);
  const AfterLoveRef = useRef<AnimationItem>(null);
  const ArrowRef = useRef<AnimationItem>(null);

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
  const leftRefs: Record<number, LottieRefWithAnimationData> = useMemo(() => {
    return {
      0: { ref: leftRef0, start: 0, end: 0.52 },
      10: { ref: leftRef10, start: 0.02, end: 0.54 },
      20: { ref: leftRef20, start: 0.04, end: 0.56 },
      30: { ref: leftRef30, start: 0.06, end: 0.58 },
      40: { ref: leftRef40, start: 0.08, end: 0.6 },
      50: { ref: leftRef50, start: 0.1, end: 0.62 },
      60: { ref: leftRef60, start: 0.12, end: 0.64 },
      70: { ref: leftRef70, start: 0.14, end: 0.66 },
      80: { ref: leftRef80, start: 0.16, end: 0.68 },
      90: { ref: leftRef90, start: 0.18, end: 0.7 },
    };
  }, []);

  const rightRefs: Record<number, LottieRefWithAnimationData> = useMemo(() => {
    return {
      0: { ref: rightRef0, start: 0, end: 0.52 },
      10: { ref: rightRef10, start: 0.02, end: 0.54 },
      20: { ref: rightRef20, start: 0.04, end: 0.56 },
      30: { ref: rightRef30, start: 0.06, end: 0.58 },
      40: { ref: rightRef40, start: 0.08, end: 0.6 },
      50: { ref: rightRef50, start: 0.1, end: 0.62 },
      60: { ref: rightRef60, start: 0.12, end: 0.64 },
      70: { ref: rightRef70, start: 0.14, end: 0.66 },
      80: { ref: rightRef80, start: 0.16, end: 0.68 },
      90: { ref: rightRef90, start: 0.18, end: 0.7 },
    };
  }, []);

  function onArrowClick() {
    if (scrollY < 3300) {
      window.scrollTo({
        top: 3300,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    } else if (scrollY < 2400) {
      window.scrollTo({
        top: 2400,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    }
  }

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
    ({ end, ref, start }: LottieRefWithAnimationData) => {
      if (ref.current) {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;

        setScrollInfoTextOpacity((maxScroll / 2 - scrollY) * 2 / maxScroll);

        const middle = (end + start) / 2;

        ///애니매이션이 정방향일 때
        if (maxScroll * middle > scrollY) {
          const scrollFraction =
            (scrollY - maxScroll * start) / (maxScroll * (middle - start));

          const frame = Math.floor(
            scrollFraction * ref.current.getDuration(true)
          );

          ref.current.goToAndStop(frame, true);
        } else {
          const scrollFraction =
            (maxScroll * (end - middle) - (scrollY - maxScroll * middle)) /
            (maxScroll * (end - middle));

          const frame = Math.floor(
            scrollFraction * ref.current.getDuration(true)
          );

          ref.current.goToAndStop(frame, true);
        }
      }
    },
    [scrollY]
  );

  useEffect(() => {
    (
      [
        { ref: bottomCenterRef, start: 0, end: 0.7 },
        { ref: bottomLeftRef, start: 0, end: 0.65 },
        { ref: bottomRightRef, start: 0, end: 0.65 },
        { ref: LoveLottieRef, start: 0, end: 0.3 },
        { ref: WeddingRingLottieRef, start: 0.3, end: 0.55 },
        { ref: AfterLoveRef, start: 0.55, end: 0.65 },
        { ref: ArrowRef, start: 0, end: 0.1 },
        ...Object.entries(leftRefs).map((arr) => arr[1]),
        ...Object.entries(rightRefs).map((arr) => arr[1]),
      ] as LottieRefWithAnimationData[]
    ).forEach((data) => {
      setLottieFrame(data);
    });

    if (scrollY == 0) {
      LoveLottieRef.current?.play();
      ArrowRef.current?.play();
    }
  }, [setLottieFrame, scrollY, leftRefs, rightRefs]);

  return (
    <main className="">
      <div className={myeonjo.className}>
        <div className="w-full h-[1500px] flex flex-col items-center pt-[15vh] text-2xl gap-1">
          <div className="text-4xl mb-2">12월 <span className="text-3xl">14일</span></div>
          <div className="flex gap-1 items-center">
            <span className="text-xl">신랑</span>
            <span>이해람</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-xl">신부</span>
            <span>임예은</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[1800px]"></div>
      <div className="w-full text-center text-3xl font-thin">갤러리</div>
      <div className="w-full grid grid-cols-2 gap-3 p-3 mt-2">
        <MyImage url="/imgs/0.jpg"></MyImage>
        <MyImage url="/imgs/1.jpeg"></MyImage>
        <MyImage url="/imgs/2.jpeg"></MyImage>
        <MyImage url="/imgs/3.jpeg"></MyImage>
        <MyImage url="/imgs/4.jpeg"></MyImage>
        <MyImage url="/imgs/5.jpeg"></MyImage>
        <MyImage url="/imgs/6.jpeg"></MyImage>
        <MyImage url="/imgs/7.jpeg"></MyImage>
        <MyImage url="/imgs/8.jpeg"></MyImage>
      </div>
      <div className="w-full text-center text-3xl mt-10 font-thin">
        오시는 길
      </div>
      <div className="w-full h-[200px] justify-center items-center flex bg-slate-300 mt-5">
        대충 지도 들어갈 공간
      </div>
      <div className="mb-[100px]">
        <div className="w-full text-center text-3xl mt-10 font-thin">
          마음 전하기
        </div>
        <div className="mt-6 w-full flex flex-col items-center justify-center gap-3">
          <div className="flex gap-4 items-center">
            <div>신랑측 마음 전하기</div>
            <div className="text-lg h-11 bg-blue-200 flex items-center p-5 rounded-full font-light">
              계좌번호 보기
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>신부측 마음 전하기</div>
            <div className="text-lg h-11 bg-purple-200 flex items-center p-5 rounded-full font-light">
              계좌번호 보기
            </div>
          </div>
        </div>
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
            ref={rightRefs[el].ref}
            animationData={i % 2 == 0 ? lottieJsonFlowerD : lottieJsonFlowerB}
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
            ref={leftRefs[el].ref}
            animationData={i % 2 == 0 ? lottieJsonFlowerD : lottieJsonFlowerB}
            play={false}
          />
        </div>
      ))}

      <div className="w-[28vw] fixed bottom-1 left-0 mx-auto -rotate-45 scale-x-[-1]">
        <Lottie
          ref={bottomRightRef}
          loop={false}
          animationData={lottieJsonFlowerC}
          play={false}
        />
      </div>
      <div className="w-[28vw] fixed bottom-1 right-0 mx-auto rotate-45">
        <Lottie
          ref={bottomLeftRef}
          loop={false}
          animationData={lottieJsonFlowerC}
          play={false}
        />
      </div>
      <div className="w-[65vw] fixed -bottom-[5vh] left-0 right-0 mx-auto ">
        <Lottie
          ref={bottomCenterRef}
          loop={false}
          animationData={lottieJsonFlowerA}
          play={false}
        />
      </div>
      <div className="w-[55vw] fixed top-[35vh] left-0 right-0 mx-auto ">
        <Lottie
          ref={LoveLottieRef}
          loop={scrollY == 0}
          animationData={lottieJsonLove}
          play={scrollY == 0}
        />
      </div>
      <div className="w-[55vw] fixed top-[35vh] left-0 right-0 mx-auto ">
        <Lottie
          ref={WeddingRingLottieRef}
          loop={false}
          animationData={lottieJsonWeddingRing}
          play={false}
        />
      </div>
      <div className="w-[55vw] fixed top-[35vh] left-0 right-0 mx-auto ">
        <Lottie
          ref={AfterLoveRef}
          loop={false}
          animationData={lottieJsonAfterLove}
          play={false}
        />
      </div>
      <div className="fixed left-0 bottom-10 right-0 mx-auto items-center flex flex-col">
        <div className="mb-[2vh] text-2xl font-thin">
          <span className={myeonjo.className} style={{ opacity: scrollInfoTextOpacity }}>
            아래로  천천히 내려주세요
          </span>
        </div>
        <div></div>
        <div className="w-[14vw]" style={{ opacity: scrollInfoTextOpacity }}>
          <Lottie
            onClick={onArrowClick}
            loop={true}
            animationData={lottieJsonArrow}
            play={true}
          />
        </div>
      </div>
    </main>
  );
}

function MyImage({ url }: { url: string }) {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-2xl">
      <Image alt="img" src={url} width={1000} height={1000}></Image>
    </div>
  );
}
