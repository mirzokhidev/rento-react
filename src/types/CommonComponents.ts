export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  style?: Object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

export interface CommonHeaderType {
  title: string;
  content?: string;
  animation?: boolean;
  headClass?: string;
  titleClass?: string;
  view?: boolean;
  subClass?: string;
  url?: string;
  contentClass?: string;
}

export interface SvgType {
  iconId: string | undefined;
  className?: string;
  style?: {
    height?: number;
    width?: number;
    fill?: string;
    marginRight?: number;
  };
  onClick?: () => void;
}

export interface RatioImageType {
  className?: string;
  src: string;
  alt: string;
  style?: { height: number };
}

export interface CitySelectMenuType {
  cityList: string[];
  selectedCity: string | null;
  onSelectCity: (city: string) => void;
  href: string;
  multiColumn?: boolean;
}

export interface BreadcrumbsType {
  title: string;
  subTitle?: string;
  url: string;
  mainClass?: string;
}

export interface FilterOffcanvasType {
  type: string;
  offcanvasSide?: string;
  modalType?: string;
}

export interface TooltipsType {
  title: string;
  target: string;
}

export interface IconLinkList {
  url: string;
  icon: string;
}

export interface OverviewList {
  svg: string;
  title: string;
  text: string;
  gif: string;
}

export interface AmenitiesList {
  image: string;
  title: string;
}

export interface OverviewValueList {
  id: string;
  label: string;
  value: string;
}

export interface ReviewsList {
  name: string;
  image: string;
  timestamp: string;
  likes?: number;
  rating: number;
  message: string;
  isReply?: boolean;
}

export interface SectionsList {
  id: string;
  label: string;
  component: React.ReactNode;
  labelComponent: React.ReactNode;
}

export interface CraNavDetailsList {
  id: string;
  label: string;
}

export interface AdPriceList {
  price: string;
  value: string;
}

export interface AdIconList {
  icon: string;
  text: string;
}

export interface InfoList {
  image: string;
  title: string;
  text: string;
}

export interface TitleTextItem {
  title: string;
  text: string;
}

export interface CarFeatureList {
  title: string;
  features: string[];
}

export interface FaqItems {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewProgressList {
  title: string;
  rating: string;
  progress: number;
}

export interface DropdownOptionsList {
  label: string;
  options: {
    value: number;
    text: string;
  }[]
}

export interface BrandsList {
  id: number;
  name: string;
  value: string;
  count: number;
  models: {
    name: string;
    value: string;
    count: number;
  }[]
}

export interface LatestArticleList {
  image: string;
  title: string;
  type: string;
  date: string;
}

export interface CategoriesList {
  icon: string;
  title: string;
  value: string;
}

export interface SocialContactList {
  url: string;
  icon: string;
  title: string;
  value: string;
}

export interface ProfessionalInsightsList {
  title?: string;
  description: string;
}

export interface ContactBoxList {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface CounterList {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}