import { Call, Location, Sms } from "iconsax-react";
import { routes } from "../../routers/routes";
import { ContactBoxList, IconLinkList } from "../../types/CommonComponents";
import { FooterDetailType } from "../../types/Layout";

export const ContactListData: ContactBoxList[] = [
  { icon: <Call className="iconsax" />, title: "Call", text: "(702) 555-0122" },
  { icon: <Sms className="iconsax" />, title: "Email", text: "general.info@gmail.com" },
  { icon: <Location className="iconsax" />, title: "Location", text: "4517 Washington Ave. Manchester," },
];

export const SocialMediaData: IconLinkList[] = [
  { url: "https://www.instagram.com/", icon: "ri-instagram-line" },
  { url: "https://www.facebook.com/", icon: "ri-facebook-line" },
  { url: "https://x.com/", icon: "ri-twitter-x-line" },
  { url: "https://in.pinterest.com/", icon: "ri-pinterest-line" },
];

export const FooterDetailData: FooterDetailType[] = [
  {
    id: 1,
    title: "Location",
    links: [
      { title: "New York", url: routes.Car.Listing.CarLeftList },
      { title: "London", url: routes.Car.Listing.CarLeftList },
      { title: "Prague", url: routes.Car.Listing.CarLeftList },
      { title: "Cape Town", url: routes.Car.Listing.CarLeftList },
      { title: "Singapore", url: routes.Car.Listing.CarLeftList },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    links: [
      { title: "Saved Rides", url: routes.Pages.Other.UserDashboard },
      { title: "Profile", url: routes.Pages.Other.UserDashboard },
      { title: "Post Cars", url: routes.Pages.Other.UserDashboard },
      { title: "Privacy", url: routes.Pages.Other.Privacy },
    ],
  },
  {
    id: 3,
    title: "official info",
    contactList: true,
    links: [
      { title: "4517 Washington Ave. ManchesteR", icon: "ri-map-pin-fill" },
      { title: "(702) 555-0122", icon: "ri-phone-fill" },
      { title: "general.info@gmail.com", icon: "ri-mail-fill" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    links: [
      { title: "Portfolio", url: routes.Property.Grid.Property3Grid },
      { title: "Blog", url: routes.Pages.Blog.BlogLeftSidebar },
      { title: "Pricing", url: routes.Pages.Other.Pricing },
      { title: "Register", url: routes.Pages.Other.SignUp1 },
      { title: "Review", url: routes.Pages.Other.Testimonial },
    ],
  },
  {
    id: 5,
    title: "About",
    links: [
      { title: "About Us", url: routes.Pages.Other.AboutUs1 },
      { title: "Service", url: routes.Pages.Other.Services },
      { title: "FAQs", url: routes.Pages.Other.Faq },
      { title: "Teams", url: routes.Pages.Other.Team },
      { title: "Contact Us", url: routes.Pages.Other.ContactUs1 },
    ],
  },
];

export const FooterDescription: string[] = ["Find your ideal career with personalized support, together.", "Let us guide you towards a fulfilling career path with our personalized recommendations and supportive community."];

export const FooterClassMap: { [key: string]: string } = {
  "car-2": "car2-footer",
  "job-2": "dark-footer-section section-t-space",
  "property-2": "property2-footer",
};
