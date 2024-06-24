import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper/modules";

export default function SwipablePhotos() {
  return (
    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}
