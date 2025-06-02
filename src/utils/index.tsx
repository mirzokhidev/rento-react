import { Media } from "reactstrap";
import { ImageProps } from "../types/CommonComponents";
import { FC } from "react";

//dynamic image
const images = require.context(`/public/assets/images`, true);
export const dynamicImage = (image: string) => {
  return images(`./${image}`);
};

//dynamic Gif
const gif = require.context(`/public/assets/gif`, true);
export const dynamicGrf = (image: string) => {
  return gif(`./${image}`);
};

//dynamic Svg
const svg = require.context(`/public/assets/svg`, true);
export const dynamicSvg = (image: string) => {
  return svg(`./${image}`);
};

//dynamic Video
const video = require.context(`/public/assets/video`, true);
export const dynamicVideo = (image: string) => {
  return video(`./${image}`);
};

//Image Tag
export const Image: FC<ImageProps> = (props) => {
  return <Media {...props} alt={props.alt ? props.alt : "image"} loading="lazy" />;
};

//dynamic Number
export const dynamicNumber = (totalLength: number) => {
  return Array.from({ length: totalLength }, (_, index) => index + 1);
};

//format price
export const formatPrice = (value: number): string => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}K`;
  return value.toString();
};