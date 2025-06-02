import { Autoplay, EffectFade, FreeMode } from "swiper/modules";
import { CounterList, InfoList } from "../../types/CommonComponents";
import { DiscoverySliderList } from "../../types/HomeDemo";

// Slider options from swiper plugin
export const PropertyHomeSliderSetting = {
  effect: "fade",
  modules: [EffectFade, Autoplay, FreeMode],
  freeMode: true,
  speed: 2000,
  autoplay: { delay: 1500, disableOnInteraction: false },
  loop: true,
};

export const PropertyContent: string = "This is where you may locate a dream place for you of any sort anywhere in the world at an inexpensive price.";

export const AboutContent: string = "Discover the appropriate property that is most acceptable for you, ranging from houses for purpose that are minimalist to premium apartments for sale and rent with the greatest staff of our organization.";

export const AboutListData: string[] = ["45k partner has worked with us", "Professional & experienced humans resource", "Provide the best service for users", "We have more than 10 years of experience"];

export const OurServiceContent: string = "At Fuso, we simplify property buying, making the process seamless and stress-free.";

export const ServiceList: InfoList[] = [
  { image: "property/service/1.svg", title: "Sell Spaces", text: "List your property and connect with buyers easily." },
  { image: "property/service/6.svg", title: "BUY SPACE", text: "Explore verified listings with expert guidance." },
  { image: "property/service/3.svg", title: "RENT SPACE", text: "Rent out or find tenants hassle-free." },
  { image: "property/service/2.svg", title: "FREE MARKETING", text: "Attract the right audience with free marketing." },
];

export const DiscoverySliderData: DiscoverySliderList[] = [
  { image: "1.jpg", location: "America", sale: 200, rent: 324 },
  { image: "2.jpg", location: "London", sale: 100, rent: 628 },
  { image: "3.jpg", location: "Africa", sale: 560, rent: 508 },
  { image: "4.jpg", location: "Canada", sale: 351, rent: 324 },
  { image: "5.jpg", location: "Toronto", sale: 700, rent: 824 },
  { image: "1.jpg", location: "America", sale: 200, rent: 324 },
  { image: "2.jpg", location: "London", sale: 100, rent: 628 },
  { image: "3.jpg", location: "Africa", sale: 560, rent: 508 },
  { image: "4.jpg", location: "Canada", sale: 351, rent: 324 },
  { image: "5.jpg", location: "Toronto", sale: 700, rent: 824 },
];

export const AchievementsContent: string = "We have over 25 years of experience. We've rented more than 250 properties and won awards for providing excellent customer service by fulfilling our customers' dreams and specifications.";

export const AchievementsCounterData: CounterList[] = [
  { end: 20, label: "Year of Experience" },
  { end: 800, suffix: "+", label: "Home rented last year" },
  { end: 200, label: "Win An award" },
];

// Slider options from swiper plugin
export const DiscoverySlider = {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export const PropertyNewsletterContent: string = "There are just two things that are crucial. Family is most important, followed by comfort, so let's get started with those two.";
