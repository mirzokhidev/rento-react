import { JSX } from "react";

export interface MenuItemType {
  title?: string;
  children?: MenuItemType[];
  type?: string;
  active?: boolean;
  section?: MenuItemType[];
  url?: string;
  megaMenuImage?: boolean;
  path?: string;
  image?: string;
  megaMenu?: boolean;
}

export interface MenuListType {
  menu: MenuItemType[] | undefined;
  level: number;
}

export interface ChildMenuType {
  mainMenu: MenuItemType[];
  toggleMenu: () => void;
}

export interface LoaderConfig {
  src?: string;
  text?: string;
  svg?: JSX.Element;
}

export interface PathTypes {
  part?: string;
}

export interface PathSettingsType {
  className: string;
  favicon: string;
}

export interface HeaderType {
  part?: string;
  isJobOrProperty?: boolean;
}

export interface FooterBrandingType {
  description: string;
  endPoint: number;
}

export interface FooterListType {
  title: string;
  url?: string;
  icon?: string;
}

export interface FooterDetailType {
  id: number;
  title: string;
  contactList?: boolean;
  links: FooterListType[];
}

export interface DetailType {
  data: FooterDetailType[];
  footerMenu?: boolean;
}

export interface LanguagesList { 
  data: string;
  language: string;
}