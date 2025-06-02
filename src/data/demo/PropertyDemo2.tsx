import { CounterList, IconLinkList, InfoList } from "../../types/CommonComponents";
import { TeamList } from "../../types/HomeDemo";

export const HomeNavData: {id: number, title: string}[] = [
  { id: 1, title: "Buy" },
  { id: 2, title: "Rent" },
  { id: 3, title: "Co-Living" },
];

export const ExperienceContent: string[] = ["knowledge of the local real estate market", "property trends and investment opportunities", "Clear and open communication"];

export const ExperienceSubContent: string = "we redefine the essence of real estate. With a legacy of trust and excellence, we present to you the pinnacle of luxury living.";

export const PropertyHomeContent: string = "This is where you may locate a dream place for you of any sort anywhere in the world at an inexpensive price.";

export const PropertyServicesContent: string = "We understand that real estate transactions are more than just buying or selling properties – they are about realizing dreams, making investments, and embracing new beginnings.";

export const CheckListData: string[] = ["Comprehensive Services", "Innovative Marketing", "Expert Guidance", "Investment Expertise", "Personalized Approach", "Trusted Partner"];

export const ServiceData: InfoList[] = [
  { image: "1.svg", title: "Sell Spaces", text: "We sell your space at the greatest market value and in a timely manner." },
  { image: "2.svg", title: "Free Marketing", text: "We promote on many internet platforms to find the greatest real estate for you." },
  { image: "3.svg", title: "Rent Spaces", text: "We provide free consultation to help you find a tenant for your new house." },
  { image: "6.svg", title: "Buy Spaces", text: "We assist you in purchasing your ideal home for you and your family at the best possible price." },
];

export const CityData: InfoList[] = [
  { image: "1.jpg", title: "New York", text: "120 Properties" },
  { image: "2.jpg", title: "London", text: "546 Properties" },
  { image: "3.jpg", title: "Canada", text: "354 Properties" },
  { image: "4.jpg", title: "Germany", text: "145 Properties" },
];

export const CounterData: CounterList[] = [
  { end: 8, label: "Year of Experience" },
  { end: 135, label: "Home Brokers" },
  { end: 35, suffix: "K", label: "Home Rented" },
  { end: 10, label: "Win An award" },
];

export const TeamData: TeamList[] = [
  { name: "Daniel Thompson", image: "other/about/p-1.jpg" },
  { name: "James Miller", image: "other/about/p-2.jpg" },
  { name: "Ryan Clark", image: "other/about/p-3.jpg" },
  { name: "Amanda Rodriguez", image: "other/about/p-4.jpg" },
  { name: "Justin Martin", image: "other/about/p-5.jpg" },
  { name: "John Miller", image: "property2/team/1.jpg" },
  { name: "Mia Thomas", image: "property2/team/2.jpg" },
  { name: "Daniel Lewis", image: "property2/team/3.jpg" },
  { name: "Robert Taylor", image: "property2/team/4.jpg" },
  { name: "Alice Johnson", type: "Project Manager", image: "other/team/t-1.jpg" },
  { name: "Bob Smith", type: "Senior Developer", image: "other/team/t-2.jpg" },
  { name: "Cathy Brown", type: "UX/UI Designer", image: "other/team/t-3.jpg" },
  { name: "David Lee", type: "QA Engineer", image: "other/team/t-4.jpg" },
  { name: "Jack Taylor", type: "Sales Executive", image: "other/team/t-5.jpg" },
  { name: "Emma Davis", type: "Product Owner", image: "other/team/t-6.jpg" },
  { name: "John Deo", type: "Web Design", image: "other/team/t-7.jpg" },
  { name: "Liam Harris", type: "Data Analyst", image: "other/team/t-8.jpg" },
];

export const SocialData: string[] = ["facebook", "skype", "instagram", "mail"];

export const SocialListData: IconLinkList[] = [
  { url: "https://www.facebook.com/", icon: "ri-facebook-line" },
  { url: "https://x.com/", icon: "ri-twitter-line" },
  { url: "https://in.linkedin.com/", icon: "ri-linkedin-line" },
];
