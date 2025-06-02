import React, { JSX, Key } from "react";
import { AmenitiesList } from "./CommonComponents";

export interface JobHomeType {
  image: string;
  type: string;
  class?: string;
  key?: Key;
}

export interface JobHomeImageData {
  image: string;
  type: string;
  class?: string;
}

export interface JobHomeMeanClassData {
  meanClass: string;
  multipleImage: (JobHomeImageData | { childrenClass: string; childrenImage: JobHomeImageData[] })[];
}

export interface LogoSectionType {
  sectionClass?: string;
  swiperClass?: string;
  title?: string;
  type?: string;
}

export interface DropdownMenu {
  title: string;
  icon?: JSX.Element;
}

export interface NavType {
  id: number;
  icon?: JSX.Element;
  dropdownMenu?: DropdownMenu[];
  rangeSlider?: boolean;
  label?: string;
  inputLabel: string;
}

export interface FeaturedType {
  title: string;
  data: number[];
  label: string;
}

export interface PropsType {
  type: string;
}

export interface TestimonialsType {
  type: string;
  animation?: boolean;
  title?: string;
}

export interface SearchTabListType {
  basicTab?: string | number;
  showTab?: number[];
  datePicker?: boolean;
  scrollDown?: boolean;
  form?: boolean;
  pills?: boolean;
  endPoint?: number;
  tabs?: boolean;
  showNav?: boolean;
  button?: boolean;
  icon?: boolean;
}

export interface WorkList {
  icon: React.ReactNode;
  text: string;
  duration: number;
  svg?: boolean;
}

export interface ExperienceItem {
  icon?: React.ReactNode;
  image?: boolean;
}

export interface ExperienceCarList {
  icon: string;
  label: string;
  value: string;
}

export interface StepsList {
  step: string;
  title: string;
  description: string;
}

export interface AboutSlidesList {
  quoteText: string;
  profileImgSrc: string;
  profileName: string;
  profilePosition: string;
}

export interface JobAboutCounterList {
  count: number;
  label: string;
}

export interface StepsIconsList {
  icon: React.ReactNode;
  stepNumber: string;
  title: string;
  description: string;
}

export interface StepImagesList {
  src: string;
  alt: string;
  className: string;
}

export interface ImageClassList {
  image: string;
  class?: string;
  type?: string;
}

export interface JobCategoriesScrollList {
  class: string;
  scrollData: AmenitiesList[]
}

export interface QuestionList {
  title: string;
  question: string;
}

export interface PaymentList {
  image: string;
  url: string;
}

export interface DiscoverySliderList {
  image: string;
  location: string;
  sale: number;
  rent: number;
}

export interface TeamList {
  name: string;
  image: string;
  type?: string;
}

export interface TestimonialItem {
  name?: string;
  location?: string;
  image?: string;
  testimonial?: string;
  position?: string;
  text?: string;
  rating?: number;
  role?: string;
  content?: string;
  title?: string;
}

export interface TestimonialsList {
  CarDemo1: TestimonialItem[];
  CarDemo2: TestimonialItem[];
  JobDemo2: TestimonialItem[];
  PropertyDemo1: TestimonialItem[];
  PropertyDemo2: TestimonialItem[];
}