import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface LAYOUT_PROPS {
  children: ReactNode;
}

export interface HEADER_LINKS_PROPS {
  url: string;
  label: string;
}

export interface NUMBER_CARD_PROPS {
  bgColor: string;
  title: string;
  numbers: string;
  circleBgColor: string;
  textColor: string;
}

export interface SERVICE_DETAILS {
  img: StaticImport;
  serviceTitle: string;
  index: string;
}

export interface WHO_CARD_PROPS {
  img: StaticImport;
  description: string;
  reverse?: boolean;
  title?: string | undefined;
  subTitle?: string | undefined;
}

export interface WORK_CARD_PROPS {
  img: StaticImport;
  heading: string;
  id: string;
  details: Work_card_details;
}

export interface Work_card_details {
  heading: string;
  description: string;
}

export interface INSIGHTS_PROPS {
  title: string;
  img: StaticImport | string;
  category?: string;
}

export interface PAGE_TITLE_PROPS {
  title: string;
  subTitle?: string;
}

export interface CASE_STUDY_PROPS {
  img: string;
  heading: string;
  id: string;
  details: CASE_STUDY_DETAILS;
}

export interface LIST {
  label?: string;
  value?: string;
}

export interface CASE_STUDY_DETAILS {
  img?: StaticImageData;
  heading?: string;
  aboutDescription: string;
  solution: {
    heading: string;
    list: LIST[];
  };
  businessProblem: {
    heading: string;
    list: LIST[];
  };
  keyBenefits: {
    heading: string;
    list: LIST[];
  };
  techStack: [string];
}
