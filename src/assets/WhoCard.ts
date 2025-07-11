import { WHO_CARD_PROPS, WORK_CARD_PROPS } from "@/utils/types";
import mission from "@/homePage/mission.jpg";
import vision from "@/homePage/vision.jpg";
import work1 from "@/homePage/work/img1.jpg";
import work2 from "@/homePage/work/img2.jpg";
import work3 from "@/homePage/work/img3.png";
import { Description } from "@mui/icons-material";
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
    heading: "AR/VR Project",
    id: "ar-vr",
    details: {
      heading: "Disrupting with AI and Cloud Technology",
      description:
        "TechX Grow now introduces AR/VR Project-a platform that employs artificial intelligence and machine learning for cloud-native technology to create digital twins and conduct simulations. It has since shifted, initially developed in the innovation lab, to virtual solutions like car configurators and digital brochures due to the impact of COVID-19-whereby streamlining operations and creating new digital engagement touchpoints in industries such as automotive and real estate. Thus, the AR/VR Project translates the real world into new possibilities that upset the industry and transform it.",
    },
  },
  {
    img: work2,
    heading: "Product for Car Dealer",
    id: "car-dealership",
    details: {
      heading: "Revolutionizing Car Buying with Product for Car Dealer",
      description:
        "TechXgrow presents before you Product for Car Dealer which builds innovative platforms for car dealerships-the new-age model. With the installation of this product, you get attached to a fine and distinct collection of premium cars that undergo a complete and thorough inspection to be conferred the highest level of quality and reliability. Next-you have financing that is so flexible that it covers every customer, from the speed of sound right up to the gruelling paperwork and all that in between. Careful thorough inspection, and most of all, worry-free delivery: at EuVande, it is made easy for you to concentrate fully on the growth of your dealership. So work with us; let's leverage EuVande to deliver a seamless experience for your customers, which they will always come back for.",
    },
  },
];
