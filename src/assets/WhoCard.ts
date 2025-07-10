import { WHO_CARD_PROPS, WORK_CARD_PROPS } from "@/utils/types";
import mission from "@/homePage/mission.jpg";
import vision from "@/homePage/vision.jpg";
import work1 from "@/homePage/work/img1.png";
import work2 from "@/homePage/work/img2.png";
import work3 from "@/homePage/work/img3.png";
export const WHO_CARD_DATA: WHO_CARD_PROPS[] = [
  {
    img: mission,
    description:
      "To deliver working software that solves real problems. We write clean code, design intuitive interfaces, and deploy systems that scale. No smoke and mirrors - just reliable technology that helps businesses grow. Every project, every time.",
    title: "Our",
    subTitle: "Mission",
  },
  {
    img: vision,
    description:
      "Become the go-to development partner for companies ready to build seriously good tech. We see a future where businesses choose us not for promises, but for our track record of shipping quality software that actually works.",
    reverse: true,
    title: "Our",
    subTitle: "Vision",
  },
];

export const WORK_CARD_DATA: WORK_CARD_PROPS[] = [
  {
    img: work1,
    heading: "Insigne",
  },
  {
    img: work2,
    heading: "Logico",
  },
  {
    img: work3,
    heading: "Nightwish",
  },
];
