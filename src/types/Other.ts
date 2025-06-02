import { InputType } from "reactstrap/types/lib/Input";

export interface InputBoxType {
  label?: string;
  placeholder?: string;
  inputType?: InputType;
  review?: boolean;
  button?: string;
  input?: boolean;
  ColClass?: string;
  mainClass?: string;
  inputClass?: string;
}

export interface DropdownType {
  label: string;
  placeholder: string;
  items: string[];
}

export interface RadioGroupType {
  name: string;
  labels: string[];
  ids: string[];
  label: string;
}

export interface FeatureItemType {
  label: string;
  name: string;
}

export interface TextInputType {
  label: string;
  value: string;
}

export interface SwitchItemProps {
  title: string;
  description: string;
  checked?: boolean;
}

export interface ConditionSubItem {
  title?: string;
  content: string;
}

export interface ConditionItem {
  id: string;
  title: string;
  content?: string;
  subsections?: boolean;
  subList?: ConditionSubItem[];
}

export interface ConditionNavItem {
  id?: string;
  title?: string;
  subList?: ConditionNavItem[];
}

export interface ScrollspyType {
  title?: string;
  list?: ConditionNavItem[];
  content?: ConditionItem[];
}
export interface FounderList {
  image: string;
  title: string;
  name: string;
  text: string;
}

export interface LoginSocialList {
  url: string;
  image: string;
  title: string;
}

export interface BottomInfoItem {
  label: string;
  isHeader?: boolean;
  value?: string;
}

export interface PrivacyList {
  title: string;
  btnLabel: string;
  switchItem: {
    title: string;
    description: string;
    checked: boolean
  }[]
}

export interface PropertiesList {
  id: number;
  name: string;
  image: string;
  views: number;
  response: number;
}

export interface OrdersList {
  type: string;
  order: {
    id: number;
    image: string;
  }[]
}

export interface CarOrdersNavItem {
  image: string;
  type: string;
}

export interface SalesLayoutList {
  name: string;
  price: string;
  trend: string;
  trendImg: string;
  salesImg: string;
  trendAlt: string;
}

export interface TitleTypeLists {
  title: string;
  type: string;
}

export interface AccordionLists {
  type: string;
  accordion: {
    id: number;
    title: string;
    content: string;
  }[]
}

export interface PricingPlanList {
  name: string;
  price: string;
  subtext: string;
  buttonLabel: string;
  features: string[];
  isActive?: boolean;
  badge?: string;
}