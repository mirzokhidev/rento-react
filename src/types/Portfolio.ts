export interface PortfolioType {
  gridSize?: number;
  type?: string;
  carShow?: number;
  sectionClass?: string;
}

export interface PortfolioBoxType {
  gridSize?: number;
  type?: string;
  activeTab?: string;
}

export interface PortfolioModernType {
  left: number;
  top: number;
  index: number | null;
}

export interface PortfolioDetailContentType {
  title?: string;
  data?: string[];
  image?: string;
  rightSide?: boolean;
  dark?: boolean;
}

export interface PortfolioList {
  image: string;
  backImage: string;
  slider: string[];
  type: string;
  title: string;
  text: string;
}

export interface PortfolioItem {
  title: string;
  imgSrc: string;
}