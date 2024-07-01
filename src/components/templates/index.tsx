"use client";

import { useBlock } from "@/src/context/blockProvider";
import { Montserrat, Open_Sans } from "next/font/google";
import { ReactNode } from "react";

interface ITemplate {
  children: ReactNode;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--titles-subtitles",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--main" });

export const Templates = ({ children }: ITemplate) => {
  const { block } = useBlock();
  return (
    <body
      className={`${openSans.variable} ${montserrat.variable} ${
        block ? "hidden-block" : "visible-block"
      }`}
    >
      {children}
    </body>
  );
};
