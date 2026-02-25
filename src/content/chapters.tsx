/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { chapterComponents } from "./chapters/index";

export const chapterContent: Record<string, React.ReactNode> = Object.fromEntries(
  Object.entries(chapterComponents).map(([slug, Component]) => [slug, <Component key={slug} />])
);
