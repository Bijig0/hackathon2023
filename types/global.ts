import fonts, { mainFont } from "../constants/fonts";

declare global {
  type MainFont = typeof mainFont;
  type Font = typeof fonts[number];
}

export {}