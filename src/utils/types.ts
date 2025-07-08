import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
}

export interface INSIGHTS_PROPS {
  title: string;
  img: StaticImport;
  category: string;
}

export interface PAGE_TITLE_PROPS {
  title: string;
  subTitle: string;
}
