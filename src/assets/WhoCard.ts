import { WHO_CARD_PROPS } from "@/utils/types";
import mission from "@/homePage/mission.jpg";
import vision from "@/homePage/vision.jpg";
export const WHO_CARD_DATA: WHO_CARD_PROPS[] = [
  {
    img: mission,
    description:
      "We are a creative agency committed to delivering innovative solutions, from concept to execution, ensuring your brand's success and growth.",
    title: "Our",
    subTitle: "Mission",
  },
  {
    img: vision,
    description:
      "We specialize in transforming your vision into reality, reativity with strategy to produce results. Our team works to elevate your brand",
    reverse: true,
    title: "Our",
    subTitle: "Vision",
  },
];
